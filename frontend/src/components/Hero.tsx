import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowForward, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'COCINAS QUE INSPIRAN',
    subtitle: 'DISEÑO Y FUNCIONALIDAD',
    description: 'Transformamos tu cocina en un espacio moderno y eficiente con acabados de primera calidad.',
    link: '/servicios',
    cta: 'Nuestros Servicios',
    accent: 'INSPIRAN'
  },
  {
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'CLOSETS A TU MEDIDA',
    subtitle: 'ORGANIZACIÓN INTELIGENTE',
    description: 'Aprovecha cada centímetro con soluciones de almacenamiento personalizadas y elegantes.',
    link: '/catalogo',
    cta: 'Ver Catálogo',
    accent: 'MEDIDA'
  },
  {
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'CENTROS DE ENTRETENIMIENTO',
    subtitle: 'ESTILO EN TU SALA',
    description: 'Diseños vanguardistas para tu sala, integrando tecnología y estética en un solo lugar.',
    link: '/catalogo',
    cta: 'Ver Proyectos',
    accent: 'ENTRETENIMIENTO'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0A0A0B]">
      {/* Background Carousel */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061230]/95 via-[#061230]/70 to-transparent" />
          <div className="absolute inset-0 bg-[#061230]/20 backdrop-blur-[1px]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode='wait'>
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-[#22BDDD] text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] mb-4 lg:mb-6 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                {slides[currentSlide].subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-[6.5rem] font-black text-white leading-[0.85] mb-6 lg:mb-8 tracking-tighter uppercase italic">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className={slides[currentSlide].accent.includes(word) ? 'text-[#22BDDD] not-italic block' : 'block'}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-white/60 text-sm lg:text-xl max-w-md leading-relaxed mb-10 lg:mb-12 font-medium">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Link
                  to={slides[currentSlide].link}
                  className="group inline-flex items-center justify-center gap-4 bg-[#22BDDD] hover:bg-[#1A8FBB] text-white font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 uppercase tracking-widest text-[12px] lg:text-sm"
                >
                  {slides[currentSlide].cta}
                  <IoArrowForward className="group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls - Responsive layout */}
      <div className="absolute right-6 lg:right-12 bottom-10 lg:bottom-12 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 lg:p-4 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all hover:border-[#22BDDD]/50 backdrop-blur-md"
          aria-label="Anterior"
        >
          <IoChevronBack size={18} className="lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 lg:p-4 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all hover:border-[#22BDDD]/50 backdrop-blur-md"
          aria-label="Siguiente"
        >
          <IoChevronForward size={18} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Indicators - Responsive hidden on small mobile if needed or adjusted */}
      <div className="absolute bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 lg:h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-8 lg:w-12 bg-[#22BDDD]' : 'w-2 lg:w-4 bg-white/20'
              }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
