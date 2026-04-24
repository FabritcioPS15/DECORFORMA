export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  size?: 'small' | 'large' | 'tall';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Loft Contemporáneo',
    location: 'Polanco, CDMX',
    category: 'Residencial',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
    size: 'large'
  },
  {
    id: '2',
    title: 'Corporativo Horizonte',
    location: 'Santa Fe, CDMX',
    category: 'Comercial',
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600',
    size: 'small'
  },
  {
    id: '3',
    title: 'Casa Valle',
    location: 'San Pedro, NL',
    category: 'Residencial',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
    size: 'tall'
  },
  {
    id: '4',
    title: 'Cocina Noir',
    location: 'Lomas, CDMX',
    category: 'Interiores',
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600',
    size: 'small'
  },
  {
    id: '5',
    title: 'Spa Residencial',
    location: 'La Herradura, CDMX',
    category: 'Residencial',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    size: 'small'
  },
  {
    id: '6',
    title: 'Oficinas Creativas',
    location: 'Condesa, CDMX',
    category: 'Comercial',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600',
    size: 'small'
  }
];
