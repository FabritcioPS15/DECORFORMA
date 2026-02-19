import { categories } from '../data/categories';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CatalogPage() {
    return (
        <main className="bg-[#061230] min-h-screen">
            {/* Catalog Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-40"
                        alt="Catálogo Decorforma"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061230]/80 via-transparent to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full">
                    <Reveal y={30}>

                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Nuestro <span className="text-[#22BDDD]">Catálogo</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Explora nuestras colecciones diseñadas para transformar cada rincón de tu hogar y oficina con estilo y precisión milimétrica.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, i) => (
                            <Reveal key={category.slug} delay={i * 0.1} y={30}>
                                <Link
                                    to={`/categoria/${category.slug}`}
                                    className="group relative block overflow-hidden rounded-[2rem] bg-[#0B2545] border border-white/5 aspect-[4/5]"
                                >
                                    <img
                                        src={category.image}
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                                        alt={category.label}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-transparent to-transparent opacity-80" />

                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#22BDDD] transition-colors">
                                            {category.label}
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {category.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-[#22BDDD] font-bold text-sm tracking-widest uppercase">
                                            Ver Colección
                                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Help CTA */}
            <section className="pb-32 px-5">
                <Reveal y={20} width="100%">
                    <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-white/5 border border-white/10 p-12 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
                        <p className="text-white/40 mb-8">Diseñamos cualquier tipo de mueble a medida basándonos en tus referencias.</p>
                        <Link
                            to="/servicios/personalizados"
                            className="text-[#22BDDD] font-bold hover:underline flex items-center justify-center gap-2"
                        >
                            Ver Muebles Personalizados
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
