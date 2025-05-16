This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.gitignore
.repomixignore
eslint.config.js
index.html
LICENSE
package.json
postcss.config.js
public/favicon.svg
README.md
repomix.config.json
src/App.tsx
src/components/common/BrandCard.tsx
src/components/common/CategoryCard.tsx
src/components/common/ProductCard.tsx
src/components/common/ServiceCard.tsx
src/components/common/Toaster.tsx
src/components/home/FeaturedCategories.tsx
src/components/home/FeaturedProducts.tsx
src/components/home/FeaturedServices.tsx
src/components/home/HeroSection.tsx
src/components/home/PopularBrands.tsx
src/components/layout/Footer.tsx
src/components/layout/Header.tsx
src/contexts/AuthContext.tsx
src/contexts/CartContext.tsx
src/data/brands.ts
src/data/categories.ts
src/data/products.ts
src/data/services.ts
src/index.css
src/main.tsx
src/pages/BrandsPage.tsx
src/pages/CartPage.tsx
src/pages/HomePage.tsx
src/pages/LoginPage.tsx
src/pages/ProductDetailPage.tsx
src/pages/ProductsPage.tsx
src/pages/RegisterPage.tsx
src/pages/ServicesPage.tsx
src/pages/SupplierPage.tsx
src/store/index.ts
src/store/slices/categoriesSlice.ts
src/types/index.ts
src/vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
vite.config.ts.timestamp-1746619902952-70bb0f07d85a3.mjs
```

# Files

## File: .repomixignore
```
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
```

## File: repomix.config.json
```json
{
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
```

## File: eslint.config.js
```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

## File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Brick.lk - Sri Lanka's Construction Marketplace</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: LICENSE
```
MIT License

Copyright (c) 2025 Pathum Rathnayaka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## File: postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## File: public/favicon.svg
```
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="8" fill="#EA580C"/>
  <path d="M13 14H23C24.1046 14 25 14.8954 25 16V23H13V14Z" fill="white"/>
  <path d="M13 25H25V32C25 33.1046 24.1046 34 23 34H13V25Z" fill="white"/>
  <path d="M27 14H37V23H27V14Z" fill="white"/>
  <path d="M27 25H37V34H27V25Z" fill="white"/>
</svg>
```

## File: README.md
```markdown
I've implemented a complete e-commerce solution for Brick.lk, modeled after Amazon but tailored specifically for Sri Lanka's construction market. The application features a responsive design with dedicated sections for browsing construction products, services, and suppliers.
```

## File: src/App.tsx
```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import BrandsPage from './pages/BrandsPage';
import ServicesPage from './pages/ServicesPage';
import SupplierPage from './pages/SupplierPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/common/Toaster';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/suppliers" element={<SupplierPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
```

## File: src/components/common/BrandCard.tsx
```typescript
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
```

## File: src/components/common/CategoryCard.tsx
```typescript
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
```

## File: src/components/common/ProductCard.tsx
```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useToaster } from './Toaster';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToaster ? useToaster() : { showToast: () => {} };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: Math.random().toString(36).substring(2, 9),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
    
    showToast && showToast(`${product.name} added to cart`, 'success');
  };

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <button 
              onClick={handleAddToCart}
              className="text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-1">
            <div className="flex items-center text-amber-500 mr-1">
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-sm text-gray-700">{product.rating.toFixed(1)}</span>
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-gray-900">Rs. {product.price.toLocaleString()}</p>
            <span className={`text-xs px-2 py-1 rounded ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
```

## File: src/components/common/ServiceCard.tsx
```typescript
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
```

## File: src/components/common/Toaster.tsx
```typescript
import React, { useState, useEffect, createContext, useContext } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToasterContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};

export const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <Toaster toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(toast => toast.id !== id))} />
    </ToasterContext.Provider>
  );
};

interface ToasterProps {
  toasts?: Toast[];
  removeToast?: (id: string) => void;
}

export const Toaster: React.FC<ToasterProps> = ({ toasts = [], removeToast }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center p-4 rounded-md shadow-lg max-w-xs animate-fade-in-up ${
            toast.type === 'success' ? 'bg-green-500' :
            toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          } text-white`}
        >
          {toast.type === 'success' && <CheckCircle className="mr-2" size={18} />}
          {toast.type === 'error' && <AlertCircle className="mr-2" size={18} />}
          {toast.type === 'info' && <Info className="mr-2" size={18} />}
          <p className="flex-1">{toast.message}</p>
          {removeToast && (
            <button onClick={() => removeToast(toast.id)} className="ml-2 text-white hover:text-gray-200">
              <X size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
```

## File: src/components/home/FeaturedCategories.tsx
```typescript
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
```

## File: src/components/home/FeaturedProducts.tsx
```typescript
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../common/ProductCard';

const FeaturedProducts: React.FC = () => {
  // Get first 8 products for featured section
  const featuredProducts = products.slice(0, 8);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Featured Products</h2>
            <p className="text-gray-600 mt-2">Top quality construction materials</p>
          </div>
          <Link 
            to="/products" 
            className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
          >
            View All 
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
```

## File: src/components/home/FeaturedServices.tsx
```typescript
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
```

## File: src/components/home/HeroSection.tsx
```typescript
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
```

## File: src/components/home/PopularBrands.tsx
```typescript
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brands';
import BrandCard from '../common/BrandCard';

const PopularBrands: React.FC = () => {
  // Get first 4 brands for popular section
  const popularBrands = brands.slice(0, 4);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Popular Brands</h2>
            <p className="text-gray-600 mt-2">Trusted manufacturers in construction</p>
          </div>
          <Link 
            to="/brands" 
            className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
          >
            View All 
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
```

## File: src/components/layout/Footer.tsx
```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="text-orange-500 font-bold text-2xl mr-1">Brick</div>
              <div className="text-white font-bold text-2xl">.lk</div>
            </Link>
            <p className="text-gray-300 mb-4">
              Sri Lanka's premier online marketplace for construction materials, connecting suppliers, service providers, and customers across the island.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/suppliers" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Suppliers
                </Link>
              </li>
              <li>
                <Link to="/register?type=supplier" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Become a Supplier
                </Link>
              </li>
              <li>
                <Link to="/register?type=service" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Register as Service Provider
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Construction Road, Colombo 05, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@brick.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8 pb-4">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our latest products and offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Brick.lk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

## File: src/contexts/AuthContext.tsx
```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Mock login for now. In a real app, this would call an API
      if (email === 'demo@example.com' && password === 'password') {
        const mockUser: User = {
          id: '1',
          name: 'Demo User',
          email: 'demo@example.com',
          role: 'customer',
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Mock registration. In a real app, this would call an API
      const mockUser: User = {
        id: '2',
        name,
        email,
        role: 'customer',
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

## File: src/contexts/CartContext.tsx
```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on initial load
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Update totals when cart changes
    setTotalItems(cartItems.reduce((sum, item) => sum + item.quantity, 0));
    setTotalPrice(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.productId === item.productId);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
```

## File: src/data/brands.ts
```typescript
import { Brand } from '../types';

export const brands: Brand[] = [
  {
    id: 'holcim',
    name: 'Holcim',
    logo: 'https://images.pexels.com/photos/5582897/pexels-photo-5582897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'One of the world\'s leading suppliers of cement and aggregates, Holcim offers high-quality construction materials trusted by builders across Sri Lanka.',
    productsCount: 12,
  },
  {
    id: 'tokyo-cement',
    name: 'Tokyo Cement',
    logo: 'https://images.pexels.com/photos/3584943/pexels-photo-3584943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A leading cement manufacturer in Sri Lanka, Tokyo Cement provides a wide range of cement products for various construction needs.',
    productsCount: 8,
  },
  {
    id: 'melwa',
    name: 'Melwa',
    logo: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Specializing in steel products, Melwa offers high-quality reinforcement bars and other steel materials for construction.',
    productsCount: 15,
  },
  {
    id: 'dulux',
    name: 'Dulux',
    logo: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A global leader in paint and coating solutions, Dulux provides premium quality paints for both interior and exterior applications.',
    productsCount: 30,
  },
  {
    id: 'rocell',
    name: 'Rocell',
    logo: 'https://images.pexels.com/photos/5260554/pexels-photo-5260554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Sri Lanka\'s premier manufacturer of tiles and sanitaryware, offering elegantly designed products for modern homes and buildings.',
    productsCount: 45,
  },
  {
    id: 'philips',
    name: 'Philips',
    logo: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A global leader in lighting solutions, Philips offers energy-efficient LED bulbs and lighting fixtures for residential and commercial use.',
    productsCount: 50,
  },
  {
    id: 'grundfos',
    name: 'Grundfos',
    logo: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A world-renowned manufacturer of water pumps and pumping systems, providing reliable solutions for various applications.',
    productsCount: 25,
  },
  {
    id: 'orange',
    name: 'Orange Electric',
    logo: 'https://images.pexels.com/photos/6444366/pexels-photo-6444366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A leading manufacturer of electrical products in Sri Lanka, offering a wide range of switches, sockets, and other electrical accessories.',
    productsCount: 60,
  },
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};
```

## File: src/data/categories.ts
```typescript
import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'building-materials',
    name: 'Building Materials',
    imageUrl: 'https://images.pexels.com/photos/5582837/pexels-photo-5582837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'cement', name: 'Cement', imageUrl: 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'sand', name: 'Sand', imageUrl: 'https://images.pexels.com/photos/3334360/pexels-photo-3334360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'bricks', name: 'Bricks', imageUrl: 'https://images.pexels.com/photos/2092078/pexels-photo-2092078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'steel', name: 'Steel', imageUrl: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    imageUrl: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'lighting', name: 'Lighting', imageUrl: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'wiring', name: 'Wiring', imageUrl: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'switches', name: 'Switches & Sockets', imageUrl: 'https://images.pexels.com/photos/6444366/pexels-photo-6444366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    imageUrl: 'https://images.pexels.com/photos/1078990/pexels-photo-1078990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'pipes', name: 'Pipes & Fittings', imageUrl: 'https://images.pexels.com/photos/4491014/pexels-photo-4491014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'pumps', name: 'Pumps', imageUrl: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'faucets', name: 'Faucets & Fixtures', imageUrl: 'https://images.pexels.com/photos/369598/pexels-photo-369598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
  {
    id: 'finishing',
    name: 'Finishing Materials',
    imageUrl: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'paint', name: 'Paint', imageUrl: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'tiles', name: 'Tiles', imageUrl: 'https://images.pexels.com/photos/5260554/pexels-photo-5260554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'flooring', name: 'Flooring', imageUrl: 'https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
];

export const getCategory = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
```

## File: src/data/products.ts
```typescript
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cement Bag (50kg)',
    description: 'High-quality cement suitable for all construction purposes. This premium grade cement ensures strength and durability for your building projects.',
    price: 1250,
    imageUrl: 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Building Materials',
    subcategory: 'Cement',
    brand: 'Holcim',
    rating: 4.7,
    stock: 500,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Ajith Fernando',
        rating: 5,
        comment: 'Best quality cement I have used. Excellent setting time and strength.',
        date: '2023-04-15',
      },
    ],
  },
  {
    id: '2',
    name: 'Construction Sand (Cubic Meter)',
    description: 'Fine quality river sand, perfect for concrete mixing and mortar preparation. Cleaned and processed for optimal construction results.',
    price: 9500,
    imageUrl: 'https://images.pexels.com/photos/3334360/pexels-photo-3334360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Building Materials',
    subcategory: 'Sand',
    brand: 'Local',
    rating: 4.5,
    stock: 200,
    reviews: [
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Sunil Perera',
        rating: 4,
        comment: 'Good quality sand, minimal impurities.',
        date: '2023-05-20',
      },
    ],
  },
  {
    id: '3',
    name: 'Construction Bricks (1000pcs)',
    description: 'Durable clay bricks for all types of construction. These standard-sized bricks provide excellent insulation and strength for walls.',
    price: 22000,
    imageUrl: 'https://images.pexels.com/photos/2092078/pexels-photo-2092078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Building Materials',
    subcategory: 'Bricks',
    brand: 'Local',
    rating: 4.6,
    stock: 50,
    reviews: [],
  },
  {
    id: '4',
    name: 'LED Bulb (9W)',
    description: 'Energy-efficient LED bulb that provides bright white light while consuming minimal electricity. Perfect for residential and commercial spaces.',
    price: 450,
    imageUrl: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electrical',
    subcategory: 'Lighting',
    brand: 'Philips',
    rating: 4.8,
    stock: 1000,
    reviews: [],
  },
  {
    id: '5',
    name: 'Steel Reinforcement Bar (12mm)',
    description: 'High-tensile strength steel bars for reinforced concrete structures. These TMT bars ensure structural integrity and longevity.',
    price: 215,
    imageUrl: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Building Materials',
    subcategory: 'Steel',
    brand: 'Melwa',
    rating: 4.9,
    stock: 800,
    reviews: [],
  },
  {
    id: '6',
    name: 'Water Pump (1HP)',
    description: 'Powerful water pump for residential water supply, agricultural irrigation, and small-scale industrial applications.',
    price: 15000,
    imageUrl: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Plumbing',
    subcategory: 'Pumps',
    brand: 'Grundfos',
    rating: 4.7,
    stock: 25,
    reviews: [],
  },
  {
    id: '7',
    name: 'Premium Paint (4L)',
    description: 'Weather-resistant exterior wall paint with excellent coverage and long-lasting finish. Available in various colors.',
    price: 3800,
    imageUrl: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Finishing',
    subcategory: 'Paint',
    brand: 'Dulux',
    rating: 4.6,
    stock: 150,
    reviews: [],
  },
  {
    id: '8',
    name: 'Ceramic Floor Tiles (60x60cm)',
    description: 'Premium quality ceramic floor tiles with elegant designs. These easy-to-clean tiles are perfect for living rooms, kitchens, and bathrooms.',
    price: 185,
    imageUrl: 'https://images.pexels.com/photos/5260554/pexels-photo-5260554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Finishing',
    subcategory: 'Tiles',
    brand: 'Rocell',
    rating: 4.8,
    stock: 1000,
    reviews: [],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (category: string, currentId: string): Product[] => {
  return products.filter(product => product.category === category && product.id !== currentId).slice(0, 4);
};
```

## File: src/data/services.ts
```typescript
import { Service, ServiceProvider } from '../types';

export const services: Service[] = [
  {
    id: 'building-construction',
    name: 'Building Construction',
    category: 'General Construction Services',
    subcategory: 'Building Constructions',
    description: 'Complete building construction services from foundation to finishing for residential, commercial, and industrial buildings.',
    imageUrl: 'https://images.pexels.com/photos/157294/construction-worker-concrete-hummer-vibrator-159294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 52,
  },
  {
    id: 'civil-construction',
    name: 'Civil Construction',
    category: 'General Construction Services',
    subcategory: 'Civil Construction',
    description: 'Specialized civil engineering construction services for highways, water supply, drainage, airports, irrigation, bridges, and buildings.',
    imageUrl: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 34,
  },
  {
    id: 'roads-highways',
    name: 'Roads & Highways',
    category: 'General Construction Services',
    subcategory: 'Roads & Highways',
    description: 'Construction and maintenance of roads, highways, and related infrastructure such as culverts and drainage systems.',
    imageUrl: 'https://images.pexels.com/photos/1797348/pexels-photo-1797348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 28,
  },
  {
    id: 'water-projects',
    name: 'Water & Wastewater Projects',
    category: 'Specialized Construction Services',
    subcategory: 'Water & Wastewater Projects',
    description: 'Design and construction of water supply systems, wastewater treatment plants, and related infrastructure for communities and industries.',
    imageUrl: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 20,
  },
  {
    id: 'swimming-pools',
    name: 'Swimming Pool Construction',
    category: 'Specialized Construction Services',
    subcategory: 'Swimming Pool Constructions',
    description: 'Design and construction of swimming pools for residential, commercial, and recreational facilities with various finishing options.',
    imageUrl: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 15,
  },
  {
    id: 'architectural-services',
    name: 'Architectural Services',
    category: 'Architectural and Engineering Services',
    subcategory: 'Architectural Services',
    description: 'Comprehensive architectural design services for residential, commercial, and institutional buildings with attention to aesthetics and functionality.',
    imageUrl: 'https://images.pexels.com/photos/6444354/pexels-photo-6444354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 48,
  },
  {
    id: 'mep-services',
    name: 'MEP Services',
    category: 'Specialized Construction Services',
    subcategory: 'MEP Services',
    description: 'Mechanical, electrical, and plumbing services for buildings and infrastructure projects, ensuring efficient and compliant systems.',
    imageUrl: 'https://images.pexels.com/photos/1078990/pexels-photo-1078990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 32,
  },
  {
    id: 'quantity-surveying',
    name: 'Quantity Surveying',
    category: 'Architectural and Engineering Services',
    subcategory: 'Quantity Surveying Services',
    description: 'Professional quantity surveying services including cost estimation, bill of quantities preparation, and contract administration.',
    imageUrl: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    providerCount: 25,
  },
];

export const serviceProviders: ServiceProvider[] = [
  {
    id: 'sp1',
    name: 'SriLanka Construction Co',
    logo: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    services: ['building-construction', 'civil-construction'],
    rating: 4.7,
    location: 'Colombo',
    contact: '+94 11 2345678',
  },
  {
    id: 'sp2',
    name: 'Highway Masters',
    logo: 'https://images.pexels.com/photos/1797348/pexels-photo-1797348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    services: ['roads-highways', 'civil-construction'],
    rating: 4.5,
    location: 'Kandy',
    contact: '+94 81 2234567',
  },
  {
    id: 'sp3',
    name: 'AquaTech Engineers',
    logo: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    services: ['water-projects', 'swimming-pools'],
    rating: 4.8,
    location: 'Galle',
    contact: '+94 91 2345678',
  },
  {
    id: 'sp4',
    name: 'Modern Architects',
    logo: 'https://images.pexels.com/photos/6444354/pexels-photo-6444354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    services: ['architectural-services', 'quantity-surveying'],
    rating: 4.9,
    location: 'Colombo',
    contact: '+94 11 2345679',
  },
  {
    id: 'sp5',
    name: 'MEP Solutions',
    logo: 'https://images.pexels.com/photos/1078990/pexels-photo-1078990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    services: ['mep-services'],
    rating: 4.6,
    location: 'Negombo',
    contact: '+94 31 2234567',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServiceProviderById = (id: string): ServiceProvider | undefined => {
  return serviceProviders.find(provider => provider.id === id);
};

export const getServiceProvidersByService = (serviceId: string): ServiceProvider[] => {
  return serviceProviders.filter(provider => provider.services.includes(serviceId));
};
```

## File: src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## File: src/pages/BrandsPage.tsx
```typescript
import React from 'react';
import { brands } from '../data/brands';
import BrandCard from '../components/common/BrandCard';

const BrandsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Popular Brands</h1>
          <p className="text-gray-600 mt-2">
            Explore top construction material brands available in Sri Lanka
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
```

## File: src/pages/CartPage.tsx
```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              to="/products" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md inline-flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Shopping Cart</h1>
        
        <div className="lg:flex lg:space-x-6">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">{cartItems.length} Items in Cart</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start">
                    <div className="flex-shrink-0 w-full sm:w-20 h-20 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                        <h3 className="text-lg font-medium text-gray-800 mb-1 sm:mb-0">{item.name}</h3>
                        <span className="font-semibold text-gray-800">Rs. {item.price.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-4">
                            Subtotal: <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-between mb-8">
              <Link 
                to="/products" 
                className="text-orange-600 hover:text-orange-700 inline-flex items-center"
              >
                <ArrowLeft size={16} className="mr-1" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs. {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>Rs. {totalPrice.toLocaleString()}</span>
                </div>
              </div>
              
              <button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-medium mb-4"
              >
                Proceed to Checkout
              </button>
              
              <div className="text-center text-gray-500 text-sm">
                <p>Secure checkout process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
```

## File: src/pages/HomePage.tsx
```typescript
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
                  src="https://www.latrobe.edu.au/courses/images/LTU_ME_35761_1400_4.jpg" 
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
```

## File: src/pages/LoginPage.tsx
```typescript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
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
              <h1 className="text-2xl font-bold text-gray-800 mt-4">Login to Your Account</h1>
              <p className="text-gray-600 mt-1">
                Enter your credentials to access your account
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {errorMessage}
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
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-gray-700 font-medium">
                    Password
                  </label>
                  <a href="#" className="text-sm text-orange-600 hover:text-orange-700">
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium disabled:bg-orange-400"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-orange-600 hover:text-orange-700 font-medium">
                  Register
                </Link>
              </p>
            </div>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Facebook
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-xs text-center text-gray-500">
              <p>
                For demo purposes, use:<br />
                Email: demo@example.com<br />
                Password: password
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
```

## File: src/pages/ProductDetailPage.tsx
```typescript
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Truck, Package, Star, Plus, Minus, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToaster } from '../components/common/Toaster';
import ProductCard from '../components/common/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const relatedProducts = product ? getRelatedProducts(product.category, product.id) : [];
  
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToaster() || { showToast: () => {} };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: Math.random().toString(36).substring(2, 9),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    });
    
    showToast && showToast(`${product.name} added to cart`, 'success');
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-orange-600">Home</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-orange-600">Products</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to={`/products?category=${product.category.toLowerCase()}`} className="text-gray-500 hover:text-orange-600">
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center h-80 md:h-96">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="object-cover max-w-full max-h-full"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6 md:border-l border-gray-200">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-500 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={16} 
                        fill={star <= Math.round(product.rating) ? 'currentColor' : 'none'} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating.toFixed(1)} ({product.reviews.length} reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">Rs. {product.price.toLocaleString()}</div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className={`px-2 py-1 rounded ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                  </span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mr-4">
                    <button 
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                    >
                      <Minus size={16} />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      readOnly
                      className="w-12 text-center border-none focus:outline-none py-2"
                    />
                    <button 
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md flex items-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="mb-3 flex items-start">
                  <Truck size={18} className="text-gray-700 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-800">Delivery:</span>
                    <p className="text-sm text-gray-600">Island-wide delivery available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Package size={18} className="text-gray-700 mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-800">Brand:</span>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs: Details, Specs, Reviews */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button className="text-orange-600 border-b-2 border-orange-600 py-4 px-6 font-medium">
                Details
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium">
                Specifications
              </button>
              <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium">
                Reviews ({product.reviews.length})
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam
              nisl nisl sit amet nisl.
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
```

## File: src/pages/ProductsPage.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    searchParams.get('subcategory')
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Get search query if any
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    // Apply filters
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      const category = categories.find((c) => c.id === selectedCategory);
      if (category) {
        filtered = filtered.filter((product) => product.category === category.name);
      }
    }

    // Apply subcategory filter
    if (selectedSubcategory) {
      const subcategory = selectedCategory 
        ? categories.find((c) => c.id === selectedCategory)?.subcategories.find((s) => s.id === selectedSubcategory)
        : null;
      
      if (subcategory) {
        filtered = filtered.filter((product) => product.subcategory === subcategory.name);
      }
    }

    // Apply brand filter
    if (selectedBrand) {
      const brand = brands.find((b) => b.id === selectedBrand);
      if (brand) {
        filtered = filtered.filter((product) => product.brand === brand.name);
      }
    }

    // Apply price filter
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      // For 'featured', keep original order
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedBrand, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedBrand(null);
    setPriceRange([0, 50000]);
    setSortBy('featured');
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (selectedSubcategory) count++;
    if (selectedBrand) count++;
    if (priceRange[0] > 0 || priceRange[1] < 50000) count++;
    return count;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : selectedCategory 
                ? `${categories.find(c => c.id === selectedCategory)?.name || 'Products'}`
                : 'All Products'
            }
          </h1>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="lg:flex gap-6">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full bg-white p-3 rounded-md shadow-sm border border-gray-200"
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2" />
                <span>Filters</span>
                {getActiveFiltersCount() > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full text-xs">
                    {getActiveFiltersCount()}
                  </span>
                )}
              </div>
              <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 sticky top-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                {getActiveFiltersCount() > 0 && (
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-orange-600 hover:text-orange-700"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Categories Filter */}
              <div className="mb-5 border-b border-gray-200 pb-5">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.id}`}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubcategory(null);
                        }}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category.id}`} className="text-sm text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subcategories Filter (only show if category is selected) */}
              {selectedCategory && (
                <div className="mb-5 border-b border-gray-200 pb-5">
                  <h3 className="font-medium mb-3">Subcategories</h3>
                  <div className="space-y-2">
                    {categories
                      .find((c) => c.id === selectedCategory)
                      ?.subcategories.map((subcategory) => (
                        <div key={subcategory.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`subcategory-${subcategory.id}`}
                            name="subcategory"
                            checked={selectedSubcategory === subcategory.id}
                            onChange={() => setSelectedSubcategory(subcategory.id)}
                            className="mr-2"
                          />
                          <label htmlFor={`subcategory-${subcategory.id}`} className="text-sm text-gray-700">
                            {subcategory.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Brands Filter */}
              <div className="mb-5 border-b border-gray-200 pb-5">
                <h3 className="font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`brand-${brand.id}`}
                        name="brand"
                        checked={selectedBrand === brand.id}
                        onChange={() => setSelectedBrand(brand.id)}
                        className="mr-2"
                      />
                      <label htmlFor={`brand-${brand.id}`} className="text-sm text-gray-700">
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-5">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Rs. {priceRange[0]}</span>
                  <span className="text-sm text-gray-600">Rs. {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sorting Options */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap items-center space-x-2 mb-2 sm:mb-0">
                <span className="text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>

              {/* Active Filters */}
              {getActiveFiltersCount() > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <button 
                        onClick={() => {
                          setSelectedCategory(null);
                          setSelectedSubcategory(null);
                        }}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {selectedSubcategory && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      {categories
                        .find(c => c.id === selectedCategory)
                        ?.subcategories.find(s => s.id === selectedSubcategory)?.name}
                      <button 
                        onClick={() => setSelectedSubcategory(null)}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {selectedBrand && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      {brands.find(b => b.id === selectedBrand)?.name}
                      <button 
                        onClick={() => setSelectedBrand(null)}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 50000) && (
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full flex items-center">
                      Rs. {priceRange[0]} - Rs. {priceRange[1]}
                      <button 
                        onClick={() => setPriceRange([0, 50000])}
                        className="ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any products matching your criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
```

