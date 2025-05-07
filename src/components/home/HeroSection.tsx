import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Construction materials" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-orange-500">Sri Lanka's</span> Premier Construction Marketplace
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Find all your construction materials, services, and suppliers in one place. Built for builders, contractors, and homeowners.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Browse Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/services" 
              className="bg-white hover:bg-gray-100 text-slate-900 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Find Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;