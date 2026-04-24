import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Target, Eye, Heart, ShieldCheck, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const values = [
        { title: 'Misión', desc: 'Crear espacios que mejoren la calidad de vida de nuestros clientes.', icon: Target },
        { title: 'Visión', desc: 'Ser referentes en diseño y construcción por nuestra innovación y calidad.', icon: Eye },
        { title: 'Pasión', desc: 'Amamos lo que hacemos, y eso se refleja en cada proyecto.', icon: Heart },
        { title: 'Compromiso', desc: 'Acompañamos a nuestros clientes en cada etapa del camino.', icon: ShieldCheck },
    ];

    const team = [
        { name: 'Laura Martínez', role: 'Directora de Diseño', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Carlos Rojas', role: 'Director de Proyectos', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Mariana López', role: 'Arquitecta Senior', image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600' },
        { name: 'Javier Gómez', role: 'Director de Construcción', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden bg-decor-navy">
                <div className="absolute inset-0 flex">
                    <div className="w-full lg:w-1/2 bg-decor-navy flex items-center px-6 lg:px-24 relative z-10">
                        <Reveal x={-30} duration={0.8}>
                            <div className="max-w-xl">
                                <div className="flex items-center gap-2 text-white/40 text-xs font-black uppercase tracking-[0.3em] mb-6">
                                    <Link to="/" className="hover:text-decor-accent transition-colors">Inicio</Link>
                                    <span>|</span>
                                    <span className="text-white/60">Nosotros</span>
                                </div>
                                <h1 className="text-4xl md:text-7xl font-medium font-serif text-white leading-tight">
                                    Nosotros
                                </h1>
                            </div>
                        </Reveal>
                    </div>
                    <div className="hidden lg:block w-1/2 relative">
                        <img 
                            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="Nosotros Decorforma" 
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-decor-navy/40 mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* SECTION: NUESTRA ESENCIA */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Column: Sketch/Architectural Image */}
                        <Reveal x={-50} duration={0.8}>
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-full h-full border border-decor-accent/20 rounded-2xl -z-10" />
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img 
                                        src="https://imarket.com.pe/hogar/wp-content/uploads/2024/05/cocina-de-melamina-A-1.jpg" 
                                        alt="Diseño con propósito" 
                                        className="w-full h-[550px] object-cover"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        {/* Right Column: Values */}
                        <div className="space-y-12">
                            <Reveal y={20}>
                                <div>
                                    <span className="text-decor-accent text-sm font-black tracking-[0.3em] uppercase mb-4 block">Nuestra Esencia</span>
                                    <h2 className="text-4xl md:text-5xl font-medium font-serif text-decor-navy leading-tight mb-8">
                                        Especialistas en <br /> 
                                        <span className="italic text-decor-accent">mobiliario de melamina y construcción</span>
                                    </h2>
                                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                                        En DECORFORMA somos expertos en la transformación de espacios a través del diseño y fabricación de muebles de melamina a medida. Combinamos ingeniería de precisión con una estética arquitectónica moderna para crear ambientes funcionales y elegantes.
                                    </p>
                                    <p className="text-gray-400 text-base mt-6 font-light">
                                        Nuestro enfoque integra la arquitectura y la carpintería fina, asegurando que cada proyecto, desde cocinas de lujo hasta espacios comerciales, sea ejecutado con excelencia técnica.
                                    </p>
                                </div>
                            </Reveal>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-4">
                                {values.map((item, i) => (
                                    <Reveal key={item.title} delay={0.2 + i * 0.1} y={20}>
                                        <div className="space-y-4 group">
                                            <div className="w-12 h-12 rounded-full border border-decor-accent/20 flex items-center justify-center text-decor-accent group-hover:bg-decor-accent group-hover:text-white transition-all duration-300">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-decor-navy text-sm mb-2 uppercase tracking-wider">{item.title}</h4>
                                                <p className="text-gray-400 text-xs leading-relaxed max-w-[180px]">{item.desc}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA Banner */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-decor-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                        <Reveal x={-30}>
                            <div>
                                <h2 className="text-4xl md:text-6xl font-medium font-serif text-white mb-6 leading-tight">
                                    ¿Tienes un proyecto <br /> <span className="text-decor-accent italic">en mente?</span>
                                </h2>
                                <p className="text-white/50 text-lg font-light max-w-md mx-auto md:mx-0">Hablemos y hagamos tu realidad juntos.</p>
                            </div>
                        </Reveal>
                        <Reveal x={30}>
                            <motion.a 
                                href="/contacto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-decor-accent text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-decor-accent/30 flex items-center gap-4 group"
                            >
                                Contáctanos
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
