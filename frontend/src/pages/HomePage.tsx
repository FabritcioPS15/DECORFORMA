import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const gallery = [
  {
    title: 'Cocina integral moderna',
    description: 'Diseños funcionales con acabados premium y distribución optimizada.',
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Closet a medida',
    description: 'Aprovecha cada centímetro: módulos, cajones y herrajes a tu gusto.',
    image:
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Centro de entretenimiento',
    description: 'Paneles, repisas y almacenamiento oculto para un living ordenado.',
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Oficina ejecutiva',
    description: 'Espacios de trabajo con personalidad: escritorios, estantes y más.',
    image:
      'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Dormitorio juvenil',
    description: 'Camas, clósets y estaciones de estudio pensadas para crecer contigo.',
    image:
      'https://images.pexels.com/photos/6312023/pexels-photo-6312023.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function HomePage() {
  const featured = products.slice(0, 6);

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroFading, setHeroFading] = useState(false);
  const [heroPaused, setHeroPaused] = useState(false);
  const [heroLocked, setHeroLocked] = useState(false);

  const heroItem = gallery[heroIndex % gallery.length];

  const heroThumbs = useMemo(() => {
    return gallery.filter((_, idx) => idx !== heroIndex).slice(0, 4);
  }, [heroIndex]);

  useEffect(() => {
    if (gallery.length <= 1) return;

    if (heroPaused) return;

    let timeout: number | undefined;
    const interval = window.setInterval(() => {
      setHeroFading(true);
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setHeroIndex((v) => (v + 1) % gallery.length);
        setHeroFading(false);
      }, 350);
    }, 6500);

    return () => {
      window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [heroPaused]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setHeroLocked(false);
      setHeroPaused(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const setHeroByIndex = (nextIndex: number) => {
    if (nextIndex === heroIndex) return;
    setHeroFading(true);
    window.setTimeout(() => {
      setHeroIndex(((nextIndex % gallery.length) + gallery.length) % gallery.length);
      setHeroFading(false);
    }, 250);
  };

  const immersiveActive = heroLocked || heroFading;

  return (
    <main>
      <section
        className="relative overflow-hidden min-h-[100svh] lg:min-h-screen pt-24 pb-12 flex items-center"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => !heroLocked && setHeroPaused(false)}
      >
        {/* Background Layer with Framer Motion for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.img
            key={heroItem.image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: immersiveActive ? 1.12 : 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={heroItem.image}
            alt={heroItem.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[#0B2545]/60 md:bg-[#0B2545]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#061230]/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Main Text Content */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <Reveal y={20}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A8FBB]/20 border border-[#1A8FBB]/30 text-[#22BDDD] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
                  Decoración de Vanguardia
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                  Muebles de melamina <br className="hidden md:block" />
                  <span className="text-[#22BDDD]">a tu medida</span>
                </h1>
                <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Diseñamos y fabricamos espacios inteligentes que reflejan tu estilo. Calidad premium con tecnología de punta.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    to="/catalogo"
                    className="w-full sm:w-auto bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-[#1A8FBB]/20 flex items-center justify-center gap-2 group"
                  >
                    Ver Catálogo
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/quienes-somos"
                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl border border-white/10 transition-all backdrop-blur-md"
                  >
                    Nuestra Historia
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Showcase Visuals */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Main Visual Container */}
                <div
                  className={`${heroLocked ? 'lg:col-span-12' : 'lg:col-span-7'
                    } rounded-[2.5rem] overflow-hidden relative group transition-all duration-700 ease-out shadow-2xl shadow-black/40 border border-white/10 h-[380px] md:h-[500px] lg:h-[560px]`}
                  onClick={() => heroLocked && setHeroLocked(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={heroItem.image}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={heroItem.image}
                      alt={heroItem.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={heroItem.title}
                    >
                      <h2 className="text-white text-xl md:text-3xl font-extrabold mb-2">
                        {heroItem.title}
                      </h2>
                      <p className="text-white/60 text-sm md:text-base max-w-sm">
                        {heroItem.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Mobile Pagination Dots */}
                  <div className="lg:hidden absolute top-6 right-8 flex gap-2">
                    {gallery.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === heroIndex % gallery.length ? 'bg-[#22BDDD] w-4' : 'bg-white/30'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop Thumbnails (Hidden on Mobile) */}
                <div className={`${heroLocked ? 'hidden' : 'hidden lg:grid col-span-5 grid-cols-2 gap-4'}`}>
                  {heroThumbs.map((item) => {
                    const idx = gallery.findIndex((g) => g.title === item.title);
                    return (
                      <button
                        key={item.title}
                        type="button"
                        className="rounded-[2rem] overflow-hidden relative text-left transition-all duration-500 hover:scale-[1.03] active:scale-95 group border border-white/5"
                        onClick={() => {
                          setHeroByIndex(idx);
                          setHeroLocked(true);
                          setHeroPaused(true);
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full aspect-square object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-[11px] font-bold uppercase tracking-wider">
                            {item.title}
                          </h3>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
                Categorías
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2">
                Elige tu tipo de mueble
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl">
                Entra a una categoría para ver ejemplos, estilos, medidas y dejar
                tu solicitud lista para cotización.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/categoria/${c.slug}`}
                className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={c.image}
                    alt={c.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-xl font-extrabold">{c.label}</h3>
                    <p className="text-white/75 text-sm mt-1 line-clamp-2">
                      {c.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="text-[#0B2545] font-semibold">Ver colección</span>
                  <span className="w-10 h-10 rounded-full bg-[#E8F6FB] group-hover:bg-[#1A8FBB] flex items-center justify-center transition-colors">
                    <ArrowRight
                      size={18}
                      className="text-[#1A8FBB] group-hover:text-white transition-colors"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FC]">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
                Destacados
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2">
                Inspiración para tu próximo proyecto
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl">
                Estos son ejemplos. Cuando tengas tu catálogo real, aquí irán tus
                productos con fotos, medidas y variantes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                subtitle={p.subtitle}
                image={p.image}
                tags={p.tags}
                priceFrom={p.priceFrom}
                colorVariants={p.colorVariants}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              ¿Quieres ver más? Entra a una categoría para navegar como e-commerce.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
