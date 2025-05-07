import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { Brand } from '../../types';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <Link to={`/brands/${brand.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-40 overflow-hidden">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">{brand.name}</h3>
          <div className="flex items-center text-gray-600">
            <Package size={16} className="mr-1" />
            <span className="text-sm">{brand.productsCount} Products</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;