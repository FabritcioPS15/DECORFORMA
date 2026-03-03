import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Heart, Users, ShieldCheck, MessageCircle, Zap } from 'lucide-react';
import { WA_NUMBER } from '../data/site';
import Counter from '../components/Counter';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Refined Hero Section - Full Width & Light Aesthetic */}
            <section className="relative min-h-[550px] flex items-center overflow-hidden pt-32 pb-16 bg-white">
                {/* Full Width Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full relative"
                    >
                        <img
                            src="/assets/images/48.png"
                            className="w-full h-full object-cover object-top"
                            alt="Carpintería Premium"
                        />
                        {/* Light Gradient Overlay (White to Transparent) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40" />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-3xl">
                        <Reveal y={30}>
                            <span className="inline-block text-[#22BDDD] text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] mb-4 lg:mb-6">
                                Nuestra Historia
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-6 lg:mb-8 uppercase italic">
                                <span className="text-[#0B2545] block">EXPERIENCIA</span>
                                <span className="text-[#22BDDD] not-italic block">QUE TRANSFORMA</span>
                            </h1>
                            <p className="text-[#666] text-base lg:text-xl max-w-sm leading-relaxed font-semibold">
                                Más de una década perfeccionando el arte de la melamina y la madera fina para hogares que buscan distinción.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Stats Section - Floating Uniform Cards */}
            <section className="relative z-20 px-6 -mt-8 lg:-mt-16 mb-20 lg:mb-32">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
                    {[
                        { label: 'Años', value: 10, suffix: '+', icon: Award },
                        { label: 'Proyectos', value: 1000, suffix: '+', icon: CheckCircle2 },
                        { label: 'Clientes', value: 1000, suffix: '+', icon: Heart },
                        { label: 'Expertos', value: 7, suffix: '+', icon: Users },
                    ].map((stat, i) => (
                        <Reveal key={stat.label} delay={i * 0.1} y={20} width="100%">
                            <div className="bg-white rounded-2xl lg:rounded-[2rem] p-6 lg:p-10 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 group h-full">
                                <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#22BDDD]/30 group-hover:text-[#22BDDD] mb-4 lg:mb-6 transition-colors" />
                                <div className="text-3xl lg:text-5xl font-black text-[#0B2545] mb-1 lg:mb-2 tracking-tighter">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[#AAA] text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]">{stat.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-6xl mx-auto px-5 mb-32">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="relative pt-12 pr-12 mb-12 lg:mb-0">
                        <Reveal x={-30}>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 z-10">
                                <img
                                    src="/assets/images/22 nuevo.png"
                                    className="w-full aspect-[4/5] object-cover object-top"
                                    alt="Diseño de interiores Decorforma"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/20 to-transparent" />
                            </div>
                        </Reveal>

                        {/* Secondary Overlapping Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -bottom-12 -right-12 w-1/2 rounded-[2rem] overflow-hidden shadow-3xl border-[12px] border-white z-20 hidden md:block"
                        >
                            <img
                                src="/assets/images/3.jpeg"
                                className="w-full aspect-square object-cover"
                                alt="Acabados de Lujo"
                            />
                        </motion.div>

                        {/* Decorative Geometric Element */}
                        <div className="absolute top-0 left-0 w-full h-full border-2 border-[#22BDDD]/20 rounded-[3.5rem] -translate-x-8 translate-y-8 -z-10 hidden lg:block" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-50 rounded-full -z-20 blur-xl" />
                    </div>

                    <div className="space-y-12">
                        <Reveal y={20}>
                            <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
                                Nuestra esencia
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#0B2545] leading-none mb-8 tracking-tighter uppercase">
                                FILOSOFÍA DE <br />
                                <span className="text-gray-200">TRABAJO</span>
                            </h2>
                            <p className="text-[#666] text-lg leading-relaxed">
                                En Decorforma, no solo fabricamos muebles; creamos soluciones que integran diseño, funcionalidad y durabilidad. Nuestra obsesión es el detalle y la satisfacción de ver plasmada la visión de nuestros clientes.
                            </p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {[
                                { title: 'Excelencia CNC', desc: 'Precisión milimétrica en cada corte utilizando tecnología de punta.', icon: Zap },
                                { title: 'Calidad PURA', desc: 'Cantos pegados con tecnología PUR para una resistencia total al calor y la humedad.', icon: ShieldCheck },
                            ].map((feature, i) => (
                                <Reveal key={feature.title} delay={0.2 + i * 0.1} y={20}>
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                                            <feature.icon className="text-[#22BDDD] w-7 h-7" />
                                        </div>
                                        <h3 className="text-[#0B2545] font-black uppercase tracking-tight mb-3">{feature.title}</h3>
                                        <p className="text-[#999] text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission/Vision */}
            <section className="bg-gray-50 py-32 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-5 text-center lg:text-left">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
                        <Reveal y={20}>
                            <div className="p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-black-[2%] hover:shadow-2xl transition-shadow">
                                <h3 className="text-2xl font-black text-[#0B2545] uppercase tracking-tighter mb-6 flex items-center gap-3 justify-center lg:justify-start">
                                    <span className="w-8 h-[2px] bg-[#22BDDD]" />
                                    Misión
                                </h3>
                                <p className="text-[#666] leading-relaxed text-lg italic">
                                    "Trabajar para superar las expectativas de nuestros clientes transformando cada hogar y oficina en espacios únicos y eficientes."
                                </p>
                            </div>
                        </Reveal>

                        <Reveal y={20} delay={0.2}>
                            <div className="p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-black-[2%] hover:shadow-2xl transition-shadow">
                                <h3 className="text-2xl font-black text-[#0B2545] uppercase tracking-tighter mb-6 flex items-center gap-3 justify-center lg:justify-start">
                                    <span className="w-8 h-[2px] bg-[#22BDDD]" />
                                    Visión
                                </h3>
                                <p className="text-[#666] leading-relaxed text-lg italic">
                                    "Consolidarnos como líderes en diseño de melamina en Perú, reconocidos por excelencia operativa e innovación permanente."
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Nuestro Proceso */}
            <section className="py-32 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <Reveal y={20} width="100%">
                        <div className="text-center mb-24">
                            <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">Mapa de ruta</span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#0B2545] mb-8 uppercase tracking-tighter">NUESTRO PROCESO</h2>
                            <p className="text-[#666] text-lg max-w-2xl mx-auto leading-relaxed">
                                Un camino estructurado desde la idea inicial hasta la entrega final de tu mobiliario premium.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-4 gap-12 relative">
                        {[
                            { step: '01', title: 'Consulta & Diseño', desc: 'Escuchamos tus necesidades y creamos planos 3D iniciales.' },
                            { step: '02', title: 'Cotización Clara', desc: 'Presupuesto detallado y transparente sin sorpresas ocultas.' },
                            { step: '03', title: 'Fabricación CNC', desc: 'Corte y perforado de alta precisión en nuestro taller.' },
                            { step: '04', title: 'Instalación Final', desc: 'Montaje profesional cuidando cada detalle de tu espacio.' },
                        ].map((item, i) => (
                            <Reveal key={item.step} delay={i * 0.1} y={30}>
                                <div className="text-center group">
                                    <div className="w-24 h-24 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl font-black text-[#0B2545] mx-auto mb-8 transition-all group-hover:bg-[#0B2545] group-hover:text-white group-hover:-translate-y-2">
                                        {item.step}
                                    </div>
                                    <h4 className="text-[#0B2545] font-black uppercase tracking-tight mb-4">{item.title}</h4>
                                    <p className="text-[#999] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-5">
                <Reveal y={20} width="100%">
                    <div className="max-w-5xl mx-auto text-center bg-[#0B2545] rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1A8FBB44,transparent_60%)]" />
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 relative z-10 tracking-tighter uppercase leading-none">
                            ¿LISTO PARA DAR VIDA <br /> <span className="text-gray-500">A TU PROYECTO?</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                            Transforma tu espacio con la maestría de DECORFORMA.
                        </p>
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, vengo de ver su historia y me gustaría recibir información y cotizar mi proyecto.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#22BDDD] hover:bg-[#1A8FBB] text-white font-black px-12 py-6 rounded-2xl transition-all hover:scale-105 relative z-10 uppercase tracking-widest text-sm"
                        >
                            <MessageCircle size={22} />
                            Cotizar ahora
                        </a>
                    </div>
                </Reveal>
            </section>
        </main >
    );
}
