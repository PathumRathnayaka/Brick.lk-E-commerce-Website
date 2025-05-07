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