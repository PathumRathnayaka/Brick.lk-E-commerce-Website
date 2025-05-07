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