import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { WA_NUMBER } from '../data/site';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Reveal } from '../components/Reveal';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.categorySlug === slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-white pt-48">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#22BDDD] hover:text-[#0B2545] font-black uppercase tracking-widest text-xs transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-black text-[#0B2545] mt-8 uppercase tracking-tighter">
              Categoría no encontrada
            </h1>
          </Reveal>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] flex items-center overflow-hidden pt-20 lg:pt-40">
        {/* Background Image with subtle zoom effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.image})` }}
        />

        {/* Multi-layered Overlays for depth - Adjusted to be lighter/neutral */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <Reveal delay={0.1}>
            <div className="mb-4">
              <Breadcrumbs items={[{ label: category.label }]} />
            </div>
          </Reveal>

          <div className="max-w-3xl">
            <Reveal delay={0.3}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0B2545] leading-none tracking-tighter uppercase mb-6">
                {category.label}
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-[#666] mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
                {category.description}
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en recibir información y cotizar mi proyecto de: ' + category.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#22BDDD] hover:bg-[#1A8FBB] text-white font-black px-10 py-5 rounded-2xl shadow-xl shadow-cyan-900/10 transition-all duration-300 hover:scale-105 active:scale-95 text-sm uppercase tracking-widest group"
                >
                  <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                  Cotizar mi Proyecto
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-5">
          {/* Glassmorphism Stats/Info Row */}
          <Reveal delay={0.6} y={0}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
              {[
                { label: 'Calidad', value: 'Pelíkano 18mm' },
                { label: 'Garantía', value: '2 Años Real' },
                { label: 'Tiempo', value: '7-12 Días' },
                { label: 'Entrega', value: 'Instalación Inc.' },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <p className="text-[10px] font-black text-[#22BDDD] uppercase tracking-[0.2em] mb-2">{item.label}</p>
                  <p className="text-xl font-black text-[#0B2545] uppercase tracking-tighter">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="py-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
              <div>
                <Reveal delay={0.1}>
                  <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">Portafolio</span>
                  <h2 className="text-4xl sm:text-6xl font-black text-[#0B2545] tracking-tighter uppercase leading-none">
                    Galería de <br /> <span className="text-gray-200">Inspiración</span>
                  </h2>
                </Reveal>
              </div>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  {['Todos', 'Moderno', 'Minimalista', 'Premium', 'Funcional'].map(
                    (chip) => (
                      <button
                        key={chip}
                        type="button"
                        className="text-[11px] font-black px-6 py-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-[#0B2545] hover:text-white transition-all duration-300 uppercase tracking-widest"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {(categoryProducts.length ? categoryProducts : products.slice(0, 6)).map(
                (p, index) => (
                  <Reveal key={p.id} delay={0.1 + index * 0.05} y={30}>
                    <ProductCard
                      title={p.title}
                      subtitle={p.subtitle}
                      image={p.image}
                      tags={p.tags}
                      priceFrom={p.priceFrom}
                      colorVariants={p.colorVariants}
                    />
                  </Reveal>
                )
              )}
            </div>

            {/* Empty state or encouragement */}
            {categoryProducts.length === 0 && (
              <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100 mt-16">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Próximamente más proyectos en esta categoría</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* "Why us?" Section - Changed to Light/Neutral Theme */}
      <section className="bg-gray-50 py-32 border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal delay={0.2}>
              <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">Ventaja competitiva</span>
              <h3 className="text-4xl sm:text-6xl font-black text-[#0B2545] leading-none tracking-tighter uppercase mb-8">
                ¿POR QUÉ ELEGIR <br />
                <span className="text-[#22BDDD]">DECORFORMA?</span>
              </h3>
              <p className="mt-8 text-[#666] text-lg leading-relaxed max-w-xl">
                No solo fabricamos muebles; creamos soluciones inteligentes que optimizan cada centímetro de tu hogar utilizando los mejores materiales del mercado.
              </p>
              <div className="mt-12 space-y-8">
                {[
                  'Corte computarizado preciso (CNC)',
                  'Cantoneado con pegamento PUR (Resistente al agua)',
                  'Instalación técnica especializada',
                  'Post-venta y garantía real'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-8 h-8 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#22BDDD] font-black transition-all group-hover:bg-[#22BDDD] group-hover:text-white group-hover:shadow-cyan-900/10">✓</div>
                    <span className="text-[#0B2545] font-black uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-10 bg-white/50 blur-[100px] rounded-full" />
                <img
                  src={category.image}
                  alt="Detalle de acabado"
                  className="relative rounded-[3rem] shadow-2xl border border-gray-200 h-[600px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
