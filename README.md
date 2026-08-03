# ShopEasy

A simple React-based online shopping cart web app, built as a learning project for the E-Commerce course (BSc. CSIT, 6th Semester).

ShopEasy lets you browse products, search for items, manage a shopping cart, and simulate a checkout — using real product data pulled from a free public API. Not intended for public use or real transactions.

## Features

- **Product listing** — fetches and displays live product data (name, price, image) from the DummyJSON API
- **Search** — search products by name, with results fetched directly from the API
- **Add to cart** — add products to a running cart
- **Quantity controls** — increase/decrease item quantity, with the item auto-removed when quantity hits 0
- **Live total** — cart total recalculates automatically as items and quantities change
- **Checkout** — simulates placing an order; logs the order details to the browser console and clears the cart

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — dev server & build tool
- CSS — styling
- [DummyJSON](https://dummyjson.com/) — free public API for sample product data

## Project Structure

```
src/
├── App.jsx               # Top-level component, holds search state
├── components/
│   ├── Header.jsx         # Site title, search bar, cart icon
│   ├── Shopping.jsx       # Fetches products, manages cart state
│   ├── ShopWindow.jsx     # Single product card
│   ├── Cart.jsx           # Single cart item with quantity controls
│   └── TotalCart.jsx      # Cart total + checkout button
├── index.css
└── main.jsx
```

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/nishansph-cloud/shopping-cart.git
   cd shopping-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

4. Open the link shown in the terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

## API Reference

- All products: `https://dummyjson.com/products`
- Search: `https://dummyjson.com/products/search?q=<term>`

## Notes

- This project uses a free, public API (no authentication required), so no `.env` file or API keys are needed.
- The "admin notification" on checkout is simulated via `console.log` rather than a real email/backend, since this is a frontend-only learning project.

## Author

Nishan — BSc. CSIT, 6th Semester