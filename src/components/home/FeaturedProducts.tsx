import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../common/ProductCard';

const FeaturedProducts: React.FC = () => {
  // Get first 8 products for featured section
  const featuredProducts = products.slice(0, 8);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Featured Products</h2>
            <p className="text-gray-600 mt-2">Top quality construction materials</p>
          </div>
          <Link 
            to="/products" 
            className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
          >
            View All 
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;