import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'building-materials',
    name: 'Building Materials',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgu4EUL9rGBkzTEmk-h2y3-dY_8Vr4E5ihhg&s',
    subcategories: [
      { id: 'aluminium', name: 'Aluminium', imageUrl: 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'blocks', name: 'Blocks', imageUrl: 'https://images.pexels.com/photos/3334360/pexels-photo-3334360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'cement&Concrete', name: 'Cement & Concrete', imageUrl: 'https://images.pexels.com/photos/2092078/pexels-photo-2092078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'chemical', name: 'Chemical', imageUrl: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
  {
    id: 'kitchen-&-Bathroom',
    name: 'Kitchen & Bathroom',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeA5S87d-Z1Zu_0uYOJ7_w0N4PRKlHucUnJZAkgMYBrhu19udgP_W_8574coyS7Mom5g&usqp=CAU',
    subcategories: [
      { id: 'lighting', name: 'Lighting', imageUrl: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'wiring', name: 'Wiring', imageUrl: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'switches', name: 'Switches & Sockets', imageUrl: 'https://images.pexels.com/photos/6444366/pexels-photo-6444366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
  {
    id: 'doors-&-Windows',
    name: 'Doors & Windows',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9ymN1fk9OzMZbOCHNKG4JMtDq4zlV8vhJw&s',
    subcategories: [
      { id: 'pipes', name: 'Pipes & Fittings', imageUrl: 'https://images.pexels.com/photos/4491014/pexels-photo-4491014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'pumps', name: 'Pumps', imageUrl: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'faucets', name: 'Faucets & Fixtures', imageUrl: 'https://images.pexels.com/photos/369598/pexels-photo-369598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    imageUrl: 'https://media.istockphoto.com/id/1130957259/photo/composition-with-tools-and-industrial-material-with-industrial-ship-background.jpg?s=612x612&w=0&k=20&c=XDZNptsfq3TASTKWGsmnDajREC820JuDQf9IyRanCsg=',
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