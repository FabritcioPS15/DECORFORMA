import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ChevronRight } from 'lucide-react';
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
      <main className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-5 py-16 text-center">
          <Reveal delay={0.1}>
            <h1 className="text-3xl font-serif text-decor-navy mt-6 mb-8">
              Categoría no encontrada
            </h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-decor-navy text-white px-8 py-3 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-decor-accent transition-colors shadow-xl"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </Reveal>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Immersive Hero Section - Centered (Architecture Style) */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-decor-navy text-center">
        <div className="absolute inset-0">
          <img 
            src={category.image} 
            alt={category.label} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center">
          <Reveal delay={0.1}>
            <Breadcrumbs items={[{ label: category.label }]} />
          </Reveal>
          
          <Reveal delay={0.3}>
            <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-6 mt-4">
              {category.label}
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl">
              {category.description}
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
             <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-10" />
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 pt-16 pb-24 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center w-full mb-20">
            <Reveal delay={0.6} y={0} width="100%">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 bg-white shadow-sm w-full">
                {[
                  { label: 'Calidad', value: 'Pelíkano 18mm' },
                  { label: 'Garantía', value: '2 Años Real' },
                  { label: 'Tiempo', value: '7-12 Días' },
                  { label: 'Entrega', value: 'Instalación Inc.' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center text-center p-8 border-b md:border-b-0 border-r-0 md:border-r border-gray-100 last:border-0">
                    <p className="text-[10px] font-black text-decor-accent uppercase tracking-[0.3em] mb-2">{item.label}</p>
                    <p className="text-lg font-serif text-decor-navy">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mb-16 text-center flex flex-col items-center justify-center w-full">
             <Reveal delay={0.1} width="100%">
               <div className="flex justify-center">
                 <h2 className="text-3xl sm:text-5xl font-serif text-decor-navy mb-4 italic text-center">
                   Galería de Inspiración
                 </h2>
               </div>
             </Reveal>
             <Reveal delay={0.2} width="100%">
               <div className="flex justify-center">
                 <p className="text-gray-500 max-w-2xl text-lg font-light text-center mx-auto">
                   Explora algunos de nuestros proyectos destacados y descubre cómo podemos personalizar tu espacio.
                 </p>
               </div>
             </Reveal>
          </div>

          {/* Product Grid - Square Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-12">
            {(categoryProducts.length ? categoryProducts : products.slice(0, 6)).map(
              (p, index) => (
                <Reveal key={p.id} delay={0.1 + index * 0.05} y={20}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] rounded-none overflow-hidden mb-6 border border-gray-100 relative">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-decor-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white flex items-center justify-center text-decor-navy opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl">
                         <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="px-1 text-center">
                      <p className="text-decor-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                        {p.categorySlug}
                      </p>
                      <h3 className="text-lg font-serif text-decor-navy mb-1 tracking-wide group-hover:text-decor-accent transition-colors leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              )
            )}
          </div>

          {/* Empty state */}
          {categoryProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 border border-gray-100 rounded-none mt-10">
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Próximamente más proyectos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* "Why us?" Context - Square & Architecture style */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay={0.2}>
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
                <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Garantía de Calidad</span>
                <h3 className="text-4xl sm:text-5xl font-serif text-decor-navy leading-tight">
                  ¿Por qué elegirnos para tu <br />
                  <span className="italic text-decor-accent">{category.label}?</span>
                </h3>
                <p className="mt-8 text-gray-500 text-lg leading-relaxed font-light">
                  No solo fabricamos muebles; creamos soluciones inteligentes que optimizan cada centímetro de tu hogar.
                  Utilizamos los mejores materiales del mercado peruano y herrajes de alta durabilidad.
                </p>
                <div className="mt-12 space-y-6 w-full max-w-md">
                  {[
                    'Corte computarizado preciso (CNC)',
                    'Cantoneado con pegamento PUR (Resistente al agua)',
                    'Instalación técnica especializada',
                    'Post-venta y garantía real'
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                      <div className="w-2 h-2 rounded-none bg-decor-accent flex-shrink-0 mt-1.5" />
                      <span className="text-decor-navy font-medium text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative border border-gray-100 p-2 bg-white rounded-none shadow-sm">
                <img
                  src={category.image}
                  alt="Detalle de acabado"
                  className="rounded-none shadow-none grayscale-[20%] hover:grayscale-0 transition-all duration-700 h-[550px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA Banner - Square and Centered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-decor-navy p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center rounded-none shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-decor-navy via-transparent to-black/40" />
            
            <div className="relative z-10 max-w-3xl">
              <Reveal y={30}>
                <h2 className="text-4xl md:text-7xl font-medium font-serif text-white mb-8 leading-tight">
                  Lleva tu {category.label} al <br /> <span className="text-decor-accent italic">siguiente nivel.</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                  Solicita una cotización sin compromiso y descubre cómo podemos hacer realidad tu visión.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en recibir información y cotizar mi proyecto de: ' + category.label)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-white text-decor-navy px-12 py-5 rounded-none font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                  >
                    Cotizar por WhatsApp
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
