import React from 'react';
import { categories } from '../../data/categories';
import CategoryCard from '../common/CategoryCard';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Browse Categories</h2>
          <p className="text-gray-600 mt-2">Find all your construction needs by category</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              showSubcategories={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;