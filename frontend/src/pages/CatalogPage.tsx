import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { products } from '../data/products';

export default function CatalogPage() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Muebles', 'Decoración', 'Iluminación', 'Textiles', 'Acabados', 'Accesorios'];

  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.categorySlug.toLowerCase() === filter.toLowerCase());

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden bg-decor-navy">
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-decor-navy flex items-center px-6 lg:px-24 relative z-10">
            <Reveal x={-30} duration={0.8}>
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-7xl font-medium font-serif text-white leading-tight mb-6">
                  Catálogo
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-light">
                  Descubre nuestra selección de productos y materiales para crear espacios únicos.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:block w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Catálogo Decorforma" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-decor-navy/40 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-gray-100 sticky top-[72px] bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-decor-accent text-white shadow-lg shadow-decor-accent/20' 
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-gray-100 relative group">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-decor-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-bold text-decor-navy mb-1 tracking-tight group-hover:text-decor-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    {product.categorySlug}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <div className="mt-24 text-center">
            <Reveal y={20}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-decor-accent text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl shadow-decor-accent/20"
                >
                    Cargar más productos
                </motion.button>
            </Reveal>
        </div>
      </section>
    </main>
  );
}
