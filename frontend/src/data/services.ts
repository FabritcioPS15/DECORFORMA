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
        slug: 'diseno-interiores',
        label: 'Diseño de interiores',
        description: 'Visualiza tu proyecto con renderizado 3D de alta gama.',
        longDescription: 'Creamos conceptos únicos que combinan estética, funcionalidad y confort para transformar tu espacio en una experiencia. Nuestro enfoque se centra en la armonía de los elementos y la optimización del flujo espacial.',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
        benefits: [
            'Concepto y moodboard personalizado',
            'Distribución inteligente de espacios',
            'Selección de materiales y acabados premium',
            'Visualización fotorrealista 3D'
        ]
    },
    {
        slug: 'remodelacion',
        label: 'Remodelación',
        description: 'Transformación total de espacios con ejecución impecable.',
        longDescription: 'Desde cambios estructurales hasta renovaciones estéticas, gestionamos todo el proceso de remodelación. Nos especializamos en dar nueva vida a espacios antiguos manteniendo la integridad estructural y elevando el valor de la propiedad.',
        image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600',
        benefits: [
            'Gestión integral de obra',
            'Cronograma de ejecución detallado',
            'Personal técnico especializado',
            'Garantía de calidad en acabados'
        ]
    },
    {
        slug: 'decoracion',
        label: 'Decoración',
        description: 'Curaduría de elementos que definen tu personalidad.',
        longDescription: 'Seleccionamos cada pieza, textura y color para que hablen de ti. Nuestro servicio de decoración se enfoca en los detalles finales que convierten una casa en un hogar, cuidando siempre el equilibrio visual y la elegancia.',
        image: 'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1600',
        benefits: [
            'Curaduría de mobiliario y arte',
            'Diseño de iluminación ambiental',
            'Paleta de colores y textiles',
            'Styling final de espacios'
        ]
    },
    {
        slug: 'asesoria',
        label: 'Asesoría profesional',
        description: 'Guía experta para decisiones de diseño y construcción.',
        longDescription: 'Te acompañamos en la toma de decisiones críticas para tu proyecto. Ya sea que necesites validar planos, elegir materiales o planificar una inversión inmobiliaria, nuestra experiencia técnica está a tu servicio.',
        image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600',
        benefits: [
            'Análisis de viabilidad técnica',
            'Asesoría en materiales y costos',
            'Revisión de planos arquitectónicos',
            'Planificación estratégica de proyectos'
        ]
    }
];
