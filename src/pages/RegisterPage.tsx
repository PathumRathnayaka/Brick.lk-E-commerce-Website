import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationType, setRegistrationType] = useState<'customer' | 'supplier' | 'service'>('customer');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'supplier') {
      setRegistrationType('supplier');
    } else if (type === 'service') {
      setRegistrationType('service');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(name, email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <Link to="/" className="inline-flex items-center">
                <div className="text-orange-600 font-bold text-2xl mr-1">Brick</div>
                <div className="text-slate-800 font-bold text-2xl">.lk</div>
              </Link>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                {registrationType === 'customer' 
                  ? 'Create an Account' 
                  : registrationType === 'supplier' 
                    ? 'Register as a Supplier' 
                    : 'Register as a Service Provider'}
              </h1>
              <p className="text-gray-600 mt-1">
                {registrationType === 'customer' 
                  ? 'Join Brick.lk to start shopping for construction materials' 
                  : 'Join our marketplace and reach thousands of customers'}
              </p>
            </div>
            
            {/* Registration Type Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setRegistrationType('customer')}
                className={`flex-1 py-3 text-center font-medium ${
                  registrationType === 'customer' 
                    ? 'text-orange-600 border-b-2 border-orange-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => setRegistrationType('supplier')}
                className={`flex-1 py-3 text-center font-medium ${
                  registrationType === 'supplier' 
                    ? 'text-orange-600 border-b-2 border-orange-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Supplier
              </button>
              <button
                onClick={() => setRegistrationType('service')}
                className={`flex-1 py-3 text-center font-medium ${
                  registrationType === 'service' 
                    ? 'text-orange-600 border-b-2 border-orange-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Service Provider
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {errorMessage}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  {registrationType === 'customer' ? 'Full Name' : 'Company Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={registrationType === 'customer' ? 'John Doe' : 'Company Name'}
                  required
                />
              </div>
              
              {(registrationType === 'supplier' || registrationType === 'service') && (
                <div className="mb-4">
                  <label htmlFor="businessType" className="block text-gray-700 font-medium mb-2">
                    {registrationType === 'supplier' ? 'Business Type' : 'Service Type'}
                  </label>
                  <select 
                    id="businessType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    {registrationType === 'supplier' ? (
                      <>
                        <option value="">Select Business Type</option>
                        <option value="distributor">Distributor</option>
                        <option value="retailer">Retailer</option>
                        <option value="manufacturer">Manufacturer</option>
                      </>
                    ) : (
                      <>
                        <option value="">Select Service Type</option>
                        <option value="construction">General Construction</option>
                        <option value="specialized">Specialized Construction</option>
                        <option value="architectural">Architectural Services</option>
                        <option value="engineering">Engineering Services</option>
                      </>
                    )}
                  </select>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Create a password"
                  required
                  minLength={6}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium disabled:bg-orange-400"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-orange-600 hover:text-orange-700 font-medium">
                  Login
                </Link>
              </p>
            </div>
            
            <div className="mt-8 text-xs text-center text-gray-500">
              <p>
                By creating an account, you agree to our <br />
                <Link to="/terms" className="text-orange-600 hover:text-orange-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-orange-600 hover:text-orange-700">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;