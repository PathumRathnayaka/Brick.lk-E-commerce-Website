import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SupplierPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Suppliers</h1>
          <p className="text-gray-600 mt-2">
            Find and connect with construction material suppliers across Sri Lanka
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Become a Supplier</h2>
              <p className="text-gray-600 mb-6">
                Join Sri Lanka's largest construction marketplace and connect with thousands of potential customers looking for your products and services.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 rounded-full p-2 mr-4">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Register Your Business</h3>
                    <p className="text-gray-600">Create a supplier account with your business details</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 rounded-full p-2 mr-4">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">List Your Products</h3>
                    <p className="text-gray-600">Add your construction materials with details and pricing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 rounded-full p-2 mr-4">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Start Selling</h3>
                    <p className="text-gray-600">Receive orders and grow your business island-wide</p>
                  </div>
                </div>
              </div>
              <Link
                to="/register?type=supplier"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md inline-flex items-center font-medium"
              >
                Register as a Supplier
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Construction supplier" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">For Distributors</h2>
              <p className="text-gray-600 mb-6">
                As a distributor on Brick.lk, you can expand your reach across Sri Lanka and connect with retailers and end customers directly.
              </p>
              <Link
                to="/register?type=supplier"
                className="text-orange-600 hover:text-orange-700 inline-flex items-center font-medium"
              >
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">For Retailers</h2>
              <p className="text-gray-600 mb-6">
                Retail sellers can list their products, manage inventory, and reach more customers throughout Sri Lanka through our platform.
              </p>
              <Link
                to="/register?type=supplier"
                className="text-orange-600 hover:text-orange-700 inline-flex items-center font-medium"
              >
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-600 rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful suppliers on Brick.lk and reach customers across Sri Lanka.
            </p>
            <Link
              to="/register?type=supplier"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-md inline-block font-medium"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierPage;