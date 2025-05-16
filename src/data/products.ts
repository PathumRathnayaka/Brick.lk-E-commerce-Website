import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Buildbond Cladding Aluminium Interior',
    description: 'Bilbond Interior Aluminium Cladding sheets 3mm sold in Sri Lanka by Lucky Hardware are sized at 8ft x 4ft, bringing sophistication to your space. Ideal for interior applications, it provides a durable and visually appealing solution for wall coverings, partitions, and modern design elements. These cladding sheets give aesthetics and offer both style and durability.',
    price: 13950.00,
    imageUrl: 'https://stockpile.lk/media/catalog/product/cache/944ee164ff2029290f3199a8c80e74d1/c/l/cladbond.jpg',
    category: 'Building Materials',
    subcategory: 'Aluminium',
    brand: 'Lucky Hardware',
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
    name: 'Cladbond Cladding Aluminium Exterior',
    description: 'Cladbond Exterior Aluminium Cladding sold in Sri Lanka by Lucky Hardware offers durable and stylish cladding solutions for exterior applications. Available in 3mm or 4mm thickness and measuring 12 1/2ft x 4ft, these aluminium panels are designed to withstand outdoor elements while enhancing the aesthetic appeal of buildings. Ideal for facades, exterior walls, and architectural accents.',
    price: 29500.00,
    imageUrl: 'https://stockpile.lk/media/catalog/product/cache/8bf797a8108f6b604c4115a0611aa533/c/l/cladbond.jpg',
    category: 'Building Materials',
    subcategory: 'Aluminium',
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
    name: 'LHbond Cladding Aluminium Interior',
    description: 'LHbond Interior Aluminium Cladding sold in Sri Lanka by Lucky Hardware offers durable and versatile cladding solutions for interiors. With a thickness of 3mm and measuring 8ft x 4ft, these panels enhance interior aesthetics while providing protection.',
    price: 4500,
    imageUrl: 'https://stockpile.lk/media/catalog/product/cache/8bf797a8108f6b604c4115a0611aa533/c/l/cladbond.jpg',
    category: 'Building Materials',
    subcategory: 'Aluminium',
    brand: 'Local',
    rating: 4.6,
    stock: 50,
    reviews: [],
  },
  {
    id: '4',
    name: 'Clay Bricks',
    description: 'Clay Bricks in Sri Lanka are sold through Stockpile by multiple suppliers at competitive prices. Clay bricks are manufactured from fired clay, commonly used for building strong and long-lasting walls, pavements, and other structures. Their strength, durability, and fire resistance make them suitable for diverse construction projects.',
    price: 45,
    imageUrl: 'https://www.cord360.com/Data/webusers/86966672-b42d-4535-b292-cc620da93ef7.jpg',
    category: 'Building Materials',
    subcategory: 'Blocks',
    brand: 'Local',
    rating: 4.8,
    stock: 1000,
    reviews: [],
  },
  {
    id: '5',
    name: 'Cobble Block 4" x 8"',
    description: 'J Blocks & Pavers cobble blocks are easy to replace and perfect for your favorite outdoor space. For driveways walkways and patios. A lightweight easy to handle option. Thin yet strong and durable.',
    price: 65,
    imageUrl: 'https://stockpile.lk/media/catalog/product/cache/8bf797a8108f6b604c4115a0611aa533/c/o/cobble_5.jpg',
    category: 'Building Materials',
    subcategory: 'Blocks',
    brand: 'J Blocks & Pavers',
    rating: 4.6,
    stock: 750,
    reviews: [],
  },
];


export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (category: string, currentId: string): Product[] => {
  return products.filter(product => product.category === category && product.id !== currentId).slice(0, 4);
};