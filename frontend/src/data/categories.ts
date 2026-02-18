export type Category = {
  slug: string;
  label: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: 'cocina',
    label: 'Cocina',
    description: 'Cocinas integrales, muebles bajos y altos, optimización de espacios.',
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'sala',
    label: 'Sala',
    description: 'Centros de entretenimiento, racks, vitrinas y soluciones modernas.',
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'dormitorio',
    label: 'Dormitorio',
    description: 'Closets, cómodas, cabeceras y muebles funcionales a medida.',
    image:
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'oficina',
    label: 'Muebles de Oficina',
    description: 'Escritorios, estaciones de trabajo, archivadores y salas de reunión.',
    image:
      'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'comercios',
    label: 'Muebles para Comercios',
    description: 'Mostradores, exhibidores y mobiliario para tiendas y negocios.',
    image:
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];
