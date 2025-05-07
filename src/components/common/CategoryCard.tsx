import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Category, SubCategory } from '../../types';

interface CategoryCardProps {
  category: Category;
  showSubcategories?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, showSubcategories = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/products?category=${category.id}`} className="block">
        <div className="relative h-40 overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h3 className="text-white text-xl font-semibold p-4">{category.name}</h3>
          </div>
        </div>
      </Link>
      
      {showSubcategories && category.subcategories.length > 0 && (
        <div className="p-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Popular in {category.name}</h4>
          <ul className="space-y-2">
            {category.subcategories.slice(0, 3).map((subcategory) => (
              <li key={subcategory.id}>
                <Link 
                  to={`/products?category=${category.id}&subcategory=${subcategory.id}`}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <ChevronRight size={16} className="mr-1" />
                  <span>{subcategory.name}</span>
                </Link>
              </li>
            ))}
            {category.subcategories.length > 3 && (
              <li>
                <Link 
                  to={`/products?category=${category.id}`}
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors font-medium"
                >
                  <span>View all</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;