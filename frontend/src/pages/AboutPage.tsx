import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Target, Eye, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage() {
    const values = [
        { title: 'Misión', desc: 'Crear espacios que mejoren la calidad de vida de nuestros clientes a través del diseño funcional.', icon: Target },
        { title: 'Visión', desc: 'Ser el estudio referente en diseño y construcción en Perú por nuestra innovación y calidad técnica.', icon: Eye },
        { title: 'Pasión', desc: 'Amamos lo que hacemos, y eso se refleja en la precisión de cada detalle arquitectónico.', icon: Heart },
        { title: 'Compromiso', desc: 'Acompañamos a nuestros clientes en cada etapa, desde el plano hasta la entrega final.', icon: ShieldCheck },
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Header Section - Centered (Architecture Style) */}
            <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-decor-navy text-center">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                        alt="Nosotros Decorforma" 
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
                </div>
                
                <div className="relative z-10 max-w-3xl px-6">
                    <Reveal y={20} duration={0.8}>
                        <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-8">
                            Nosotros
                        </h1>
                        <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide">
                            Un estudio dedicado a la excelencia en diseño, mobiliario y construcción.
                        </p>
                        <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-12" />
                    </Reveal>
                </div>
            </section>

            {/* SECTION: NUESTRA ESENCIA */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Column: Sketch/Architectural Image */}
                        <Reveal x={-50} duration={0.8}>
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-full h-full border border-gray-100 -z-10" />
                                <div className="rounded-none overflow-hidden shadow-2xl">
                                    <img 
                                        src="https://imarket.com.pe/hogar/wp-content/uploads/2024/05/cocina-de-melamina-A-1.jpg" 
                                        alt="Diseño con propósito" 
                                        className="w-full h-[600px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        {/* Right Column: Values */}
                        <div className="space-y-12">
                            <Reveal y={20}>
                                <div className="text-center lg:text-left">
                                    <span className="text-decor-accent text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">Nuestra Esencia</span>
                                    <h2 className="text-4xl md:text-5xl font-medium font-serif text-decor-navy leading-tight mb-8">
                                        Especialistas en <br /> 
                                        <span className="italic text-decor-accent">arquitectura y carpintería fina</span>
                                    </h2>
                                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                                        En DECORFORMA somos expertos en la transformación de espacios a través del diseño y fabricación de muebles de melamina a medida. Combinamos ingeniería de precisión con una estética arquitectónica moderna para crear ambientes funcionales y elegantes.
                                    </p>
                                </div>
                            </Reveal>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-4">
                                {values.map((item, i) => (
                                    <Reveal key={item.title} delay={0.2 + i * 0.1} y={20}>
                                        <div className="space-y-4 group text-center lg:text-left">
                                            <div className="w-14 h-14 bg-gray-50 flex items-center justify-center text-decor-navy group-hover:bg-decor-navy group-hover:text-white transition-all duration-500 rounded-none mx-auto lg:mx-0">
                                                <item.icon size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-decor-navy text-sm mb-2 uppercase tracking-widest">{item.title}</h4>
                                                <p className="text-gray-400 text-xs leading-relaxed max-w-[220px] mx-auto lg:mx-0 font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
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
                                    ¿Iniciamos tu <br /> <span className="text-decor-accent italic">visión?</span>
                                </h2>
                                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                                    Transformamos tus ideas en realidades arquitectónicas con acabados de lujo y precisión técnica.
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
