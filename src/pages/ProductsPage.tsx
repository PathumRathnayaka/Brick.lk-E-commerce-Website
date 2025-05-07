import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    searchParams.get('subcategory')
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Get search query if any
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    // Apply filters
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      const category = categories.find((c) => c.id === selectedCategory);
      if (category) {
        filtered = filtered.filter((product) => product.category === category.name);
      }
    }

    // Apply subcategory filter
    if (selectedSubcategory) {
      const subcategory = selectedCategory 
        ? categories.find((c) => c.id === selectedCategory)?.subcategories.find((s) => s.id === selectedSubcategory)
        : null;
      
      if (subcategory) {
        filtered = filtered.filter((product) => product.subcategory === subcategory.name);
      }
    }

    // Apply brand filter
    if (selectedBrand) {
      const brand = brands.find((b) => b.id === selectedBrand);
      if (brand) {
        filtered = filtered.filter((product) => product.brand === brand.name);
      }
    }

    // Apply price filter
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      // For 'featured', keep original order
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedBrand, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedBrand(null);
    setPriceRange([0, 50000]);
    setSortBy('featured');
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (selectedSubcategory) count++;
    if (selectedBrand) count++;
    if (priceRange[0] > 0 || priceRange[1] < 50000) count++;
    return count;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : selectedCategory 
                ? `${categories.find(c => c.id === selectedCategory)?.name || 'Products'}`
                : 'All Products'
            }
          </h1>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="lg:flex gap-6">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full bg-white p-3 rounded-md shadow-sm border border-gray-200"
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2" />
                <span>Filters</span>
                {getActiveFiltersCount() > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full text-xs">
                    {getActiveFiltersCount()}
                  </span>
                )}
              </div>
              <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 sticky top-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                {getActiveFiltersCount() > 0 && (
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-orange-600 hover:text-orange-700"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Categories Filter */}
              <div className="mb-5 border-b border-gray-200 pb-5">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.id}`}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubcategory(null);
                        }}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category.id}`} className="text-sm text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subcategories Filter (only show if category is selected) */}
              {selectedCategory && (
                <div className="mb-5 border-b border-gray-200 pb-5">
                  <h3 className="font-medium mb-3">Subcategories</h3>
                  <div className="space-y-2">
                    {categories
                      .find((c) => c.id === selectedCategory)
                      ?.subcategories.map((subcategory) => (
                        <div key={subcategory.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`subcategory-${subcategory.id}`}
                            name="subcategory"
                            checked={selectedSubcategory === subcategory.id}
                            onChange={() => setSelectedSubcategory(subcategory.id)}
                            className="mr-2"
                          />
                          <label htmlFor={`subcategory-${subcategory.id}`} className="text-sm text-gray-700">
                            {subcategory.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Brands Filter */}
              <div className="mb-5 border-b border-gray-200 pb-5">
                <h3 className="font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`brand-${brand.id}`}
                        name="brand"
                        checked={selectedBrand === brand.id}
                        onChange={() => setSelectedBrand(brand.id)}
                        className="mr-2"
                      />
                      <label htmlFor={`brand-${brand.id}`} className="text-sm text-gray-700">
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-5">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Rs. {priceRange[0]}</span>
                  <span className="text-sm text-gray-600">Rs. {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sorting Options */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap items-center space-x-2 mb-2 sm:mb-0">
                <span className="text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>

              {/* Active Filters */}
              {getActiveFiltersCount() > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <button 
                        onClick={() => {
                          setSelectedCategory(null);
                          setSelectedSubcategory(null);
                        }}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {selectedSubcategory && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      {categories
                        .find(c => c.id === selectedCategory)
                        ?.subcategories.find(s => s.id === selectedSubcategory)?.name}
                      <button 
                        onClick={() => setSelectedSubcategory(null)}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {selectedBrand && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      {brands.find(b => b.id === selectedBrand)?.name}
                      <button 
                        onClick={() => setSelectedBrand(null)}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 50000) && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      Rs. {priceRange[0]} - Rs. {priceRange[1]}
                      <button 
                        onClick={() => setPriceRange([0, 50000])}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any products matching your criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;