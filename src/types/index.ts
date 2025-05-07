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