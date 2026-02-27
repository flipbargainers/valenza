# VALENA (GitHub Pages + Pages CMS + Real Commerce Backend)

Frontend runs on GitHub Pages.  
Content editing is handled by Pages CMS.  
Real payments and order/customer storage are handled by the backend in `backend/`.

## What is editable from CMS

- Site title, brand name, navigation, footer links: `content/site.json`
- Hero text/images and homepage product sections: `content/home.json`
- Full product catalog: `content/products.json`
- Collections: `content/collections.json`
- Reviews: `content/reviews.json`
- Commerce/public checkout settings: `content/commerce.json`

## Important architecture note

GitHub Pages cannot run a traditional server backend (like Node/Express/PHP).

So production architecture is:
- GitHub Pages: storefront UI
- Pages CMS: content/dashboard editing
- External backend host (Railway/Render/Fly): payments + database APIs
- MongoDB: products, customers, orders
- Stripe Checkout + Webhooks: real payment flow

## Frontend publish steps

1. Push this repo to GitHub.
2. In GitHub: `Settings -> Pages` and deploy from your main branch root.
3. Open Pages CMS and connect the same repo.
4. Pages CMS will use `.pages.yml` and show all editable fields.
5. Save changes in CMS; it commits to GitHub automatically and your live site updates.

## Commerce dashboard settings (Pages CMS)

Use `content/commerce.json` for safe settings:
- backend API base URL
- whether storefront loads products from backend
- currency symbol/code
- provider name and dashboard URL
- checkout error/success helper messages

Do not place secret keys in Pages CMS. Keep secrets in backend env.

## Backend setup (real ecommerce)

1. Create MongoDB database (local MongoDB or Atlas).
2. In `backend/`, copy `.env.example` to `.env` and set:
   - `MONGODB_URI`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `FRONTEND_URL`
   - `CORS_ORIGIN`
3. Install and run:
```bash
cd backend
npm install
npm run db:init
npm run db:seed
npm run dev
```
4. Deploy backend to Railway/Render/Fly.
5. Set `content/commerce.json -> apiBaseUrl` to deployed backend URL.
6. Set `commerce.useLiveBackendProducts = true` if you want storefront to read products from DB API.

## Stripe webhook

Use Stripe CLI locally:
```bash
stripe listen --forward-to localhost:8787/api/webhooks/stripe
```
Copy generated webhook secret into `STRIPE_WEBHOOK_SECRET`.

## Add more homepage product sections

Edit `content/home.json` -> `productSections` and add a new block:

- `mode: "latest"`: newest products
- `mode: "featured"`: featured products
- `mode: "category"` + `value: "sneakers"` (or any category)
- `mode: "collection"` + `value: "summer"` (or any slug)
- `mode: "tag"` + `value: "runner"` (or any tag)
- `mode: "ids"` + `value: "1,2,5"` (exact products)

## Advanced product fields (CMS)

Each product supports:
- `status` (`published` or `draft`)
- `sku`
- `stock`
- `featured`
- `tags[]`
- `gender`

Only `published` products are shown on storefront.

## Media uploads

Upload images through CMS to `assets/uploads`.
Then use those image paths in your JSON fields.
