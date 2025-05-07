import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/common/ServiceCard';

const ServicesPage: React.FC = () => {
  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    acc[service.category] = acc[service.category] || [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Construction Services</h1>
          <p className="text-gray-600 mt-2">
            Find professional construction services for your projects
          </p>
        </div>
        
        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;