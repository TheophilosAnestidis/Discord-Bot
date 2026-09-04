import crypto from "node:crypto";

export function getProducts(PLANS) {
  return Object.entries(PLANS).map(([id, plan]) => ({
    id,
    name: plan.label,
    price: Number(plan.price ?? 0),
    currency: "EUR",
    days: plan.days,
    features: plan.features
  }));
}

function stripeKey() {
  return process.env.STRIPE_SECRET_KEY || "";
}

function baseUrl() {
  return (process.env.PUBLIC_URL || `http://localhost:${process.env.DASHBOARD_PORT || 3000}`).replace(/\/$/, "");
}

async function stripeRequest(path, params) {
  const key = stripeKey();
  if (!key) return null;
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(params)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || "Stripe request failed.");
  return data;
}

export async function createCheckoutSession({ order, product }) {
  if (!stripeKey()) return null;
  const cents = Math.round(Number(product.price) * 100);
  return stripeRequest("checkout/sessions", {
    mode: "payment",
    "line_items[0][price_data][currency]": "eur",
    "line_items[0][price_data][product_data][name]": `VaultX Premium ${product.name}`,
    "line_items[0][price_data][product_data][description]": `VaultX ${product.name} Premium`,
    "line_items[0][price_data][unit_amount]": String(cents),
    "line_items[0][quantity]": "1",
    success_url: `${baseUrl()}/purchase/success?order=${encodeURIComponent(order.id)}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl()}/purchase/cancelled?order=${encodeURIComponent(order.id)}`,
    "metadata[order_id]": order.id,
    "metadata[plan]": order.plan
  });
}

export async function retrieveCheckoutSession(sessionId) {
  if (!stripeKey()) return null;
  const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
    headers: { Authorization: `Bearer ${stripeKey()}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || "Could not verify payment.");
  return data;
}
