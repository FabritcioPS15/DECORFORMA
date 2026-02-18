import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { categories } from '../data/categories';
import { WA_NUMBER, WA_MESSAGE } from '../data/site';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.categorySlug === slug);

  if (!category) {
    return (
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1A8FBB] hover:text-[#0F6E95] font-semibold"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-extrabold text-[#0B2545] mt-6">
            Categoría no encontrada
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#0B2545]/40" />
        <div className="relative max-w-6xl mx-auto px-5 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold"
          >
            <ArrowLeft size={18} />
            Inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-5">
            {category.label}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            {category.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-green-900/30 transition-all duration-200 hover:shadow-xl hover:scale-105 text-base"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
            Galería de inspiración
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl">
            Aquí irá tu catálogo por categoría (productos, variantes, precios,
            medidas). Por ahora dejamos una estructura lista tipo e-commerce.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Moderno', 'Minimalista', 'Clásico', 'Con iluminación', 'Compacto'].map(
              (chip) => (
                <button
                  key={chip}
                  type="button"
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-[#E8F6FB] text-[#0F6E95] hover:bg-[#1A8FBB] hover:text-white transition-colors"
                >
                  {chip}
                </button>
              )
            )}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(categoryProducts.length ? categoryProducts : products.slice(0, 6)).map(
              (p) => (
                <ProductCard
                  key={p.id}
                  title={p.title}
                  subtitle={p.subtitle}
                  image={p.image}
                  tags={p.tags}
                  priceFrom={p.priceFrom}
                  colorVariants={p.colorVariants}
                />
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