## File: src/pages/RegisterPage.tsx
```typescript
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
```

## File: src/pages/ServicesPage.tsx
```typescript
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
```

## File: src/pages/SupplierPage.tsx
```typescript
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
```

## File: src/store/index.ts
```typescript
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## File: src/store/slices/categoriesSlice.ts
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubCategory {
  [key: string]: string[];
}

interface Category {
  [key: string]: SubCategory[];
}

interface CategoriesState {
  categories: Category;
}

const initialState: CategoriesState = {
  categories: {
    "Building materials": [
      {
        "Aluminium": [
          "Buildbond Cladding Aluminium Interior",
          "Cladbond Cladding Aluminium Exterior",
          "LHbond Cladding Aluminium Interior"
        ]
      },
      {
        "Blocks": [
          "Clay Bricks",
          "Cobble Block",
          "Cover Block With Middle Hole",
          "Glass Blocks",
          "Cement Blocks",
          "Mascons Brick Finish Random Paving Blocks"
        ]
      },
      {
        "Cement & Concrete": [
          "Bag Cement",
          "Grout"
        ]
      },
      {
        "Chemical": [
          "Admixtures",
          "Bitumen",
          "Lubricant"
        ]
      },
      {
        "Insulation": [
          "E-Foam Extruded Polystyrene XPS Thermal Insulation Boards",
          "Glass Wool Rolls",
          "Glass Wool Sheets",
          "Rockwool Insulation Sheets"
        ]
      },
      {
        "Paint": [
          "Exterior Paint",
          "Interior Paint",
          "Road Marking",
          "Wood Paint & Sealers"
        ]
      },
      {
        "Panels & Partitions": [
          "Decorative Panels",
          "Glass & Mirrors",
          "MDF Boards",
          "Plastic Sheets & Panels",
          "Wood Panels"
        ]
      },
      {
        "Sealant & Adhesive": [
          "Epoxy Resin"
        ]
      },
      {
        "Steel Items": [
          "Angle Iron",
          "Channel Iron Bar",
          "GI Box Bar",
          "GI Pipes",
          "H iron beam",
          "Mascons GI Pipes"
        ]
      },
      {
        "Tiles": [
          "Wall Tiles",
          "Floor Tile"
        ]
      },
      {
        "Timber": [
          "Timber Planks",
          "Plywood Boards"
        ]
      },
      {
        "Waterproofing": []
      }
    ],
    "Kitchen & Bathroom": [
      {
        "Sanitary Ware": [
          "Toilets",
          "Wash basins",
          "Bidets",
          "Urinals",
          "Pedestals"
        ]
      },
      {
        "Faucets and Taps": [
          "Kitchen taps",
          "Basin mixer taps",
          "Shower mixers",
          "Wall-mounted taps",
          "Sensor taps (touchless)"
        ]
      },
      {
        "Sinks": [
          "Stainless steel sinks",
          "Granite or quartz sinks",
          "Single or double bowl",
          "Undermount or top-mount sinks"
        ]
      },
      {
        "Bathroom Accessories": [
          "Towel rails and racks",
          "Toilet paper holders",
          "Soap dishes and dispensers",
          "Mirrors and mirror cabinets",
          "Toothbrush holders",
          "Shower caddies and baskets"
        ]
      },
      {
        "Showers and Bathtubs": [
          "Shower panels",
          "Rain showers",
          "Hand showers",
          "Bathtubs",
          "Shower enclosures and glass partitions"
        ]
      },
      {
        "Cabinetry & Vanities": [
          "Kitchen cabinets",
          "Bathroom vanities",
          "Sink counters and tops"
        ]
      },
      {
        "Countertops": [
          "Granite",
          "Quartz",
          "Marble",
          "Concrete",
          "Solid surface"
        ]
      },
      {
        "Ventilation & Exhaust Systems": [
          "Kitchen exhaust fans or hoods",
          "Bathroom exhaust fans",
          "Ducting and vent grilles"
        ]
      },
      {
        "Water Heating Systems": [
          "Instant water heaters (for kitchen and bathroom)",
          "Solar water heaters",
          "Storage geysers"
        ]
      }
    ],
    "Doors & Windows": [
      {
        "Locks & Handles": []
      },
      {
        "Door Window Accessories": []
      },
      {
        "Door Sashes": [
          "Plywood Doors"
        ]
      },
      {
        "Fire Rated": []
      }
    ],
    "Electrical": [
      {
        "Wires & Cables": []
      },
      {
        "Electrical Switches & Sockets": []
      },
      {
        "Distribution Boards & Circuit Protection": []
      },
      {
        "Lighting": [
          "Indoor Lighting",
          "Outdoor & Landscape Lighting",
          "Specialty & Functional Lighting",
          "Smart & Dimmable Lighting"
        ]
      },
      {
        "Electrical Accessories": []
      },
      {
        "Smart and Low Voltage Systems": [
          "Smart light switches and dimmers",
          "Home automation panels",
          "CCTV systems",
          "Fire alarms and smoke detectors",
          "Doorbells and intercoms"
        ]
      },
      {
        "Home Appliances": [
          "Washing Machines",
          "Refrigerator / Freezer",
          "Motors",
          "Fan",
          "Microwave Oven",
          "Dishwasher",
          "Air Conditioner (Split / Window)",
          "Electric Oven / Cooker",
          "Electric Kettle",
          "Toasters, Blenders, Mixers",
          "Televisions",
          "Audio Systems",
          "Satellite & Antenna Systems",
          "Wi-Fi Routers",
          "Smart Home Devices"
        ]
      }
    ],
    "Flooring": [
      {
        "Carpets": []
      },
      {
        "Epoxy Flooring": []
      },
      {
        "Industrial Flooring": []
      },
      {
        "Outdoor Decking": []
      },
      {
        "Rendered Flooring": []
      },
      {
        "Titanium Flooring": []
      },
      {
        "Vinyl Flooring": []
      },
      {
        "Wood Flooring": []
      }
    ],
    "Hardware": [
      {
        "Nails": []
      },
      {
        "Nuts & Bolts": []
      },
      {
        "Plugs & Anchors": []
      },
      {
        "Screws": []
      }
    ],
    "Plumbing": [
      {
        "Conduits & Casings": []
      },
      {
        "Fire Suppression Equipment": []
      },
      {
        "Plumbing Valves & Accessories": []
      },
      {
        "Pipe Fittings": []
      },
      {
        "PPR Pipes & Fittings": []
      },
      {
        "Water Pumps": []
      },
      {
        "PVC & Other Pipes": []
      },
      {
        "Septic & Sewage": [
          "Sewage Treatment Plants"
        ]
      },
      {
        "Water Filtration": []
      },
      {
        "Water Tanks & Storage": []
      }
    ],
    "Roofing & Ceiling": [
      {
        "Roofing Accessories": []
      },
      {
        "Roofing Sheets": []
      },
      {
        "Roof Tiles": []
      },
      {
        "Ceiling Tiles": []
      }
    ],
    "Tools & Equipment": [
      {
        "Automotive": []
      },
      {
        "Hand Tools": []
      },
      {
        "Masonry Tools": []
      },
      {
        "Measuring Equipment": []
      },
      {
        "Power Tools": []
      },
      {
        "Safety Equipment": [
          "Fire Extinguishers",
          "Gloves",
          "Raincoats",
          "Safety Helmets",
          "Safety Shoes & Boots"
        ]
      },
      {
        "Scaffolding": [
          "Acro Jacks"
        ]
      },
      {
        "Welding Equipment": []
      },
      {
        "Lifting Equipment": []
      },
      {
        "Landscape & External Works": [
          "Car Park Accessories",
          "Fences",
          "Gabions",
          "Manholes"
        ]
      }
    ],
    "Furniture": [
      {
        "Living Room": []
      },
      {
        "Bedroom": []
      },
      {
        "Dining Room": []
      },
      {
        "Home Office": []
      },
      {
        "Office Furniture": []
      },
      {
        "Storage Furniture": []
      }
    ]
  }
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
```

