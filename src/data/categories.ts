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