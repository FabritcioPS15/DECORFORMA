import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
        className="relative overflow-hidden min-h-screen pt-24 pb-12 flex items-center"
        onMouseEnter={() => {
          setHeroPaused(true);
        }}
        onMouseLeave={() => {
          if (heroLocked) return;
          setHeroPaused(false);
        }}
        onFocusCapture={() => {
          setHeroPaused(true);
        }}
        onBlurCapture={() => {
          if (heroLocked) return;
          setHeroPaused(false);
        }}
      >
        <img
          src={heroItem.image}
          alt={heroItem.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
            immersiveActive ? 'scale-[1.12]' : 'scale-[1.03]'
          } ${heroFading ? 'opacity-60' : 'opacity-100'}`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0B2545]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Muebles de melamina <span className="text-[#22BDDD]">a medida</span>
              </h1>
              <p className="text-white/70 mt-4 text-lg leading-relaxed">
                Explora nuestra galería y elige una categoría. Cada página está lista
                para convertirse en tu catálogo tipo e-commerce.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                <div
                  className={`${
                    immersiveActive
                      ? 'sm:col-span-2 lg:col-span-12'
                      : 'lg:col-span-7'
                  } rounded-3xl overflow-hidden relative group cursor-pointer transition-all duration-500 ease-out`}
                  onClick={() => {
                    if (!heroLocked) return;
                    setHeroLocked(false);
                    setHeroPaused(false);
                  }}
                  aria-label={
                    heroLocked
                      ? 'Cerrar vista inmersiva'
                      : 'Vista inmersiva (pasa el mouse o selecciona una miniatura)'
                  }
                >
                  <img
                    src={heroItem.image}
                    alt={heroItem.title}
                    className={`w-full object-cover transition-all duration-700 ease-out ${
                      immersiveActive
                        ? 'h-[520px] sm:h-[600px] lg:h-[620px]'
                        : 'h-[420px] sm:h-[540px] lg:h-[560px]'
                    } ${
                      heroFading ? 'opacity-60 scale-[1.02]' : 'opacity-100 scale-[1.08]'
                    } group-hover:scale-[1.14]`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/80 text-sm">Destacado</p>
                    <h2 className="text-white text-2xl font-extrabold">
                      {heroItem.title}
                    </h2>
                    <p className="text-white/75 text-sm mt-2 max-w-md leading-relaxed">
                      {heroItem.description}
                    </p>
                    {heroLocked && (
                      <p className="text-white/70 text-xs mt-3">
                        Click para cerrar
                      </p>
                    )}
                  </div>
                </div>

                <div className={heroLocked ? 'hidden' : 'lg:col-span-5 grid grid-cols-2 gap-4'}>
                  {heroThumbs.map((item) => {
                    const idx = gallery.findIndex((g) => g.title === item.title);

                    return (
                      <button
                        key={item.title}
                        type="button"
                        className="rounded-3xl overflow-hidden relative text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-all duration-500 ease-out"
                        onClick={() => {
                          setHeroByIndex(idx);
                          setHeroLocked(true);
                          setHeroPaused(true);
                        }}
                        onMouseEnter={() => {
                          setHeroPaused(true);
                        }}
                        onMouseLeave={() => {
                          if (heroLocked) return;
                          setHeroPaused(false);
                        }}
                        aria-label={`Ver ${item.title}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[200px] sm:h-[240px] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-sm font-bold leading-tight">
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