## File: src/types/index.ts
```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  subcategory: string;
  brand: string;
  rating: number;
  stock: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  productsCount: number;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  imageUrl: string;
  providerCount: number;
}

export interface ServiceProvider {
  id: string;
  name: string;
  logo: string;
  services: string[];
  rating: number;
  location: string;
  contact: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'supplier' | 'service-provider' | 'admin';
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  imageUrl: string;
}
```

## File: src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## File: tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## File: tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## File: vite.config.ts.timestamp-1746619902952-70bb0f07d85a3.mjs
```
// vite.config.ts
import { defineConfig } from "file:///D:/Acedemic/Personal%20Projects/Brick.lk%20E-commerce%20Website/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Acedemic/Personal%20Projects/Brick.lk%20E-commerce%20Website/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBY2VkZW1pY1xcXFxQZXJzb25hbCBQcm9qZWN0c1xcXFxCcmljay5sayBFLWNvbW1lcmNlIFdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFjZWRlbWljXFxcXFBlcnNvbmFsIFByb2plY3RzXFxcXEJyaWNrLmxrIEUtY29tbWVyY2UgV2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQWNlZGVtaWMvUGVyc29uYWwlMjBQcm9qZWN0cy9Ccmljay5sayUyMEUtY29tbWVyY2UlMjBXZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJXLFNBQVMsb0JBQW9CO0FBQ3hZLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
```

