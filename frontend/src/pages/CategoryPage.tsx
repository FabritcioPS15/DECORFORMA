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
      <main className="min-h-screen bg-[#061230] pt-20">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#22BDDD] hover:text-white font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <Reveal delay={0.1}>
            <h1 className="text-3xl font-extrabold text-white mt-6">
              Categoría no encontrada
            </h1>
          </Reveal>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFEFF]">
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] flex items-center overflow-hidden pt-20">
        {/* Background Image with subtle zoom effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.image})` }}
        />

        {/* Multi-layered Overlays for depth */}
        <div className="absolute inset-0 bg-[#0B2545]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061230]/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <Reveal delay={0.1}>
            <Breadcrumbs items={[{ label: category.label }]} />
          </Reveal>

          <div className="max-w-3xl">
            <Reveal delay={0.3}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                {category.label}
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-white/80 mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
                {category.description}
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en recibir información y cotizar mi proyecto de: ' + category.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-green-900/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-base group"
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
      <section className="relative -mt-12 z-20">
        <div className="max-w-6xl mx-auto px-5">
          {/* Glassmorphism Stats/Info Row */}
          <Reveal delay={0.6} y={0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5 border border-white">
              {[
                { label: 'Calidad', value: 'Pelíkano 18mm' },
                { label: 'Garantía', value: '2 Años Real' },
                { label: 'Tiempo', value: '7-12 Días' },
                { label: 'Entrega', value: 'Instalación Inc.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-xs font-bold text-[#1A8FBB] uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-[#0B2545]">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Reveal delay={0.1}>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
                    Galería de Inspiración
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-gray-500 mt-4 max-w-2xl text-lg">
                    Explora algunos de nuestros proyectos destacados y descubre cómo podemos personalizar tu espacio.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  {['Todos', 'Moderno', 'Minimalista', 'Canchero', 'Funcional'].map(
                    (chip) => (
                      <button
                        key={chip}
                        type="button"
                        className="text-sm font-bold px-5 py-2.5 rounded-xl bg-gray-100 text-gray-500 hover:bg-[#E8F6FB] hover:text-[#0F6E95] transition-all duration-200 active:scale-95"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">Próximamente más proyectos en esta categoría</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* "Why us?" Context for the category */}
      <section className="bg-[#0B2545] py-24 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay={0.2}>
              <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                ¿Por qué elegir <br />
                <span className="text-[#22BDDD]">Decorforma</span> para tu {category.label}?
              </h3>
              <p className="mt-8 text-white/70 text-lg leading-relaxed">
                No solo fabricamos muebles; creamos soluciones inteligentes que optimizan cada centímetro de tu hogar.
                Utilizamos los mejores materiales del mercado peruano y herrajes de alta durabilidad.
              </p>
              <div className="mt-12 space-y-6">
                {[
                  'Corte computarizado preciso (CNC)',
                  'Cantoneado con pegamento PUR (Resistente al agua)',
                  'Instalación técnica especializada',
                  'Post-venta y garantía real'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1A8FBB] flex items-center justify-center text-xs font-bold">✓</div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#22BDDD]/10 blur-3xl rounded-full" />
                <img
                  src={category.image}
                  alt="Detalle de acabado"
                  className="relative rounded-3xl shadow-2xl border border-white/10 grayscale-[30%] hover:grayscale-0 transition-all duration-700 h-[500px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
