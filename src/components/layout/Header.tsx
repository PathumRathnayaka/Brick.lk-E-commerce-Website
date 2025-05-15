import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ShoppingCart, Search, User, X, ChevronDown } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-orange-600 font-bold text-2xl mr-1">Brick</div>
            <div className="text-slate-800 font-bold text-2xl">.lk</div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center text-slate-800 hover:text-orange-600 font-medium"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                Categories <ChevronDown size={16} className="ml-1" />
              </button>
              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-56 z-20">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                      onClick={() => setCategoryDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/brands" className="text-slate-800 hover:text-orange-600 font-medium">
              Brands
            </Link>
            <Link to="/services" className="text-slate-800 hover:text-orange-600 font-medium">
              Services
            </Link>
            <Link to="/suppliers" className="text-slate-800 hover:text-orange-600 font-medium">
              Suppliers
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center text-slate-800 hover:text-orange-600 font-medium">
                  <User size={20} className="mr-1" /> {user?.name ? user.name.split(' ')[0] : 'User'}
                </button>
                <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
                  <Link to="/account" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600">
                    My Account
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600">
                    My Orders
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-slate-800 hover:text-orange-600 font-medium">
                Login
              </Link>
            )}
            <Link to="/cart" className="relative text-slate-800 hover:text-orange-600">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative text-slate-800">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={toggleMobileMenu} className="text-slate-800">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          {/* Search Bar - Mobile */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Navigation - Mobile */}
          <nav className="flex flex-col space-y-4">
            <Link
              to="/products"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              to="/brands"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              to="/services"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/suppliers"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Suppliers
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </Link>
                <Link
                  to="/orders"
                  className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-slate-800 hover:text-orange-600 font-medium py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-slate-800 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Register
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;