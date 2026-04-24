export type Product = {
  id: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  priceFrom?: number;
  colorVariants?: {
    name: string;
    hex: string;
    image: string;
  }[];
};

export const products: Product[] = [
  {
    id: '1',
    categorySlug: 'muebles',
    title: 'Silla Lounge AURA',
    subtitle: 'Elegancia y confort en una pieza escultural.',
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Premium', 'Lounge', 'Diseño'],
    priceFrom: 450
  },
  {
    id: '2',
    categorySlug: 'iluminacion',
    title: 'Lámpara Colgante NORD',
    subtitle: 'Iluminación minimalista con acentos en latón.',
    image: 'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Nórdico', 'Latón', 'LED'],
    priceFrom: 220
  },
  {
    id: '3',
    categorySlug: 'muebles',
    title: 'Mesa de Centro ORE',
    subtitle: 'Madera maciza con acabados orgánicos.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Madera', 'Orgánico', 'Centro'],
    priceFrom: 890
  },
  {
    id: '4',
    categorySlug: 'decoracion',
    title: 'Jarrón Cerámico LINE',
    subtitle: 'Texturas naturales para espacios contemporáneos.',
    image: 'https://images.pexels.com/photos/1329444/pexels-photo-1329444.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Cerámica', 'Decoración', 'Handmade'],
    priceFrom: 85
  },
  {
    id: '5',
    categorySlug: 'muebles',
    title: 'Sofá Modular MODA',
    subtitle: 'Versatilidad y lujo en cada módulo.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Modular', 'Textil', 'Lujo'],
    priceFrom: 2400
  },
  {
    id: '6',
    categorySlug: 'textiles',
    title: 'Alfombra Natural FIBRA',
    subtitle: 'Tejidos artesanales de alta resistencia.',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Fibra', 'Artesanal', 'Natural'],
    priceFrom: 350
  },
  {
    id: '7',
    categorySlug: 'decoracion',
    title: 'Cuadro Abstracto TERRA',
    subtitle: 'Arte que define la atmósfera de tu hogar.',
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Arte', 'Abstracto', 'Terra'],
    priceFrom: 620
  },
  {
    id: '8',
    categorySlug: 'muebles',
    title: 'Mesa Auxiliar STONE',
    subtitle: 'Inspiración pétrea con estructura ligera.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Piedra', 'Auxiliar', 'Diseño'],
    priceFrom: 380
  }
];
