import { categories } from '../data/categories';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function CatalogPage() {
    return (
        <main className="bg-white min-h-screen pt-32 lg:pt-48 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <header className="mb-20 text-center lg:text-left max-w-4xl">
                    <Reveal y={20}>
                        <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
                            Explora nuestra colección
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-[#0B2545] tracking-tighter leading-none mb-8">
                            CATÁLOGO <br />
                            <span className="text-gray-200">2026</span>
                        </h1>
                        <p className="text-[#666] text-lg md:text-xl leading-relaxed max-w-2xl">
                            Diseños vanguardistas que optimizan cada centímetro de tu hogar y oficina.
                            Calidad premium en melamina y acabados de lujo.
                        </p>
                    </Reveal>
                </header>

                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, i) => (
                        <Reveal key={category.slug} delay={i * 0.1} y={30}>
                            <Link
                                to={`/categoria/${category.slug}`}
                                className="group relative block aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1 }}
                                    src={category.image}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                    alt={category.label}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="mb-4 text-[#22BDDD] flex items-center gap-2">
                                        <category.icon size={20} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Colección {category.label}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                                        {category.label}
                                    </h3>
                                    <div className="flex items-center gap-2 text-white/50 group-hover:text-[#22BDDD] font-black text-xs uppercase tracking-[0.2em] transition-colors">
                                        Ver Proyectos <IoArrowForward className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </section>

                {/* Global Catalog Link - Full Width Experience */}
                <section className="mt-32 w-full">
                    <Reveal y={20} width="100%">
                        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-24 text-center border border-gray-100 relative overflow-hidden group">
                            {/* Visual Detail */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22BDDD]/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-black text-[#0B2545] mb-6 uppercase tracking-tight leading-none">
                                    TU HOGAR <span className="text-gray-300">A UN CLIC</span>
                                </h2>
                                <p className="text-[#666] mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                                    Obtén nuestro catálogo interactivo 2026 con todas las medidas, texturas y
                                    combinaciones disponibles para transformar tu espacio.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center bg-[#0B2545] text-white hover:bg-[#1A8FBB] font-black px-16 py-6 rounded-2xl transition-all hover:scale-105 uppercase tracking-widest text-sm shadow-xl shadow-black/10"
                                >
                                    Descargar Catálogo Completo (PDF)
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </section>
            </div>
        </main>
    );
}
