
# Montji – Static Demo (GitHub Pages Ready)

This is a front-end only demo of **Montji**, an online food marketplace for Omani family businesses and businessmen.  
It uses **pure HTML/CSS/JS** (no build step) and persists demo data in **localStorage**.

## Features
- Home page with **search**, **offers**, and **advertisements** (sample Omani-themed banners)
- Shop with filters: food type, city; product cards; **add to cart**
- Cart and Checkout with delivery options:
  - Pick up from family home
  - Pick up from businessman shop
  - Delivery to customer home (delivery cost by 30km tiers)
- Auth: **login** and **register** (roles: customer, family business, businessman)
- Multi-role **dashboards** in one page:
  - Admin, Employee, Delivery Company, Businessman, Family Business, Customer
  - Approvals, rental requests, add dish, simple profit and revenue KPIs
- Orders listing for customers with simple **online payment** simulation after approval
- **Notifications** via Toastify and **animations** via AOS
- **Responsive** via Bootstrap 5

## Quick Start
1. **Open locally**: just open `index.html` in a browser.  
   (Note: everything runs client-side; data saved to localStorage)
2. **Deploy on GitHub Pages**:
   - Create a new repo on GitHub (e.g., `montji-demo`).
   - Upload/extract all files at the repo root.
   - **Settings → Pages → Build and deployment**: Source = **Deploy from a branch**, Branch = **main**, Folder = **/**.
   - Wait 1–2 minutes. Your site will be live at `https://<your-username>.github.io/montji-demo/`.

## Demo Accounts
- Admin: `admin@montji.demo` / `admin`
- Employee: `sara@montji.demo` / `sara`
- Delivery Company: `fast@montji.demo` / `fast`
- Businessman: `yusuf@montji.demo` / `yusuf`
- Family Business: `hana@montji.demo` / `hana`
- Customer: `ahmed@montji.demo` / `ahmed`

## Notes
- Images are hotlinked from royalty-free sources for demo only.
- No back end, no payments are processed; flows are simulated.
- If you want to reset data, clear **Local Storage** for the site in your browser.
