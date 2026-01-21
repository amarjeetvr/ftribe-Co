import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import ProductCard from "../product/ProductCard";
import productsData from "../../data/products.json";

const categories = [
  "All",
  "Men's watch",
  "Women's Watches",
  "Smart watch",
];

export default function WatchSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Get watch products from JSON
  const allProducts = productsData.products.filter(p => p.category === "watch");
  
  // Filter by subcategory
  const products = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.subcategory === selectedCategory);

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Responsive Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-black">Watch</h2>

          <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-8">
            
            {/* Mobile Dropdown Category Selector */}
            <div className="relative block md:hidden w-full min-w-[160px]">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-green-500 cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Desktop Horizontal Category List */}
            <div className="hidden md:flex items-center gap-8">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(item)}
                  className={`relative text-sm font-medium transition-colors
                    ${selectedCategory === item ? "text-green-500" : "text-gray-500 hover:text-black"}
                  `}
                >
                  {item}
                  {selectedCategory === item && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition text-gray-300">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition text-black">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} layout="vertical" />
          ))}
        </div>
      </div>
    </section>
  );
}