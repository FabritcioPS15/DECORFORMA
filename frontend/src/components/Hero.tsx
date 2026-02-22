import { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp, FaRulerCombined } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const slides = [
  {
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Cocinas Integrales Modernas y Funcionales',
    subtitle: 'Distribución Optimizada',
    description: 'Diseños funcionales con acabados premium. Aprovecha cada espacio de tu cocina con estilo y elegancia.',
    cta1: 'Cotizar ahora',
    cta2: 'Ver Galería',
    stats: [
      { value: '+500', label: 'Proyectos entregados' },
      { value: '8+', label: 'Años de experiencia' },
      { value: '100%', label: 'Calidad Premium' },
    ]
  },
  {
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Closets a Medida de Alta Gama',
    subtitle: 'Organización Inteligente',
    description: 'Aprovecha cada centímetro con módulos, cajones y herrajes a tu gusto. Soluciones de almacenamiento premium.',
    cta1: 'Diseñar mi closet',
    cta2: 'Ver Modelos',
    stats: [
      { value: 'Custom', label: '100% a medida' },
      { value: 'Soft', label: 'Cierre suave' },
      { value: 'Top', label: 'Acabados' },
    ]
  },
  {
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Centros de Entretenimiento Vanguardistas',
    subtitle: 'Estilo y Orden',
    description: 'Paneles, repisas y almacenamiento oculto para un living ordenado. El complemento perfecto para tu sala.',
    cta1: 'Pedir Cotización',
    cta2: 'Ver Diseños',
    stats: [
      { value: 'Moderno', label: 'Minimalista' },
      { value: 'Led', label: 'Iluminación' },
      { value: 'Pro', label: 'Instalación' },
    ]
  },
  {
    image: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Oficinas Ejecutivas que Inspiran Exito',
    subtitle: 'Diseño Corporativo',
    description: 'Espacios de trabajo con personalidad. Escritorios, estantes y mobiliario diseñado para la excelencia profesional.',
    cta1: 'Equipar Oficina',
    cta2: 'Casos de Éxito',
    stats: [
      { value: '+120', label: 'Empresas' },
      { value: 'Elite', label: 'Acabados' },
      { value: 'Ergo', label: 'Diseño' },
    ]
  },
  {
    image: 'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Dormitorios Juveniles Creativos',
    subtitle: 'Espacios Propios',
    description: 'Camas, clósets y estaciones de estudio pensadas para crecer contigo. Funcionalidad y diseño en armonía.',
    cta1: 'Ver Proyectos',
    cta2: 'Solicitar Planos',
    stats: [
      { value: 'Kids', label: 'Seguro' },
      { value: 'Color', label: 'Variedad' },
      { value: 'Smart', label: 'Módulos' },
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section
      id="hero"
      className="relative h-screen h-[100dvh] flex items-center overflow-hidden bg-[#0B2545]"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/95 via-[#0B2545]/80 to-transparent" />
          <div className="absolute inset-0 bg-[#0B2545]/20 backdrop-blur-[1px]" />
        </div>
      ))}

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center pt-24 pb-12 mt-4 md:mt-0"
      >
        <div className="max-w-3xl">
          <div
            key={`subtitle-${currentSlide}`}
            className={`inline-flex items-center gap-2 bg-[#1A8FBB]/20 border border-[#1A8FBB]/40 text-[#22BDDD] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22BDDD] animate-pulse" />
            {slides[currentSlide].subtitle}
          </div>

          <h1
            key={`title-${currentSlide}`}
            className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {slides[currentSlide].title.split(' ').map((word, i) =>
              word.toLowerCase() === 'transforman' || word.toLowerCase() === 'corporativo' || word.toLowerCase() === 'durabilidad' ? (
                <span key={i} className="text-[#22BDDD]"> {word} </span>
              ) : ` ${word} `
            )}
          </h1>

          <p
            key={`desc-${currentSlide}`}
            className={`text-lg text-white/80 leading-relaxed mb-10 max-w-2xl transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {slides[currentSlide].description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <a
              href="https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-105 group text-sm"
            >
              <FaWhatsapp className="group-hover:rotate-12 transition-transform" size={20} />
              {slides[currentSlide].cta1}
            </a>
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
            >
              <FaRulerCombined size={18} />
              {slides[currentSlide].cta2}
            </a>
          </div>

          <div
            className={`flex flex-wrap items-center gap-10 mt-16 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {slides[currentSlide].stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 border-l-2 border-[#22BDDD]/30 pl-4">
                <span className="text-3xl font-black text-[#22BDDD] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-8 bottom-12 z-20 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-[#22BDDD]' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      <a
        href="#beneficios"
        className="absolute bottom-8 left-8 text-white/30 hover:text-[#22BDDD] transition-colors animate-bounce z-10 hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-widest vertical-text"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span>Explorar</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

