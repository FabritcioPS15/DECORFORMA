import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Search, ChevronDown, Check } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { products } from '../data/products';
import { categories as siteCategories } from '../data/categories';

import SEO from '../components/SEO';

export default function CatalogPage() {
  const [filter, setFilter] = useState('Todos');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Extract unique slugs or use site categories directly
  const filterOptions = [{label: 'Todos', slug: 'Todos'}, ...siteCategories.map(c => ({label: c.label, slug: c.slug}))];

  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.categorySlug.toLowerCase() === filter.toLowerCase());

  return (
    <main className="bg-white min-h-screen">
      <SEO 
        title="Catálogo de Productos" 
        description="Navega por nuestro catálogo completo de mobiliario, acabados y decoración para encontrar las piezas perfectas para tu proyecto."
      />
      {/* Header Section - Centered (Architecture Style) */}
      <section className="relative h-[35vh] min-h-[320px] pt-24 flex items-center justify-center overflow-hidden bg-decor-navy text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Catálogo Decorforma" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6">
          <Reveal y={20} duration={0.8}>
            <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-8">
              Catálogo
            </h1>
            <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide">
              Materiales y mobiliario curado para elevar tus proyectos al siguiente nivel.
            </p>
            <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Filter Section - Square Style */}
      <section className="py-4 md:py-6 border-b border-gray-100 sticky top-[72px] bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 flex justify-center w-full relative">
          <Reveal y={10} width="100%">
            <div className="flex flex-col items-center justify-center w-full relative">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px]">
                {/* Trigger Button */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between gap-4 w-full px-6 py-4 bg-white border border-gray-200 text-decor-navy font-bold text-xs uppercase tracking-widest shadow-sm hover:border-gray-300 transition-colors"
                >
                  <span>{filterOptions.find(o => o.slug === filter)?.label || 'Todos'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-2xl z-50 rounded-none flex flex-col"
                    >
                    {filterOptions.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => {
                          setFilter(cat.slug);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-6 py-4 text-xs font-bold uppercase tracking-widest text-left transition-colors border-b border-gray-50 last:border-0 ${
                          filter === cat.slug 
                            ? 'bg-decor-navy text-white' 
                            : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-decor-navy'
                        }`}
                      >
                        {cat.label}
                        {filter === cat.slug && <Check size={16} />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="pt-8 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-none overflow-hidden mb-6 border border-gray-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-decor-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white flex items-center justify-center text-decor-navy opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl">
                     <ChevronRight size={18} />
                  </div>
                </div>
                <div className="px-1 text-center">
                  <p className="text-decor-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {product.categorySlug}
                  </p>
                  <h3 className="text-lg font-serif text-decor-navy mb-1 tracking-wide group-hover:text-decor-accent transition-colors leading-tight">
                    {product.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button - Square */}
        <div className="mt-24 text-center">
            <Reveal y={20}>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-decor-navy text-white px-14 py-5 rounded-none font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-decor-navy/10"
                >
                    Cargar más productos
                </motion.button>
            </Reveal>
        </div>
      </section>

      {/* Final CTA Banner - Square and Centered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-decor-navy p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center rounded-none shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-decor-navy via-transparent to-black/40" />
            
            <div className="relative z-10 max-w-3xl">
              <Reveal y={30}>
                <h2 className="text-4xl md:text-7xl font-medium font-serif text-white mb-8 leading-tight">
                  Diseña con <br /> <span className="text-decor-accent italic">lo mejor.</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                  ¿Buscas algo específico para tu proyecto? Solicita nuestro catálogo completo 2026 en PDF.
                </p>
                <motion.a 
                  href="/contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 bg-white text-decor-navy px-12 py-5 rounded-none font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-decor-accent hover:text-white transition-all duration-300"
                >
                  Contáctanos
                  <ArrowRight size={18} />
                </motion.a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
