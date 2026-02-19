// Plantillas y configuraciones predefinidas para diseños personalizados

import { FurnitureComponent } from './components';

export interface FurnitureTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string; // tiempo de ensamblaje
  basePrice: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  components: FurnitureComponent[];
  image: string;
  tags: string[];
  customizable: boolean;
  instructions?: string[];
}

// Plantillas predefinidas
export const furnitureTemplates: FurnitureTemplate[] = [
  // Cocinas
  {
    id: 'kitchen-base-cabinet',
    name: 'Gabinete de Cocina Base',
    description: 'Gabinete inferior estándar para cocina con puerta y cajón',
    category: 'cocina',
    difficulty: 'beginner',
    estimatedTime: '2 horas',
    basePrice: 280.00,
    dimensions: { width: 80, height: 85, depth: 60 },
    components: [
      {
        id: 'frame-bottom',
        type: 'frame',
        name: 'Marco Inferior',
        dimensions: { width: 80, height: 85, depth: 60 },
        position: { x: 0, y: 0, z: 0 },
        material: 'melamina',
        finish: 'blanco',
        price: 120.00,
        category: 'structure'
      },
      {
        id: 'door-main',
        type: 'door',
        name: 'Puerta Principal',
        dimensions: { width: 39, height: 70, depth: 1.8 },
        position: { x: 0, y: 5, z: 0 },
        material: 'mdf',
        finish: 'laca',
        price: 85.00,
        category: 'doors'
      },
      {
        id: 'drawer-top',
        type: 'drawer',
        name: 'Cajón Superior',
        dimensions: { width: 74, height: 15, depth: 55 },
        position: { x: 3, y: 3, z: 2 },
        material: 'melamina',
        finish: 'blanco',
        price: 55.00,
        category: 'storage'
      },
      {
        id: 'shelf-bottom',
        type: 'shelf',
        name: 'Estante Inferior',
        dimensions: { width: 74, height: 2, depth: 55 },
        position: { x: 3, y: 40, z: 2 },
        material: 'melamina',
        finish: 'blanco',
        price: 20.00,
        category: 'storage'
      }
    ],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400',
    tags: ['cocina', 'gabinete', 'almacenamiento'],
    customizable: true,
    instructions: [
      'Construir el marco principal con melamina de 18mm',
      'Instalar el cajón superior con correderas',
      'Colocar la puerta con bisagras',
      'Añadir el estante interior'
    ]
  },
  {
    id: 'kitchen-wall-cabinet',
    name: 'Gabinete de Cocina Superior',
    description: 'Gabinete de pared para cocina con puerta batiente',
    category: 'cocina',
    difficulty: 'beginner',
    estimatedTime: '1.5 horas',
    basePrice: 220.00,
    dimensions: { width: 80, height: 70, depth: 35 },
    components: [
      {
        id: 'frame-wall',
        type: 'frame',
        name: 'Marco de Pared',
        dimensions: { width: 80, height: 70, depth: 35 },
        position: { x: 0, y: 0, z: 0 },
        material: 'melamina',
        finish: 'blanco',
        price: 95.00,
        category: 'structure'
      },
      {
        id: 'door-wall',
        type: 'door',
        name: 'Puerta de Pared',
        dimensions: { width: 39, height: 68, depth: 1.8 },
        position: { x: 0, y: 1, z: 0 },
        material: 'mdf',
        finish: 'laca',
        price: 75.00,
        category: 'doors'
      },
      {
        id: 'shelf-wall',
        type: 'shelf',
        name: 'Estante de Pared',
        dimensions: { width: 74, height: 2, depth: 30 },
        position: { x: 3, y: 35, z: 2 },
        material: 'melamina',
        finish: 'blanco',
        price: 15.00,
        category: 'storage'
      },
      {
        id: 'back-panel',
        type: 'back_panel',
        name: 'Panel Trasero',
        dimensions: { width: 80, height: 70, depth: 0.5 },
        position: { x: 0, y: 0, z: 32 },
        material: 'tripley',
        finish: 'natural',
        price: 35.00,
        category: 'structure'
      }
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400',
    tags: ['cocina', 'gabinete', 'pared'],
    customizable: true
  },

  // Salas
  {
    id: 'tv-stand-modern',
    name: 'Mueble TV Moderno',
    description: 'Centro de entretenimiento moderno con compartimentos abiertos y cerrados',
    category: 'sala',
    difficulty: 'intermediate',
    estimatedTime: '3 horas',
    basePrice: 450.00,
    dimensions: { width: 180, height: 45, depth: 45 },
    components: [
      {
        id: 'frame-tv',
        type: 'frame',
        name: 'Marco Principal',
        dimensions: { width: 180, height: 45, depth: 45 },
        position: { x: 0, y: 0, z: 0 },
        material: 'melamina',
        finish: 'roble',
        price: 180.00,
        category: 'structure'
      },
      {
        id: 'door-left',
        type: 'door',
        name: 'Puerta Izquierda',
        dimensions: { width: 44, height: 35, depth: 1.8 },
        position: { x: 2, y: 5, z: 0 },
        material: 'mdf',
        finish: 'laca',
        price: 65.00,
        category: 'doors'
      },
      {
        id: 'door-right',
        type: 'door',
        name: 'Puerta Derecha',
        dimensions: { width: 44, height: 35, depth: 1.8 },
        position: { x: 90, y: 5, z: 0 },
        material: 'mdf',
        finish: 'laca',
        price: 65.00,
        category: 'doors'
      },
      {
        id: 'shelf-center',
        type: 'shelf',
        name: 'Estante Central',
        dimensions: { width: 40, height: 2, depth: 40 },
        position: { x: 70, y: 20, z: 2 },
        material: 'melamina',
        finish: 'roble',
        price: 25.00,
        category: 'storage'
      },
      {
        id: 'drawer-center',
        type: 'drawer',
        name: 'Cajón Central',
        dimensions: { width: 40, height: 12, depth: 38 },
        position: { x: 70, y: 5, z: 3 },
        material: 'melamina',
        finish: 'roble',
        price: 45.00,
        category: 'storage'
      }
    ],
    image: 'https://images.unsplash.com/photo-1475189778701-8f8e6c0c3e2b?q=80&w=400',
    tags: ['sala', 'tv', 'entretenimiento'],
    customizable: true
  },

  // Dormitorios
  {
    id: 'wardrobe-basic',
    name: 'Closet Básico',
    description: 'Closet de dos puertas con barra para colgar y estantes',
    category: 'dormitorio',
    difficulty: 'intermediate',
    estimatedTime: '4 horas',
    basePrice: 580.00,
    dimensions: { width: 120, height: 220, depth: 60 },
    components: [
      {
        id: 'frame-wardrobe',
        type: 'frame',
        name: 'Marco del Closet',
        dimensions: { width: 120, height: 220, depth: 60 },
        position: { x: 0, y: 0, z: 0 },
        material: 'melamina',
        finish: 'blanco',
        price: 250.00,
        category: 'structure'
      },
      {
        id: 'door-left-wardrobe',
        type: 'door',
        name: 'Puerta Izquierda',
        dimensions: { width: 59, height: 215, depth: 1.8 },
        position: { x: 0, y: 2, z: 0 },
        material: 'mdf',
        finish: 'laca',
        price: 120.00,
        category: 'doors'
      },
      {
        id: 'door-right-wardrobe',
        type: 'door',
        name: 'Puerta Derecha',
        dimensions: { width: 59, height: 215, depth: 1.8 },
        position: { x: 60, y: 2, z: 0 },
        material: 'mdf',
        finish: 'laca',
        price: 120.00,
        category: 'doors'
      },
      {
        id: 'shelf-top',
        type: 'shelf',
        name: 'Estante Superior',
        dimensions: { width: 114, height: 2, depth: 55 },
        position: { x: 3, y: 180, z: 2 },
        material: 'melamina',
        finish: 'blanco',
        price: 30.00,
        category: 'storage'
      },
      {
        id: 'shelf-middle',
        type: 'shelf',
        name: 'Estante Medio',
        dimensions: { width: 114, height: 2, depth: 55 },
        position: { x: 3, y: 100, z: 2 },
        material: 'melamina',
        finish: 'blanco',
        price: 30.00,
        category: 'storage'
      },
      {
        id: 'bar-hanger',
        type: 'frame',
        name: 'Barra para Colgar',
        dimensions: { width: 110, height: 3, depth: 3 },
        position: { x: 5, y: 140, z: 25 },
        material: 'metal',
        finish: 'acero',
        price: 30.00,
        category: 'hardware'
      }
    ],
    image: 'https://images.unsplash.com/photo-1595526115033-709ca636a1a5?q=80&w=400',
    tags: ['dormitorio', 'closet', 'armario'],
    customizable: true
  },

  // Oficinas
  {
    id: 'desk-simple',
    name: 'Escritorio Simple',
    description: 'Escritorio funcional con cajón para almacenamiento',
    category: 'oficina',
    difficulty: 'beginner',
    estimatedTime: '2 horas',
    basePrice: 320.00,
    dimensions: { width: 120, height: 75, depth: 60 },
    components: [
      {
        id: 'desktop',
        type: 'panel',
        name: 'Tablero del Escritorio',
        dimensions: { width: 120, height: 2.5, depth: 60 },
        position: { x: 0, y: 72.5, z: 0 },
        material: 'madera',
        finish: 'natural',
        price: 150.00,
        category: 'surface'
      },
      {
        id: 'leg-left',
        type: 'leg',
        name: 'Pata Izquierda',
        dimensions: { width: 5, height: 72.5, depth: 5 },
        position: { x: 10, y: 0, z: 10 },
        material: 'madera',
        finish: 'natural',
        price: 40.00,
        category: 'structure'
      },
      {
        id: 'leg-right',
        type: 'leg',
        name: 'Pata Derecha',
        dimensions: { width: 5, height: 72.5, depth: 5 },
        position: { x: 105, y: 0, z: 10 },
        material: 'madera',
        finish: 'natural',
        price: 40.00,
        category: 'structure'
      },
      {
        id: 'drawer-desk',
        type: 'drawer',
        name: 'Cajón del Escritorio',
        dimensions: { width: 50, height: 15, depth: 45 },
        position: { x: 35, y: 5, z: 7 },
        material: 'melamina',
        finish: 'blanco',
        price: 55.00,
        category: 'storage'
      },
      {
        id: 'handle-desk',
        type: 'handle',
        name: 'Manija del Cajón',
        dimensions: { width: 15, height: 2, depth: 3 },
        position: { x: 52.5, y: 10, z: 0 },
        material: 'metal',
        finish: 'acero',
        price: 12.00,
        category: 'hardware'
      }
    ],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400',
    tags: ['oficina', 'escritorio', 'trabajo'],
    customizable: true
  },

  // Bibliotecas
  {
    id: 'bookshelf-modular',
    name: 'Estantería Modular',
    description: 'Estantería de 5 niveles ajustables',
    category: 'biblioteca',
    difficulty: 'beginner',
    estimatedTime: '2.5 horas',
    basePrice: 380.00,
    dimensions: { width: 80, height: 180, depth: 30 },
    components: [
      {
        id: 'frame-bookshelf',
        type: 'frame',
        name: 'Marco Principal',
        dimensions: { width: 80, height: 180, depth: 30 },
        position: { x: 0, y: 0, z: 0 },
        material: 'melamina',
        finish: 'gris',
        price: 160.00,
        category: 'structure'
      },
      {
        id: 'shelf-1',
        type: 'shelf',
        name: 'Estante 1',
        dimensions: { width: 74, height: 2, depth: 26 },
        position: { x: 3, y: 30, z: 2 },
        material: 'melamina',
        finish: 'gris',
        price: 20.00,
        category: 'storage'
      },
      {
        id: 'shelf-2',
        type: 'shelf',
        name: 'Estante 2',
        dimensions: { width: 74, height: 2, depth: 26 },
        position: { x: 3, y: 65, z: 2 },
        material: 'melamina',
        finish: 'gris',
        price: 20.00,
        category: 'storage'
      },
      {
        id: 'shelf-3',
        type: 'shelf',
        name: 'Estante 3',
        dimensions: { width: 74, height: 2, depth: 26 },
        position: { x: 3, y: 100, z: 2 },
        material: 'melamina',
        finish: 'gris',
        price: 20.00,
        category: 'storage'
      },
      {
        id: 'shelf-4',
        type: 'shelf',
        name: 'Estante 4',
        dimensions: { width: 74, height: 2, depth: 26 },
        position: { x: 3, y: 135, z: 2 },
        material: 'melamina',
        finish: 'gris',
        price: 20.00,
        category: 'storage'
      },
      {
        id: 'back-panel-bookshelf',
        type: 'back_panel',
        name: 'Panel Trasero',
        dimensions: { width: 80, height: 180, depth: 0.5 },
        position: { x: 0, y: 0, z: 27 },
        material: 'tripley',
        finish: 'natural',
        price: 40.00,
        category: 'structure'
      }
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    tags: ['biblioteca', 'estantería', 'almacenamiento'],
    customizable: true
  }
];

// Funciones helper
export const getTemplatesByCategory = (category: string) => {
  return furnitureTemplates.filter(template => template.category === category);
};

export const getTemplateById = (id: string) => {
  return furnitureTemplates.find(template => template.id === id);
};

export const getTemplatesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
  return furnitureTemplates.filter(template => template.difficulty === difficulty);
};

export const searchTemplates = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return furnitureTemplates.filter(template => 
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
