// Configuraciones y presets para el editor de diseños

export interface DesignConfiguration {
  id: string;
  name: string;
  description: string;
  category: string;
  settings: {
    grid: {
      enabled: boolean;
      size: number; // tamaño del grid en cm
      snap: boolean; // snap to grid
      show: boolean; // mostrar grid
    };
    units: 'cm' | 'mm' | 'inches';
    constraints: {
      maxWidth: number;
      maxHeight: number;
      maxDepth: number;
      minComponentSize: number;
    };
    rendering: {
      quality: 'low' | 'medium' | 'high';
      shadows: boolean;
      wireframe: boolean;
      materials: boolean;
    };
    pricing: {
      laborRatePerHour: number;
      materialMarkup: number; // porcentaje
      hardwareMarkup: number; // porcentaje
      taxRate: number; // porcentaje
    };
  };
}

// Configuraciones predefinidas
export const designConfigurations: DesignConfiguration[] = [
  {
    id: 'residential-standard',
    name: 'Residencial Estándar',
    description: 'Configuración para muebles residenciales estándar',
    category: 'residencial',
    settings: {
      grid: {
        enabled: true,
        size: 5,
        snap: true,
        show: true
      },
      units: 'cm',
      constraints: {
        maxWidth: 300,
        maxHeight: 280,
        maxDepth: 80,
        minComponentSize: 5
      },
      rendering: {
        quality: 'medium',
        shadows: true,
        wireframe: false,
        materials: true
      },
      pricing: {
        laborRatePerHour: 25.00,
        materialMarkup: 0.30,
        hardwareMarkup: 0.50,
        taxRate: 0.18
      }
    }
  },
  {
    id: 'commercial-premium',
    name: 'Comercial Premium',
    description: 'Configuración para muebles comerciales de alta gama',
    category: 'comercial',
    settings: {
      grid: {
        enabled: true,
        size: 2,
        snap: true,
        show: true
      },
      units: 'cm',
      constraints: {
        maxWidth: 500,
        maxHeight: 350,
        maxDepth: 120,
        minComponentSize: 2
      },
      rendering: {
        quality: 'high',
        shadows: true,
        wireframe: false,
        materials: true
      },
      pricing: {
        laborRatePerHour: 35.00,
        materialMarkup: 0.40,
        hardwareMarkup: 0.60,
        taxRate: 0.18
      }
    }
  },
  {
    id: 'kitchen-professional',
    name: 'Cocina Profesional',
    description: 'Configuración especializada para cocinas',
    category: 'cocina',
    settings: {
      grid: {
        enabled: true,
        size: 1,
        snap: true,
        show: true
      },
      units: 'cm',
      constraints: {
        maxWidth: 400,
        maxHeight: 300,
        maxDepth: 100,
        minComponentSize: 1
      },
      rendering: {
        quality: 'high',
        shadows: true,
        wireframe: false,
        materials: true
      },
      pricing: {
        laborRatePerHour: 40.00,
        materialMarkup: 0.35,
        hardwareMarkup: 0.55,
        taxRate: 0.18
      }
    }
  },
  {
    id: 'office-basic',
    name: 'Oficina Básica',
    description: 'Configuración para muebles de oficina básicos',
    category: 'oficina',
    settings: {
      grid: {
        enabled: true,
        size: 10,
        snap: true,
        show: true
      },
      units: 'cm',
      constraints: {
        maxWidth: 250,
        maxHeight: 200,
        maxDepth: 90,
        minComponentSize: 10
      },
      rendering: {
        quality: 'medium',
        shadows: true,
        wireframe: false,
        materials: true
      },
      pricing: {
        laborRatePerHour: 22.00,
        materialMarkup: 0.25,
        hardwareMarkup: 0.40,
        taxRate: 0.18
      }
    }
  }
];

// Presets de materiales populares
export interface MaterialPreset {
  id: string;
  name: string;
  description: string;
  materials: {
    structure: string; // material ID
    surface: string; // material ID
    decorative: string; // material ID
    hardware: string; // material ID
  };
  priceMultiplier: number; // multiplicador de precio total
}

