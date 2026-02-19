export type Category = {
  slug: string;
  label: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: 'cocina',
    label: 'Cocinas de Lujo',
    description: 'Diseñamos cocinas integrales que combinan elegancia y funcionalidad. Muebles altos y bajos con acabados premium y optimización inteligente de cada espacio.',
    image: 'https://imarket.com.pe/hogar/wp-content/uploads/2024/05/cocina-de-melamina-A-1.jpg',
  },
  {
    slug: 'sala',
    label: 'Salas & Centros de TV',
    description: 'Transformamos tu zona de estar con centros de entretenimiento modernos, racks suspendidos y vitrinas minimalistas diseñadas a la medida de tu hogar.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop',
  },
  {
    slug: 'dormitorio',
    label: 'Dormitorios & Closets',
    description: 'Crea un refugio de paz con closets empotrados, cómodas sofisticadas y cabeceras flotantes que maximizan el confort y el almacenamiento.',
    image: 'https://i.pinimg.com/736x/89/9b/61/899b61d4f5b9e8e56122f6658db6c0b7.jpg',
  },
  {
    slug: 'oficina',
    label: 'Espacios de Oficina',
    description: 'Estaciones de trabajo corporativas y escritorios ejecutivos que inspiran productividad. Mobiliario ergonómico con acabados de alta durabilidad.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  },
  {
    slug: 'comercios',
    label: 'Muebles Comerciales',
    description: 'Potenciamos tu marca con mostradores, exhibidores y mobiliario especializado para tiendas y negocios que buscan destacar.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'madera',
    label: 'Muebles de Madera Fina',
    description: 'Artesanía pura en maderas seleccionadas. Creamos piezas únicas que combinan la calidez de lo natural con diseños contemporáneos y durabilidad excepcional.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop',
  },
  {
    slug: 'bibliotecas',
    label: 'Bibliotecas & Estanterías',
    description: 'Optimización y elegancia para tus colecciones. Diseñamos bibliotecas personalizadas que transforman estudios y salas en espacios de inspiración y orden.',
    image: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=2000&auto=format&fit=crop',
  },
  {
    slug: 'educativo',
    label: 'Instituciones Educativas',
    description: 'Mobiliario ergonómico y funcional diseñado para potenciar el aprendizaje. Creamos espacios educativos modernos que fomentan la colaboración y el enfoque.',
    image: 'https://mobiliarioeducativo.pe/wp-content/uploads/2023/03/Mesas-y-sillas-escolares.jpg',
  },
];
