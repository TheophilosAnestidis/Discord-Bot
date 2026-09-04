import crypto from 'node:crypto';
import { EmbedBuilder } from 'discord.js';
import {
  getPremiumSubscription,
  upsertPremiumSubscription,
  revokePremiumSubscription,
  createPremiumCode,
  getPremiumCode,
  redeemPremiumCode,
  listPremiumCodes,
  deletePremiumCode,
  addPremiumAuditLog,
  getPremiumAuditLogs
} from '../database/database.js';

const OWNER_IDS = new Set(
  String(process.env.OWNER_USER_IDS || process.env.OWNER_USER_ID || '')
    .split(',').map(v => v.trim()).filter(Boolean)
);

export const PLANS = Object.freeze({
  starter: { label: 'Starter', price: 4.99, days: 30, features: ['tickets', 'ai', 'transcripts'] },
  pro: { label: 'Pro', price: 9.99, days: 90, features: ['tickets', 'ai', 'transcripts', 'analytics', 'priority', 'advanced_ai'] },
  lifetime: { label: 'Lifetime', price: 29.99, days: null, features: ['*'] }
});

export function isOwner(userId) { return OWNER_IDS.has(userId); }

function hash(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function makeCode() {
  const body = crypto.randomBytes(9).toString('base64url').toUpperCase();
  return `VX-${body.slice(0, 5)}-${body.slice(5, 10)}-${body.slice(10, 12)}`;
}

export function getPremium(guildId) {
  const row = getPremiumSubscription(guildId);
  if (!row) return null;
  if (row.expires_at && row.expires_at <= Date.now()) {
    revokePremiumSubscription(guildId, 'expired');
    return null;
  }
  return row;
}

export function hasPremium(guildId, feature = null) {
  const sub = getPremium(guildId);
  if (!sub) return false;
  if (!feature) return true;
  const plan = PLANS[sub.plan] || PLANS.starter;
  return plan.features.includes('*') || plan.features.includes(feature);
}

export async function requirePremium(interaction, feature = null) {
  if (!interaction.guildId || hasPremium(interaction.guildId, feature)) return true;
  const embed = new EmbedBuilder()
    .setColor(0xf59e0b)
    .setTitle('💎 VaultX Premium Required')
    .setDescription('This feature is available to Premium servers only.')
    .addFields({
      name: '🔐 Access',
      value: feature ? `Required feature: **${feature.replace('_', ' ')}**` : 'A valid Premium subscription is required.',
      inline: true
    }, {
      name: '✨ Activate',
      value: 'Ask the bot owner for a Premium activation code.',
      inline: true
    })
    .setFooter({ text: 'VaultX Premium • Secure licensing' })
    .setTimestamp();
  if (!interaction.replied && !interaction.deferred) await interaction.reply({ embeds: [embed], ephemeral: true });
  else await interaction.editReply({ embeds: [embed] });
  return false;
}

export function grantPremium({ guildId, plan = 'starter', days = null, actorId, source = 'manual' }) {
  if (!PLANS[plan]) throw new Error('Unknown plan');
  const planDays = days ?? PLANS[plan].days;
  const current = getPremium(guildId);
  let expiresAt = planDays == null ? null : Date.now() + Math.max(1, Number(planDays)) * 86400000;
  // Code redemptions extend an existing active subscription instead of silently replacing it.
  if (source === 'code' && current) {
    if (current.expires_at === null || expiresAt === null) expiresAt = null;
    else expiresAt = Math.max(Date.now(), current.expires_at) + Math.max(1, Number(planDays)) * 86400000;
  }
  const row = upsertPremiumSubscription({ guildId, plan, expiresAt, actorId, source });
  addPremiumAuditLog({ guildId, action: 'grant', actorId, details: JSON.stringify({ plan, days: planDays, source }) });
  return row;
}

export function revokePremium(guildId, actorId, reason = 'manual') {
  const result = revokePremiumSubscription(guildId, reason);
  addPremiumAuditLog({ guildId, action: 'revoke', actorId, details: JSON.stringify({ reason }) });
  return result;
}

export function generatePremiumCodes({ count = 1, plan = 'starter', days = null, maxUses = 1, actorId }) {
  if (!PLANS[plan]) throw new Error('Unknown plan');
  const out = [];
  for (let i = 0; i < Math.min(25, Math.max(1, Number(count))); i++) {
    let code = makeCode();
    while (getPremiumCode(hash(code))) code = makeCode();
    createPremiumCode({ codeHash: hash(code), codePreview: code, plan, days: days ?? PLANS[plan].days, maxUses: Math.max(1, Number(maxUses)), actorId });
    out.push(code);
  }
  addPremiumAuditLog({ guildId: null, action: 'codes_generate', actorId, details: JSON.stringify({ count: out.length, plan, days, maxUses }) });
  return out;
}

export function redeemCode({ code, guildId, userId }) {
  const normalized = String(code || '').trim().toUpperCase();
  const row = getPremiumCode(hash(normalized));
  if (!row) throw new Error('Invalid Premium code.');
  if (row.revoked_at) throw new Error('This Premium code has been revoked.');
  if (row.max_uses && row.used_count >= row.max_uses) throw new Error('This Premium code has reached its usage limit.');
  const plan = PLANS[row.plan] ? row.plan : 'starter';
  const subscription = grantPremium({ guildId, plan, days: row.days, actorId: userId, source: 'code' });
  redeemPremiumCode(row.code_hash, guildId, userId);
  addPremiumAuditLog({ guildId, action: 'redeem', actorId: userId, details: JSON.stringify({ plan, code: row.code_preview }) });
  return subscription;
}

export function formatPremium(sub) {
  if (!sub) return '❌ Inactive';
  const plan = PLANS[sub.plan] || PLANS.starter;
  return sub.expires_at ? `💎 ${plan.label} • <t:${Math.floor(sub.expires_at / 1000)}:R>` : `💎 ${plan.label} • Lifetime`;
}

export { listPremiumCodes, deletePremiumCode, getPremiumAuditLogs };