export const materialPresets: MaterialPreset[] = [
  {
    id: 'modern-white',
    name: 'Moderno Blanco',
    description: 'Combinación moderna y minimalista en blanco',
    materials: {
      structure: 'melamina-blanca',
      surface: 'mdf-standard',
      decorative: 'mdf-standard',
      hardware: 'acero-inoxidable'
    },
    priceMultiplier: 1.0
  },
  {
    id: 'classic-wood',
    name: 'Clásico Madera',
    description: 'Estilo clásico con acabados en madera natural',
    materials: {
      structure: 'madera-cedro',
      surface: 'madera-cedro',
      decorative: 'madera-caoba',
      hardware: 'acero-inoxidable'
    },
    priceMultiplier: 1.8
  },
  {
    id: 'industrial-gray',
    name: 'Industrial Gris',
    description: 'Estilo industrial con acabados grises y metal',
    materials: {
      structure: 'melamina-gris',
      surface: 'mdf-standard',
      decorative: 'metal',
      hardware: 'aluminio'
    },
    priceMultiplier: 1.2
  },
  {
    id: 'luxury-dark',
    name: 'Lujo Oscuro',
    description: 'Diseño de lujo con acabados oscuros y premium',
    materials: {
      structure: 'madera-caoba',
      surface: 'mdf-standard',
      decorative: 'madera-caoba',
      hardware: 'acero-inoxidable'
    },
    priceMultiplier: 2.2
  },
  {
    id: 'budget-friendly',
    name: 'Económico',
    description: 'Opción económica con materiales básicos',
    materials: {
      structure: 'tripley-standard',
      surface: 'melamina-blanca',
      decorative: 'melamina-blanca',
      hardware: 'aluminio'
    },
    priceMultiplier: 0.7
  }
];

// Presets de dimensiones estándar
export interface DimensionPreset {
  id: string;
  name: string;
  category: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  description: string;
}

export const dimensionPresets: DimensionPreset[] = [
  // Cocina
  {
    id: 'kitchen-base-standard',
    name: 'Base Estándar',
    category: 'cocina',
    dimensions: { width: 80, height: 85, depth: 60 },
    description: 'Gabinete inferior estándar de cocina'
  },
  {
    id: 'kitchen-wall-standard',
    name: 'Superior Estándar',
    category: 'cocina',
    dimensions: { width: 80, height: 70, depth: 35 },
    description: 'Gabinete superior estándar de cocina'
  },
  {
    id: 'kitchen-pantry',
    name: 'Despensa',
    category: 'cocina',
    dimensions: { width: 90, height: 220, depth: 60 },
    description: 'Gabinete despensa de cocina'
  },

  // Dormitorio
  {
    id: 'wardrobe-2door',
    name: 'Closet 2 Puertas',
    category: 'dormitorio',
    dimensions: { width: 120, height: 220, depth: 60 },
    description: 'Closet estándar de dos puertas'
  },
  {
    id: 'wardrobe-3door',
    name: 'Closet 3 Puertas',
    category: 'dormitorio',
    dimensions: { width: 180, height: 220, depth: 60 },
    description: 'Closet grande de tres puertas'
  },
  {
    id: 'nightstand',
    name: 'Mesa de Noche',
    category: 'dormitorio',
    dimensions: { width: 50, height: 50, depth: 40 },
    description: 'Mesa de noche estándar'
  },

  // Sala
  {
    id: 'tv-stand-small',
    name: 'Mueble TV Pequeño',
    category: 'sala',
    dimensions: { width: 120, height: 45, depth: 40 },
    description: 'Mueble para TV pequeño'
  },
  {
    id: 'tv-stand-large',
    name: 'Mueble TV Grande',
    category: 'sala',
    dimensions: { width: 200, height: 50, depth: 50 },
    description: 'Mueble para TV grande'
  },
  {
    id: 'coffee-table',
    name: 'Mesa de Centro',
    category: 'sala',
    dimensions: { width: 100, height: 45, depth: 60 },
    description: 'Mesa de centro estándar'
  },

  // Oficina
  {
    id: 'desk-standard',
    name: 'Escritorio Estándar',
    category: 'oficina',
    dimensions: { width: 120, height: 75, depth: 60 },
    description: 'Escritorio estándar de oficina'
  },
  {
    id: 'desk-executive',
    name: 'Escritorio Ejecutivo',
    category: 'oficina',
    dimensions: { width: 180, height: 75, depth: 80 },
    description: 'Escritorio ejecutivo grande'
  },
  {
    id: 'filing-cabinet',
    name: 'Archivador',
    category: 'oficina',
    dimensions: { width: 45, height: 132, depth: 62 },
    description: 'Archivador de 4 cajones'
  },

  // Biblioteca
  {
    id: 'bookshelf-standard',
    name: 'Estantería Estándar',
    category: 'biblioteca',
    dimensions: { width: 80, height: 180, depth: 30 },
    description: 'Estantería estándar de 5 niveles'
  },
  {
    id: 'bookshelf-wide',
    name: 'Estantería Ancha',
    category: 'biblioteca',
    dimensions: { width: 120, height: 200, depth: 35 },
    description: 'Estantería ancha para sala'
  }
];

// Funciones helper
export const getConfigurationById = (id: string) => {
  return designConfigurations.find(config => config.id === id);
};

export const getConfigurationByCategory = (category: string) => {
  return designConfigurations.find(config => config.category === category);
};

export const getMaterialPresetById = (id: string) => {
  return materialPresets.find(preset => preset.id === id);
};

export const getDimensionPresetById = (id: string) => {
  return dimensionPresets.find(preset => preset.id === id);
};

export const getDimensionPresetsByCategory = (category: string) => {
  return dimensionPresets.filter(preset => preset.category === category);
};