## File: src/components/layout/Header.tsx
```typescript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ShoppingCart, Search, User, X, ChevronDown } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-orange-600 font-bold text-2xl mr-1">Brick</div>
            <div className="text-slate-800 font-bold text-2xl">.lk</div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center text-slate-800 hover:text-orange-600 font-medium"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                Categories <ChevronDown size={16} className="ml-1" />
              </button>
              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-56 z-20">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                      onClick={() => setCategoryDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/brands" className="text-slate-800 hover:text-orange-600 font-medium">
              Brands
            </Link>
            <Link to="/services" className="text-slate-800 hover:text-orange-600 font-medium">
              Services
            </Link>
            <Link to="/suppliers" className="text-slate-800 hover:text-orange-600 font-medium">
              Suppliers
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center text-slate-800 hover:text-orange-600 font-medium">
                  <User size={20} className="mr-1" /> {user?.name ? user.name.split(' ')[0] : 'User'}
                </button>
                <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
                  <Link to="/account" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600">
                    My Account
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600">
                    My Orders
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-slate-800 hover:text-orange-600 font-medium">
                Login
              </Link>
            )}
            <Link to="/cart" className="relative text-slate-800 hover:text-orange-600">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative text-slate-800">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={toggleMobileMenu} className="text-slate-800">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          {/* Search Bar - Mobile */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Navigation - Mobile */}
          <nav className="flex flex-col space-y-4">
            <Link
              to="/products"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              to="/brands"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              to="/services"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/suppliers"
              className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Suppliers
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </Link>
                <Link
                  to="/orders"
                  className="text-slate-800 hover:text-orange-600 font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-slate-800 hover:text-orange-600 font-medium py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-slate-800 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Register
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
```

## File: src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.tsx';
import './index.css';
import { ToasterProvider } from './components/common/Toaster';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToasterProvider>
        <App />
      </ToasterProvider>
    </Provider>
  </StrictMode>
);
```

## File: vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});
```

## File: package.json
```json
{
  "type": "module",
  "dependencies": {
    "@reduxjs/toolkit": "^2.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.0.4",
    "react-router-dom": "^6.21.1",
    "lucide-react": "^0.303.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8"
  },
  "scripts": {
    "dev": "vite"
  }
}
```
