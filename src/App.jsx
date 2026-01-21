import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import SocialProofNotification from "./components/common/SocialProofNotification";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          <SocialProofNotification />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
