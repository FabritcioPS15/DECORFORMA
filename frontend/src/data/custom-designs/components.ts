// Tipos para componentes de muebles personalizados
export interface FurnitureComponent {
  id: string;
  type: ComponentType;
  name: string;
  dimensions: {
    width: number;  // cm
    height: number; // cm
    depth: number;  // cm
  };
  position: {
    x: number; // cm
    y: number; // cm
    z: number; // cm
  };
  material: string;
  finish: string;
  price: number;
  category: string;
  constraints?: {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    minDepth?: number;
    maxDepth?: number;
  };
}

export type ComponentType = 
  | 'drawer'       // Cajón
  | 'door'         // Puerta
  | 'shelf'        // Estante
  | 'frame'        // Marco/estructura
  | 'panel'        // Panel
  | 'leg'          // Pata
  | 'handle'       // Manija
  | 'hinge'        // Bisagra
  | 'divider'      // Separador
  | 'back_panel'   // Panel trasero
  | 'base'         // Base
  | 'support'      // Soporte
  | 'module'       // Módulo
  | 'profile';     // Perfilería

// Componentes base predefinidos
export const baseComponents: FurnitureComponent[] = [
  // ESTRUCTURA
  {
    id: 'panel-base',
    name: 'Panel Base',
    type: 'panel',
    category: 'structure',
    dimensions: { width: 60, height: 80, depth: 1.8 },
    position: { x: 0, y: 0, z: 0 },
    material: 'melamina',
    finish: 'blanco',
    price: 120,
    constraints: { minWidth: 30, maxWidth: 120, minHeight: 40, maxHeight: 240 }
  },
  {
    id: 'panel-lateral',
    name: 'Panel Lateral',
    type: 'panel',
    category: 'structure',
    dimensions: { width: 1.8, height: 80, depth: 60 },
    position: { x: 0, y: 0, z: 0 },
    material: 'melamina',
    finish: 'blanco',
    price: 100,
    constraints: { minWidth: 30, maxWidth: 120, minHeight: 40, maxHeight: 240 }
  },
  {
    id: 'marco-cocina',
    name: 'Marco Cocina',
    type: 'frame',
    category: 'structure',
    dimensions: { width: 80, height: 90, depth: 60 },
    position: { x: 0, y: 0, z: 0 },
    material: 'mdf',
    finish: 'laca',
    price: 280,
    constraints: { minWidth: 40, maxWidth: 150, minHeight: 60, maxHeight: 120 }
  },
  {
    id: 'base-mesa',
    name: 'Base Mesa',
    type: 'base',
    category: 'structure',
    dimensions: { width: 120, height: 75, depth: 80 },
    position: { x: 0, y: 0, z: 0 },
    material: 'madera',
    finish: 'natural',
    price: 450,
    constraints: { minWidth: 60, maxWidth: 200, minHeight: 40, maxHeight: 90 }
  },
  {
    id: 'soporte-tv',
    name: 'Soporte TV',
    type: 'support',
    category: 'structure',
    dimensions: { width: 150, height: 40, depth: 45 },
    position: { x: 0, y: 0, z: 0 },
    material: 'tripley',
    finish: 'natural',
    price: 320,
    constraints: { minWidth: 100, maxWidth: 250, minHeight: 30, maxHeight: 60 }
  },

  // ALMACENAMIENTO
  {
    id: 'cajon-grande',
    name: 'Cajón Grande',
    type: 'drawer',
    category: 'storage',
    dimensions: { width: 50, height: 20, depth: 55 },
    position: { x: 0, y: 0, z: 0 },
    material: 'mdf',
    finish: 'crudo',
    price: 85,
    constraints: { minWidth: 30, maxWidth: 100, minHeight: 15, maxHeight: 30 }
  },
  {
    id: 'cajon-chico',
    name: 'Cajón Chico',
    type: 'drawer',
    category: 'storage',
    dimensions: { width: 40, height: 15, depth: 45 },
    position: { x: 0, y: 0, z: 0 },
    material: 'mdf',
    finish: 'crudo',
    price: 65,
    constraints: { minWidth: 20, maxWidth: 80, minHeight: 10, maxHeight: 25 }
  },
  {
    id: 'estante-flotante',
    name: 'Estante Flotante',
    type: 'shelf',
    category: 'storage',
    dimensions: { width: 80, height: 3, depth: 25 },
    position: { x: 0, y: 0, z: 0 },
    material: 'melamina',
    finish: 'roble',
    price: 95,
    constraints: { minWidth: 40, maxWidth: 200, minHeight: 2, maxHeight: 5 }
  },
  {
    id: 'modulo-libreria',
    name: 'Módulo Librería',
    type: 'module',
    category: 'storage',
    dimensions: { width: 80, height: 180, depth: 30 },
    position: { x: 0, y: 0, z: 0 },
    material: 'melamina',
    finish: 'gris',
    price: 380,
    constraints: { minWidth: 40, maxWidth: 120, minHeight: 120, maxHeight: 240 }
  },
  {
    id: 'gaveta',
    name: 'Gaveta',
    type: 'drawer',
    category: 'storage',
    dimensions: { width: 60, height: 25, depth: 50 },
    position: { x: 0, y: 0, z: 0 },
    material: 'tripley',
    finish: 'pintado',
    price: 110,
    constraints: { minWidth: 30, maxWidth: 100, minHeight: 20, maxHeight: 40 }
  },

  // PUERTAS
  {
    id: 'puerta-cocina',
    name: 'Puerta Cocina',
    type: 'door',
    category: 'doors',
    dimensions: { width: 40, height: 70, depth: 1.8 },
    position: { x: 0, y: 0, z: 0 },
    material: 'mdf',
    finish: 'laca',
    price: 150,
    constraints: { minWidth: 30, maxWidth: 60, minHeight: 50, maxHeight: 90 }
  },
  {
    id: 'puerta-corrediza',
    name: 'Puerta Corrediza',
    type: 'door',
    category: 'doors',
    dimensions: { width: 90, height: 200, depth: 2 },
    position: { x: 0, y: 0, z: 0 },
    material: 'tripley',
    finish: 'natural',
    price: 220,
    constraints: { minWidth: 60, maxWidth: 120, minHeight: 180, maxHeight: 250 }
  },
  {
    id: 'puerta-vitrina',
    name: 'Puerta Vitrina',
    type: 'door',
    category: 'doors',
    dimensions: { width: 50, height: 120, depth: 2 },
    position: { x: 0, y: 0, z: 0 },
    material: 'cristal',
    finish: 'transparente',
    price: 180,
    constraints: { minWidth: 40, maxWidth: 80, minHeight: 100, maxHeight: 150 }
  },
  {
    id: 'panel-cristal',
    name: 'Panel Cristal',
    type: 'panel',
    category: 'doors',
    dimensions: { width: 60, height: 80, depth: 0.5 },
    position: { x: 0, y: 0, z: 0 },
    material: 'cristal',
    finish: 'transparente',
    price: 140,
    constraints: { minWidth: 30, maxWidth: 100, minHeight: 60, maxHeight: 120 }
  },

  // ACCESORIOS
  {
    id: 'tirador-metalico',
    name: 'Tirador Metálico',
    type: 'handle',
    category: 'hardware',
    dimensions: { width: 15, height: 2, depth: 3 },
    position: { x: 0, y: 0, z: 0 },
    material: 'metal',
    finish: 'acero',
    price: 25,
    constraints: { minWidth: 10, maxWidth: 30, minHeight: 1, maxHeight: 5 }
  },
  {
    id: 'handle-knob',
    type: 'handle',
    name: 'Tirador Redondo',
    dimensions: { width: 3, height: 3, depth: 2.5 },
    position: { x: 0, y: 0, z: 0 },
    material: 'metal',
    finish: 'bronce',
    price: 8.00,
    category: 'hardware',
    constraints: {
      minWidth: 2,
      maxWidth: 5,
      minHeight: 2,
      maxHeight: 5,
      minDepth: 2,
      maxDepth: 4
    }
  }
];

// Categorías de componentes
export const componentCategories = {
  structure: 'Estructura',
  storage: 'Almacenamiento',
  doors: 'Puertas',
  hardware: 'Accesorios'
};

// Funciones helper
export const getComponentsByCategory = (category: string) => {
  return baseComponents.filter(comp => comp.category === category);
};

export const getComponentById = (id: string) => {
  return baseComponents.find(comp => comp.id === id);
};

export const getComponentsByType = (type: ComponentType) => {
  return baseComponents.filter(comp => comp.type === type);
};
