import { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp, FaRulerCombined } from 'react-icons/fa';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const slides = [
  {
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Cocinas de Lujo que Transforman tu Hogar',
    description: 'Creamos espacios funcionales con acabados premium en melamina. Aprovecha cada rincón con estilo y elegancia excepcional.',
    cta1: 'Cotizar Proyecto',
    cta2: 'Ver Catálogo',
    stats: [
      { value: '+500', label: 'Proyectos' },
      { value: '100%', label: 'Garantía' },
    ]
  },
  {
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Closets a Medida con Acabados Premium',
    description: 'Soluciones inteligentes de almacenamiento. Diseños personalizados que combinan durabilidad y estética moderna.',
    cta1: 'Diseñar ahora',
    cta2: 'Modelos 2024',
    stats: [
      { value: 'Custom', label: 'A Medida' },
      { value: 'Elite', label: 'Herrajes' },
    ]
  },
  {
    image: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Oficinas con Estilo Corporativo y Serio',
    description: 'Mobiliario diseñado para inspirar éxito. Escritorios y estantes que elevan la productividad de tu equipo.',
    cta1: 'Equipar Oficina',
    cta2: 'Nuestros Clientes',
    stats: [
      { value: 'Pro', label: 'Workspaces' },
      { value: 'Design', label: 'Planning' },
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:h-screen flex items-center overflow-hidden bg-gray-900"
    >
      {/* Background with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Overlays for readability and branding */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-8xl font-medium font-serif text-white leading-[1.1] mb-4 tracking-tight"
            >
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={word === 'Transforman' || word === 'Experiencias' || word === 'Premium' ? 'text-decor-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl font-light"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#proyectos"
                className="bg-decor-accent text-white px-10 py-5 rounded-none font-bold transition-all shadow-xl shadow-decor-accent/20 flex items-center gap-2"
              >
                {slides[currentSlide].cta1}
                <ArrowDown size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                href="/catalogo"
                className="border border-white/30 text-white px-10 py-5 rounded-none font-bold backdrop-blur-sm transition-all"
              >
                {slides[currentSlide].cta2}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10"
            >
              {slides[currentSlide].stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</p>
                  <span className="text-decor-accent text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-10 bottom-10 z-20 hidden md:flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-none border border-white/10 bg-white/5 backdrop-blur-md text-white/50 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center group"
        >
          <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-none border border-white/10 bg-white/5 backdrop-blur-md text-white/50 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center group"
        >
          <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-none transition-all duration-500 ${
              index === currentSlide ? 'w-10 bg-decor-accent' : 'w-4 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        href="#beneficios"
        className="absolute bottom-10 left-10 text-white/30 hover:text-white transition-colors animate-bounce hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Explorar
        </span>
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

