# Credmind Frontend

A modern e-commerce platform built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Styling
- **React Router DOM** - Client-side Routing
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── banners/          # Hero banners
│   ├── common/           # Shared components
│   ├── footer/           # Footer component
│   ├── header/           # Navbar, TopBar
│   ├── product/          # ProductCard component
│   ├── sections/         # Homepage sections (Technology, Watch, etc.)
│   └── sidebar/          # Category sidebar
├── context/
│   ├── CartContext.jsx   # Global cart state management
│   └── SearchContext.jsx # Search & filter functionality
├── data/
│   └── products.json     # All products & categories data
├── pages/
│   ├── Home.jsx          # Homepage
│   ├── Cart.jsx          # Shopping cart page
│   └── SearchResults.jsx # Search results page
└── App.jsx               # Main app with routing
```

## 🔄 Application Workflow

### 1. Data Flow
```
products.json → Context Providers → Components → UI
```

All product data is stored in `src/data/products.json` and accessed via React Context.

### 2. Cart Functionality

```
User clicks "Add to Cart"
        ↓
CartContext.addToCart(product)
        ↓
State updates + LocalStorage sync
        ↓
Navbar cart count updates
        ↓
Cart page shows items
```

**Key Features:**
- Cart state managed globally via `CartContext`
- Persists to `localStorage` (survives page refresh)
- Real-time cart count in Navbar
- Quantity controls (+/-) in cart

### 3. Search & Category Filter

```
User enters search / selects category
        ↓
SearchContext updates state
        ↓
Navigate to /search
        ↓
Products filtered & displayed
```

**Filter Logic:**
- Filter by category (Technology, Watch, Cosmetics, etc.)
- Filter by subcategory within sections
- Search by product name, model, or seller

### 4. Routing Structure

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with all sections |
| `/cart` | Cart | Shopping cart with order summary |
| `/search` | SearchResults | Filtered products view |

### 5. Component Hierarchy

```
App.jsx
├── BrowserRouter
│   └── CartProvider (Context)
│       └── SearchProvider (Context)
│           └── Routes
│               ├── Home
│               │   ├── TopBar
│               │   ├── Navbar (cart count, search)
│               │   ├── HeroBanner
│               │   ├── ShopByCategory
│               │   ├── TechnologySection → ProductCard[]
│               │   ├── WatchSection → ProductCard[]
│               │   ├── CosmeticSection → ProductCard[]
│               │   ├── RealEstateSection → ProductCard[]
│               │   ├── LuxuryFoodSection → ProductCard[]
│               │   └── Footer
│               ├── Cart
│               └── SearchResults
```

## 🛒 How Cart Works

1. **Adding Items:**
   - Hover over any product card
   - Click "Add to Cart" button
   - Button changes to "In Cart (qty)"

2. **Viewing Cart:**
   - Hover over cart icon in Navbar (dropdown preview)
   - Click "View Cart" to go to full cart page

3. **Managing Cart:**
   - Adjust quantities with +/- buttons
   - Remove individual items
   - Clear entire cart
   - Cart persists in localStorage

## 🔍 How Search Works

1. **From Navbar:**
   - Enter search term in search bar
   - Select category from dropdown
   - Click "Search" button
   - Redirects to `/search` with filtered results

2. **Within Sections:**
   - Each section has category tabs
   - Click tab to filter products within that section

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Key Files

| File | Purpose |
|------|---------|
| `src/data/products.json` | All products & categories |
| `src/context/CartContext.jsx` | Cart state + localStorage |
| `src/context/SearchContext.jsx` | Search & filter logic |
| `src/components/product/ProductCard.jsx` | Reusable product card |

---

Built with ❤️ using React + Vite
