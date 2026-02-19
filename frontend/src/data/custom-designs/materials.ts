// Sistema de materiales y acabados para diseños personalizados

export interface Material {
  id: string;
  name: string;
  type: MaterialType;
  category: MaterialCategory;
  pricePerSqm: number;
  thickness: number[]; // grosores disponibles en mm
  finishes: Finish[];
  description: string;
  durability: 'low' | 'medium' | 'high' | 'premium';
  maintenance: string;
  image?: string;
}

export interface Finish {
  id: string;
  name: string;
  color: string;
  texture: string;
  priceModifier: number; // multiplicador de precio
  hexCode?: string;
}

export type MaterialType = 
  | 'melamina'
  | 'mdf'
  | 'madera'
  | 'tripley'
  | 'metal'
  | 'cristal'
  | 'pvc'
  | 'formica';

export type MaterialCategory = 
  | 'structural'
  | 'surface'
  | 'decorative'
  | 'hardware';
// Materiales disponibles
export const materials: Material[] = [
  // MELAMINA
  {
    id: 'melamina-blanca',
    name: 'Melamina Blanca',
    type: 'melamina',
    category: 'surface',
    pricePerSqm: 45,
    thickness: [15, 18],
    finishes: [
      {
        id: 'blanco',
        name: 'Blanco',
        color: 'blanco',
        texture: 'smooth',
        priceModifier: 1.0,
        hexCode: '#f5f5f5'
      }
    ],
    description: 'Melamina blanca de alta calidad',
    durability: 'high',
    maintenance: 'Limpieza con paño húmedo'
  },
  {
    id: 'melamina-gris',
    name: 'Melamina Gris',
    type: 'melamina',
    category: 'surface',
    pricePerSqm: 48,
    thickness: [15, 18],
    finishes: [
      {
        id: 'gris',
        name: 'Gris',
        color: 'gris',
        texture: 'smooth',
        priceModifier: 1.0,
        hexCode: '#808080'
      }
    ],
    description: 'Melamina gris moderna',
    durability: 'high',
    maintenance: 'Limpieza con paño húmedo'
  },
  {
    id: 'melamina-roble',
    name: 'Melamina Roble',
    type: 'melamina',
    category: 'surface',
    pricePerSqm: 52,
    thickness: [15, 18],
    finishes: [
      {
        id: 'roble',
        name: 'Roble',
        color: 'roble',
        texture: 'wood-grain',
        priceModifier: 1.0,
        hexCode: '#DEB887'
      }
    ],
    description: 'Melamina con acabado de role natural',
    durability: 'high',
    maintenance: 'Limpieza con paño húmedo'
  },
  {
    id: 'melamina-nogal',
    name: 'Melamina Nogal',
    type: 'melamina',
    category: 'surface',
    pricePerSqm: 55,
    thickness: [15, 18],
    finishes: [
      {
        id: 'nogal',
        name: 'Nogal',
        color: 'nogal',
        texture: 'wood-grain',
        priceModifier: 1.0,
        hexCode: '#8B4513'
      }
    ],
    description: 'Melamina con acabado de nogal elegante',
    durability: 'high',
    maintenance: 'Limpieza con paño húmedo'
  },
  {
    id: 'melamina-negra',
    name: 'Melamina Negra',
    type: 'melamina',
    category: 'surface',
    pricePerSqm: 50,
    thickness: [15, 18],
    finishes: [
      {
        id: 'negro',
        name: 'Negro',
        color: 'negro',
        texture: 'matte',
        priceModifier: 1.0,
        hexCode: '#000000'
      }
    ],
    description: 'Melamina negra con acabado mate',
    durability: 'high',
    maintenance: 'Limpieza con paño húmedo'
  },

  // MDF
  {
    id: 'mdf-standard',
    name: 'MDF Estándar',
    type: 'mdf',
    category: 'surface',
    pricePerSqm: 38.00,
    thickness: [3, 6, 9, 12, 15, 18],
    finishes: [
      {
        id: 'crudo',
        name: 'Crudo',
        color: 'natural',
        texture: 'liso',
        priceModifier: 1.0,
        hexCode: '#F5DEB3'
      },
      {
        id: 'laca-blanca',
        name: 'Laca Blanca',
        color: 'blanco',
        texture: 'liso',
        priceModifier: 1.8,
        hexCode: '#FFFFFF'
      },
      {
        id: 'laca-negra',
        name: 'Laca Negra',
        color: 'negro',
        texture: 'liso',
        priceModifier: 1.9,
        hexCode: '#000000'
      }
    ],
    description: 'MDF de alta densidad perfecto para acabados lacados',
    durability: 'medium',
    maintenance: 'Evitar exposición prolongada a la humedad'
  },

  // Maderas
  {
    id: 'madera-cedro',
    name: 'Cedro',
    type: 'madera',
    category: 'decorative',
    pricePerSqm: 120.00,
    thickness: [18, 25, 38],
    finishes: [
      {
        id: 'natural',
        name: 'Natural',
        color: 'cedro',
        texture: 'vetas',
        priceModifier: 1.0,
        hexCode: '#A0826D'
      },
      {
        id: 'barniz-mate',
        name: 'Barniz Mate',
        color: 'cedro',
        texture: 'liso',
        priceModifier: 1.2,
        hexCode: '#8B7355'
      },
      {
        id: 'barniz-brillante',
        name: 'Barniz Brillante',
        color: 'cedro',
        texture: 'brillante',
        priceModifier: 1.25,
        hexCode: '#CD853F'
      }
    ],
    description: 'Madera de cedro de alta calidad, resistente a insectos',
    durability: 'premium',
    maintenance: 'Aplicar barniz cada 2 años'
  },
  {
    id: 'madera-caoba',
    name: 'Caoba',
    type: 'madera',
    category: 'decorative',
    pricePerSqm: 150.00,
    thickness: [18, 25, 38],
    finishes: [
      {
        id: 'natural',
        name: 'Natural',
        color: 'caoba',
        texture: 'vetas',
        priceModifier: 1.0,
        hexCode: '#C04000'
      },
      {
        id: 'encerado',
        name: 'Encerado',
        color: 'caoba',
        texture: 'suave',
        priceModifier: 1.15,
        hexCode: '#A0522D'
      }
    ],
    description: 'Madera fina de caoba con acabado lujoso',
    durability: 'premium',
    maintenance: 'Cera especial cada 6 meses'
  },

  // Tripley
  {
    id: 'tripley-standard',
    name: 'Tripley Estándar',
    type: 'tripley',
    category: 'structural',
    pricePerSqm: 28.00,
    thickness: [3, 6, 9, 12, 15, 18],
    finishes: [
      {
        id: 'crudo',
        name: 'Crudo',
        color: 'natural',
        texture: 'rugoso',
        priceModifier: 1.0,
        hexCode: '#D2691E'
      },
      {
        id: 'pintado',
        name: 'Pintado',
        color: 'blanco',
        texture: 'liso',
        priceModifier: 1.3,
        hexCode: '#FFFFFF'
      }
    ],
    description: 'Triplay estructural ideal para paneles traseros y refuerzos',
    durability: 'medium',
    maintenance: 'Proteger de la humedad directa'
  },

  // Metales
  {
    id: 'acero-inoxidable',
    name: 'Acero Inoxidable',
    type: 'metal',
    category: 'hardware',
    pricePerSqm: 85.00,
    thickness: [0.8, 1, 1.2, 1.5],
    finishes: [
      {
        id: 'cepillado',
        name: 'Cepillado',
        color: 'plateado',
        texture: 'cepillado',
        priceModifier: 1.0,
        hexCode: '#C0C0C0'
      },
      {
        id: 'brillante',
        name: 'Brillante',
        color: 'plateado',
        texture: 'espejo',
        priceModifier: 1.2,
        hexCode: '#E5E5E5'
      }
    ],
    description: 'Acero inoxidable de alta calidad para manijas y accesorios',
    durability: 'premium',
    maintenance: 'Limpieza con paño suave y alcohol isopropílico'
  },
  {
    id: 'aluminio',
    name: 'Aluminio',
    type: 'metal',
    category: 'hardware',
    pricePerSqm: 65.00,
    thickness: [1, 2, 3],
    finishes: [
      {
        id: 'anodizado',
        name: 'Anodizado',
        color: 'gris',
        texture: 'metalico',
        priceModifier: 1.0,
        hexCode: '#848484'
      },
      {
        id: 'pintado',
        name: 'Pintado',
        color: 'negro',
        texture: 'liso',
        priceModifier: 1.1,
        hexCode: '#000000'
      }
    ],
    description: 'Aluminio ligero y resistente para perfiles y estructuras',
    durability: 'high',
    maintenance: 'Limpieza con agua y jabón neutro'
  },

  // Cristales
  {
    id: 'cristal-transparente',
    name: 'Cristal Transparente',
    type: 'cristal',
    category: 'decorative',
    pricePerSqm: 95.00,
    thickness: [4, 6, 8, 10],
    finishes: [
      {
        id: 'transparente',
        name: 'Transparente',
        color: 'transparente',
        texture: 'liso',
        priceModifier: 1.0,
        hexCode: '#FFFFFF'
      },
      {
        id: 'templado',
        name: 'Templado',
        color: 'transparente',
        texture: 'liso',
        priceModifier: 1.5,
        hexCode: '#FFFFFF'
      }
    ],
    description: 'Cristal de alta calidad para puertas y vitrinas',
    durability: 'high',
    maintenance: 'Limpieza con limpiavidrios'
  }
];

// Categorías de materiales
export const materialCategories = {
  structural: 'Estructural',
  surface: 'Superficie',
  decorative: 'Decorativo',
  hardware: 'Accesorios'
};

// Funciones helper
export const getMaterialsByCategory = (category: MaterialCategory) => {
  return materials.filter(material => material.category === category);
};

export const getMaterialsByType = (type: MaterialType) => {
  return materials.filter(material => material.type === type);
};

export const getMaterialById = (id: string) => {
  return materials.find(material => material.id === id);
};

export const calculateMaterialPrice = (
  materialId: string, 
  finishId: string, 
  area: number
): number => {
  const material = getMaterialById(materialId);
  if (!material) return 0;
  
  const finish = material.finishes.find(f => f.id === finishId);
  const priceModifier = finish?.priceModifier || 1.0;
  
  return material.pricePerSqm * area * priceModifier;
};
