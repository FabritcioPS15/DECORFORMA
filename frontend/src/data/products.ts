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
    id: 'cocina-1',
    categorySlug: 'cocina',
    title: 'Cocina integral en L',
    subtitle: 'Módulos altos y bajos con melamina premium.',
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Moderna', 'En L', 'Herrajes'],
    priceFrom: 3200,
    colorVariants: [
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Roble',
        hex: '#B08968',
        image:
          'https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Grafito',
        hex: '#2F3A45',
        image:
          'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'cocina-2',
    categorySlug: 'cocina',
    title: 'Cocina minimalista',
    subtitle: 'Frentes lisos y distribución eficiente.',
    image:
      'https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Minimal', 'Blanco', 'Compacta'],
    priceFrom: 2400,
    colorVariants: [
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Nogal',
        hex: '#6F4E37',
        image:
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'sala-1',
    categorySlug: 'sala',
    title: 'Centro de entretenimiento',
    subtitle: 'Panel TV + repisas + almacenamiento oculto.',
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['TV', 'Panel', 'Iluminación'],
    priceFrom: 950,
    colorVariants: [
      {
        name: 'Nogal',
        hex: '#6F4E37',
        image:
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Roble',
        hex: '#B08968',
        image:
          'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'sala-2',
    categorySlug: 'sala',
    title: 'Mueble bar',
    subtitle: 'Diseño moderno con espacios para botellas y copas.',
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Bar', 'Moderno', 'Repisa'],
    priceFrom: 780,
    colorVariants: [
      {
        name: 'Grafito',
        hex: '#2F3A45',
        image:
          'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Nogal',
        hex: '#6F4E37',
        image:
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'dormitorio-1',
    categorySlug: 'dormitorio',
    title: 'Closet corredizo',
    subtitle: 'Puertas corredizas y distribución interior a medida.',
    image:
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Closet', 'Corredizo', 'Interior'],
    priceFrom: 1200,
    colorVariants: [
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Roble',
        hex: '#B08968',
        image:
          'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Grafito',
        hex: '#2F3A45',
        image:
          'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'dormitorio-2',
    categorySlug: 'dormitorio',
    title: 'Cabecera flotante',
    subtitle: 'Con repisas y opción de iluminación LED.',
    image:
      'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Cabecera', 'LED', 'Moderna'],
    priceFrom: 680,
    colorVariants: [
      {
        name: 'Nogal',
        hex: '#6F4E37',
        image:
          'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'oficina-1',
    categorySlug: 'oficina',
    title: 'Escritorio ejecutivo',
    subtitle: 'Superficie amplia + mueble auxiliar + pasacables.',
    image:
      'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Ejecutivo', 'Cableado', 'Almacenaje'],
    priceFrom: 1100,
    colorVariants: [
      {
        name: 'Grafito',
        hex: '#2F3A45',
        image:
          'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Roble',
        hex: '#B08968',
        image:
          'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'oficina-2',
    categorySlug: 'oficina',
    title: 'Estación de trabajo',
    subtitle: 'Múltiples puestos con separadores y módulos.',
    image:
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Equipo', 'Modular', 'Productividad'],
    priceFrom: 1850,
    colorVariants: [
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Grafito',
        hex: '#2F3A45',
        image:
          'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'comercios-1',
    categorySlug: 'comercios',
    title: 'Mostrador comercial',
    subtitle: 'Diseño con vitrina + zona de atención + almacenamiento.',
    image:
      'https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Mostrador', 'Vitrina', 'Marca'],
    priceFrom: 2100,
    colorVariants: [
      {
        name: 'Blanco',
        hex: '#F5F7FA',
        image:
          'https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Roble',
        hex: '#B08968',
        image:
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
  {
    id: 'comercios-2',
    categorySlug: 'comercios',
    title: 'Exhibidor modular',
    subtitle: 'Estructura adaptable para productos y merchandising.',
    image:
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Exhibidor', 'Modular', 'Tienda'],
    priceFrom: 1350,
    colorVariants: [
      {
        name: 'Roble',
        hex: '#B08968',
        image:
          'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
      {
        name: 'Grafito',
        hex: '#2F3A45',
        image:
          'https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=900',
      },
    ],
  },
];
