import { createContext, useContext, useState, useMemo } from 'react';
import productsData from '../data/products.json';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const { categories, products } = productsData;

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory) {
      result = result.filter(product => product.subcategory === selectedSubcategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.model?.toLowerCase().includes(query) ||
        product.seller?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query) ||
        product.subcategory?.toLowerCase().includes(query)
      );
    }

    return result;
  }, [products, searchQuery, selectedCategory, selectedSubcategory]);

  // Get products by category
  const getProductsByCategory = (categoryId) => {
    if (categoryId === 'all') return products;
    return products.filter(product => product.category === categoryId);
  };

  // Get products by subcategory
  const getProductsBySubcategory = (categoryId, subcategory) => {
    if (subcategory === 'All') return getProductsByCategory(categoryId);
    return products.filter(
      product => product.category === categoryId && product.subcategory === subcategory
    );
  };

  // Get category by ID
  const getCategoryById = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  // Get subcategories for a category
  const getSubcategories = (categoryId) => {
    const category = getCategoryById(categoryId);
    return category?.subcategories || [];
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSubcategory(null);
  };

  const value = {
    // Data
    products,
    categories,
    filteredProducts,
    
    // Search state
    searchQuery,
    setSearchQuery,
    
    // Category state
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    
    // Helper functions
    getProductsByCategory,
    getProductsBySubcategory,
    getCategoryById,
    getSubcategories,
    clearFilters
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export default SearchContext;
