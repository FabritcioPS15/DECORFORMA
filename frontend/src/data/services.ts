export interface Service {
    slug: string;
    label: string;
    description: string;
    longDescription: string;
    image: string;
    benefits: string[];
}

export const services: Service[] = [
    {
        slug: 'diseno',
        label: 'Diseño de muebles de melamina',
        description: 'Visualiza tu proyecto en 3D antes de empezar.',
        longDescription: 'Nuestro servicio de diseño utiliza software de última generación para crear planos detallados y renders 3D de tus muebles. Esto te permite ajustar cada detalle, desde el color hasta la distribución interna, asegurando que el resultado final sea exactamente lo que imaginaste.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop',
        benefits: [
            'Renders fotorrealistas en 3D',
            'Optimización de espacios pequeños',
            'Asesoría en combinación de texturas y colores',
            'Planos técnicos para fabricación precisa'
        ]
    },
    {
        slug: 'domicilio',
        label: 'Trabajos de melamina a domicilio',
        description: 'Fabricación e instalación técnica en la comodidad de tu hogar.',
        longDescription: 'Nos encargamos de todo el proceso en tu ubicación. Desde la toma de medidas milimétricas hasta el ensamblaje final. Nuestro equipo de técnicos expertos garantiza que cada pieza encaje perfectamente en su lugar, cuidando la infraestructura de tu hogar en todo momento.',
        image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            'Toma de medidas profesional sin costo',
            'Instalación limpia y rápida',
            'Ajustes en sitio para acabados perfectos',
            'Personal altamente calificado y uniformado'
        ]
    },
    {
        slug: 'personalizados',
        label: 'Muebles personalizados',
        description: 'Muebles únicos diseñados exclusivamente para tu estilo de vida.',
        longDescription: 'Si tienes una idea única o un espacio con dimensiones complicadas, este servicio es para ti. Fabricamos desde piezas artísticas en madera fina hasta complejos sistemas de organización en melamina de alto brillo, siempre enfocados en la exclusividad y la funcionalidad total.',
        image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop',
        benefits: [
            'Materiales premium de alta gama',
            'Herrajes con cierre suave de marcas líderes',
            'Garantía extendida por defectos de fabricación',
            'Resultados únicos que no encontrarás en tiendas'
        ]
    }
];
