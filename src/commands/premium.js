import {
  SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits
} from 'discord.js';
import {
  isOwner, PLANS, getPremium, grantPremium, revokePremium,
  generatePremiumCodes, redeemCode, formatPremium,
  listPremiumCodes, deletePremiumCode, getPremiumAuditLogs
} from '../premium/premiumService.js';
import { createPurchaseOrder } from '../database/database.js';
import { createCheckoutSession, getProducts } from '../purchase/purchaseService.js';

export const data = new SlashCommandBuilder()
  .setName('premium')
  .setDescription('VaultX Premium licensing & access control')
  .addSubcommand(s => s.setName('status').setDescription('Show Premium status for this server'))
  .addSubcommand(s => s.setName('buy').setDescription('Purchase VaultX Premium for this server')
    .addStringOption(o => o.setName('plan').setDescription('Premium plan').setRequired(true).addChoices(...Object.entries(PLANS).map(([value,p])=>({name:`${p.label} • €${p.price.toFixed(2)}`,value})))))
  .addSubcommand(s => s.setName('grant').setDescription('[OWNER] Grant Premium to this server')
    .addStringOption(o => o.setName('plan').setDescription('Premium plan').setRequired(true).addChoices(...Object.entries(PLANS).map(([value,p])=>({name:p.label,value}))))
    .addIntegerOption(o => o.setName('days').setDescription('Override duration in days (0 = lifetime)').setMinValue(0)))
  .addSubcommand(s => s.setName('revoke').setDescription('[OWNER] Revoke Premium from this server'))
  .addSubcommand(s => s.setName('audit').setDescription('[OWNER] View Premium audit history for this server'))
  .addSubcommandGroup(g => g.setName('code').setDescription('Premium activation codes')
    .addSubcommand(s => s.setName('generate').setDescription('[OWNER] Generate activation codes')
      .addStringOption(o=>o.setName('plan').setDescription('Plan').setRequired(true).addChoices(...Object.entries(PLANS).map(([value,p])=>({name:p.label,value}))))
      .addIntegerOption(o=>o.setName('count').setDescription('Number of codes').setMinValue(1).setMaxValue(25))
      .addIntegerOption(o=>o.setName('days').setDescription('Duration in days (0 = lifetime)').setMinValue(0))
      .addIntegerOption(o=>o.setName('uses').setDescription('Uses per code').setMinValue(1).setMaxValue(100)))
    .addSubcommand(s => s.setName('redeem').setDescription('Redeem a Premium activation code')
      .addStringOption(o=>o.setName('code').setDescription('Your VaultX Premium code').setRequired(true)))
    .addSubcommand(s => s.setName('list').setDescription('[OWNER] List generated codes'))
    .addSubcommand(s => s.setName('revoke').setDescription('[OWNER] Revoke a code')
      .addStringOption(o=>o.setName('code').setDescription('Code to revoke').setRequired(true))));

function ownerOnly(interaction) {
  return isOwner(interaction.user.id);
}
function errorEmbed(message) { return new EmbedBuilder().setColor(0xef4444).setTitle('VaultX 〢 Premium').setDescription(`> ${message}`).setFooter({ text: 'VaultX • Premium Control' }).setTimestamp(); }
function successEmbed(title, description) { return new EmbedBuilder().setColor(0x8b5cf6).setTitle(`VaultX 〢 ${title}`).setDescription(description).setFooter({text:'VaultX • Premium Control'}).setTimestamp(); }

