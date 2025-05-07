import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import ServiceCard from '../common/ServiceCard';

const FeaturedServices: React.FC = () => {
  // Get first 4 services for featured section
  const featuredServices = services.slice(0, 4);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Construction Services</h2>
            <p className="text-gray-600 mt-2">Professional services for your construction projects</p>
          </div>
          <Link 
            to="/services" 
            className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
          >
            View All 
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;