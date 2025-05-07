import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link to={`/services/${service.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h3 className="text-white text-xl font-semibold p-4">{service.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{service.category}</span>
            <div className="flex items-center text-blue-600">
              <Users size={16} className="mr-1" />
              <span className="text-sm">{service.providerCount} Providers</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;