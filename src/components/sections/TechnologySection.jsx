import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import ProductCard from "../product/ProductCard";
import productsData from "../../data/products.json";

const categories = ["All", "Smart Watch", "Laptop", "Tablet", "Desktop", "Accessories"];

export default function TechnologySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Get technology products from JSON
  const allProducts = productsData.products.filter(p => p.category === "technology");
  
  // Filter by subcategory
  const products = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.subcategory === selectedCategory);

  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Responsive Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-black">Technology</h2>

          <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-8">
            
            {/* MOBILE ONLY: Category Dropdown*/}
            <div className="relative block md:hidden w-full max-w-[280px]">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm font-medium text-gray-700 outline-none focus:border-green-500 cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* DESKTOP ONLY: Category List */}
            <div className="hidden md:flex items-center gap-8">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative text-sm font-medium transition-colors ${selectedCategory === cat ? "text-green-500" : "text-gray-500 hover:text-black"}`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <ChevronLeft size={20} className="text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <ChevronRight size={20} className="text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} layout="horizontal" />
          ))}
        </div>
      </div>
    </section>
  );
}