export async function execute(interaction) {
  const group = interaction.options.getSubcommandGroup(false);
  const sub = interaction.options.getSubcommand();

  if (sub === 'buy' && !group) {
    if (!interaction.guildId) return interaction.reply({embeds:[errorEmbed('This command must be used inside a server.')],ephemeral:true});
    const plan = interaction.options.getString('plan');
    if (getPremium(interaction.guildId)) return interaction.reply({embeds:[errorEmbed('This server already has an active Premium subscription.')],ephemeral:true});
    try {
      const product = getProducts(PLANS).find(x => x.id === plan);
      const order = createPurchaseOrder({ plan, days: PLANS[plan].days, guildId: interaction.guildId, userId: interaction.user.id, amount: product.price });
      const checkout = await createCheckoutSession({ order, product });
      if (checkout?.url) {
        const { updatePurchaseOrder } = await import('../database/database.js');
        updatePurchaseOrder(order.id, { checkout_session_id: checkout.id, checkout_url: checkout.url });
        return interaction.reply({embeds:[successEmbed('Checkout Ready',`> **${product.name}** 〢 €${product.price.toFixed(2)}\n> Order 〢 **${order.id}**\n\n> [Open secure checkout](${checkout.url})`)],ephemeral:true});
      }
      return interaction.reply({embeds:[successEmbed('Order Created',`> **${product.name}** 〢 €${product.price.toFixed(2)}\n> Order 〢 **${order.id}**\n\n> Online payments are not configured yet. Contact the administrator with your order ID.`)],ephemeral:true});
    } catch (e) {
      return interaction.reply({embeds:[errorEmbed(e.message || 'Could not create purchase.')],ephemeral:true});
    }
  }

  if (sub === 'status' && !group) {
    const subData = getPremium(interaction.guildId);
    const embed = successEmbed('Premium Status', subData ? `> **${PLANS[subData.plan]?.label ?? subData.plan}**\n> ${subData.expires_at ? `Active until <t:${Math.floor(subData.expires_at/1000)}:R>` : 'Lifetime access'}` : '> **Free**\n> No active subscription.')
      .addFields(
        {name:'• Server',value:`> ${interaction.guild?.name ?? 'Unknown'}`,inline:true},
        {name:'• Access',value:subData ? '> Active' : '> Inactive',inline:true},
        {name:'• Features',value:subData ? `> ${(PLANS[subData.plan]?.features || []).join(' • ')}` : '> tickets • ai',inline:true}
      );
    return interaction.reply({embeds:[embed],ephemeral:true});
  }

  if (sub === 'redeem') {
    if (!interaction.guildId) return interaction.reply({embeds:[errorEmbed('This command must be used in a server.')],ephemeral:true});
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) return interaction.reply({embeds:[errorEmbed('Only server administrators can redeem Premium for this server.')],ephemeral:true});
    try {
      const result = redeemCode({code:interaction.options.getString('code'),guildId:interaction.guildId,userId:interaction.user.id});
      return interaction.reply({embeds:[successEmbed('Premium Activated',`> **${interaction.guild.name}**\n> ${formatPremium(result).replace('💎 ','')}`)],ephemeral:true});
    } catch (e) { return interaction.reply({embeds:[errorEmbed(e.message)],ephemeral:true}); }
  }

  if (!ownerOnly(interaction)) return interaction.reply({embeds:[errorEmbed('This is an owner-only VaultX control. Your server cannot use licensing administration commands.')],ephemeral:true});

  if (!interaction.guildId && sub !== 'generate' && sub !== 'list') return interaction.reply({embeds:[errorEmbed('A server is required for this action.')],ephemeral:true});

  try {
    if (sub === 'grant') {
      const plan=interaction.options.getString('plan'); const rawDays=interaction.options.getInteger('days');
      const days=rawDays===0 ? null : rawDays;
      const result=grantPremium({guildId:interaction.guildId,plan,days,actorId:interaction.user.id});
      return interaction.reply({embeds:[successEmbed('Premium Granted',`> **${PLANS[plan].label}** 〢 ${interaction.guild.name}\n> ${formatPremium(result).replace('💎 ','')}`)]});
    }
    if (sub === 'revoke' && !group) {
      revokePremium(interaction.guildId,interaction.user.id,'owner_revoke');
      return interaction.reply({embeds:[successEmbed('Premium Revoked',`> Access removed from **${interaction.guild.name}**.`)]});
    }
    if (sub === 'audit' && !group) {
      const rows = getPremiumAuditLogs(interaction.guildId, 15);
      const text = rows.length ? rows.map(r => `• <t:${Math.floor(r.created_at/1000)}:R> **${r.action}**${r.actor_id ? ` by <@${r.actor_id}>` : ''}`).join('\n') : 'No Premium audit events yet.';
      return interaction.reply({embeds:[successEmbed('Audit Log',text.slice(0,4000))],ephemeral:true});
    }
    if (group === 'code' && sub === 'generate') {
      const count = interaction.options.getInteger('count') ?? 1;
      const plan = interaction.options.getString('plan');
      const rawDays = interaction.options.getInteger('days');
      const days = rawDays === 0 ? null : rawDays;
      const uses = interaction.options.getInteger('uses') ?? 1;
      const codes = generatePremiumCodes({ count, plan, days, maxUses: uses, actorId: interaction.user.id });
      const codeText = codes.map(c => `\`${c}\``).join('\n');
      return interaction.reply({ embeds: [successEmbed('Codes Generated', `> **${PLANS[plan].label}** × ${codes.length}\n> ${days === null ? 'Lifetime' : `${days} days`} • ${uses} use${uses === 1 ? '' : 's'} / code\n\n${codeText}`)], ephemeral: true });
    }
    if (group === 'code' && sub === 'list') {
      const rows = listPremiumCodes(25);
      const text = rows.length ? rows.map(r => `${r.revoked_at ? '🔒' : '🔑'} \`${r.code_preview}\` • ${r.plan} • ${r.used_count}/${r.max_uses}`).join('\n') : 'No codes generated.';
      return interaction.reply({ embeds: [successEmbed('Code Vault', text.slice(0, 4000))], ephemeral: true });
    }
    if (group === 'code' && sub === 'revoke') {
      const code = interaction.options.getString('code').trim().toUpperCase();
      const crypto = await import('node:crypto');
      const codeHash = crypto.createHash('sha256').update(code).digest('hex');
      const result = deletePremiumCode(codeHash);
      if (!result.changes) throw new Error('Code not found.');
      return interaction.reply({ embeds: [successEmbed('🔒 Code Revoked', `> Code \`${code}\` is no longer redeemable.`)], ephemeral: true });
    }
  } catch (e) { console.error(e); return interaction.reply({embeds:[errorEmbed(e.message || 'Unexpected Premium error.')],ephemeral:true}); }
}
