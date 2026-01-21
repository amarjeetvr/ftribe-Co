import { useSearch } from "../context/SearchContext";
import ProductCard from "../components/product/ProductCard";
import TopBar from "../components/header/TopBar";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Search, X, Filter } from "lucide-react";

export default function SearchResults() {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    clearFilters
  } = useSearch();

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {searchQuery ? (
              <>
                Search Results for "{searchQuery}"
              </>
            ) : selectedCategory !== 'all' ? (
              <>
                {categories.find(c => c.id === selectedCategory)?.name || 'Products'}
              </>
            ) : (
              'All Products'
            )}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
            
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 outline-none focus:border-green-500 cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} layout="vertical" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search size={60} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#65d446] text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
