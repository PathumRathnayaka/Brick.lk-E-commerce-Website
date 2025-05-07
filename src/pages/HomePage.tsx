import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedServices from '../components/home/FeaturedServices';
import PopularBrands from '../components/home/PopularBrands';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <div className="bg-orange-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Are you a supplier or service provider?</h2>
              <p className="text-white/90 mb-6">
                Join Sri Lanka's largest construction marketplace and connect with thousands of potential customers looking for your products and services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/register?type=supplier" className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors text-center">
                Register as Supplier
              </a>
              <a href="/register?type=service" className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/20 text-center">
                Register as Service Provider
              </a>
            </div>
          </div>
        </div>
      </div>
      <FeaturedServices />
      <PopularBrands />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Why Choose Brick.lk?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Island-wide Coverage</h3>
                    <p className="text-gray-600">Access construction materials and services from across Sri Lanka.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Verified Suppliers</h3>
                    <p className="text-gray-600">All suppliers and service providers are verified for quality and reliability.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">Compare prices and get the best deals on construction materials.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Convenient Shopping</h3>
                    <p className="text-gray-600">Shop for all your construction needs from the comfort of your home or office.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Construction site" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;