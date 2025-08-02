
// Utilities: storage, ids, price, delivery
const LS_KEY = "montji-demo-static-v1";
const uid = () => Math.random().toString(36).slice(2, 9);
const nowISO = () => new Date().toISOString();

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(LS_KEY) || "null");
    if (!s) {
      localStorage.setItem(LS_KEY, JSON.stringify(window.MONTJI_SEED));
      return window.MONTJI_SEED;
    }
    return s;
  } catch (e) {
    localStorage.setItem(LS_KEY, JSON.stringify(window.MONTJI_SEED));
    return window.MONTJI_SEED;
  }
}
function saveState(s) {
  localStorage.setItem(LS_KEY, JSON.stringify(s));
}

function currentUser(state) {
  return state.users.find(u => u.id === (state.sessions?.currentUserId || "")) || null;
}

function applyDiscounts(dish, qty, size) {
  let price = dish.price;
  if (dish.discounts?.bySize?.[size]) {
    price = price * (1 - dish.discounts.bySize[size] / 100);
  }
  const bestQty = (dish.discounts?.byQty || [])
    .filter(x => qty >= x.qty)
    .sort((a, b) => b.pct - a.pct)[0];
  if (bestQty) price = price * (1 - bestQty.pct / 100);
  if (dish.discounts?.generalPct) price = price * (1 - dish.discounts.generalPct / 100);
  return Number(price.toFixed(3));
}

function deliveryCost(company, km) {
  if (!company) return 0;
  const base = company.baseCost;
  if (km <= company.baseKm) return base;
  const extraKm = km - company.baseKm;
  const steps = Math.ceil(extraKm / company.stepKm);
  return Number((base + steps * company.stepCost).toFixed(3));
}

// Simple toast using Toastify (from CDN)
function notify(msg, type="info") {
  Toastify({
    text: msg,
    gravity: "top",
    position: "right",
    duration: 2500,
  }).showToast();
}

// Navigation helpers
function navInit(state) {
  const user = currentUser(state);
  const loginBtn = document.getElementById("navLogin");
  const logoutBtn = document.getElementById("navLogout");
  const dashBtn = document.getElementById("navDashboard");
  const roleBadge = document.getElementById("navRole");
  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (dashBtn) dashBtn.style.display = "inline-block";
    if (roleBadge) { roleBadge.innerText = user.role; roleBadge.style.display = "inline-block"; }
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (dashBtn) dashBtn.style.display = "none";
    if (roleBadge) roleBadge.style.display = "none";
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const s = loadState();
      s.sessions.currentUserId = null;
      saveState(s);
      notify("Logged out");
      setTimeout(()=>location.href="index.html", 400);
    });
  }
}

// Cart helpers
function getCart(state, user) {
  const key = user?.id || "guest";
  return state.carts[key] || { items: [] };
}
function setCart(state, user, cart) {
  const key = user?.id || "guest";
  state.carts[key] = cart;
  saveState(state);
}
