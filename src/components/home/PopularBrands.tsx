import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brands';
import BrandCard from '../common/BrandCard';

const PopularBrands: React.FC = () => {
  // Get first 4 brands for popular section
  const popularBrands = brands.slice(0, 4);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Popular Brands</h2>
            <p className="text-gray-600 mt-2">Trusted manufacturers in construction</p>
          </div>
          <Link 
            to="/brands" 
            className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
          >
            View All 
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;