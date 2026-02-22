import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <main>
      <Hero />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex items-end justify-between gap-6 mb-10">
            <Reveal>
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
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, idx) => (
              <Reveal key={c.slug} delay={0.1 * idx}>
                <Link
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FC]">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex items-end justify-between gap-6 mb-10">
            <Reveal>
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
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, idx) => (
              <Reveal key={p.id} delay={0.1 * idx}>
                <ProductCard
                  title={p.title}
                  subtitle={p.subtitle}
                  image={p.image}
                  tags={p.tags}
                  priceFrom={p.priceFrom}
                  colorVariants={p.colorVariants}
                />
              </Reveal>
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
