import { Reveal } from '../components/Reveal';
import { Award, CheckCircle2, Heart, Users, ShieldCheck, MessageCircle, Zap } from 'lucide-react';
import { WA_NUMBER } from '../data/site';
import Counter from '../components/Counter';

export default function AboutPage() {
    return (
        <main className="bg-[#061230] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden pt-32 md:pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/assets/images/48.png"
                        className="w-full h-full object-cover object-top animate-slow-zoom"
                        alt="Carpintería Premium"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061230]/90 via-[#061230]/50 to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full">
                    <Reveal y={30}>
                        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-8 max-w-2xl">
                            Transformando Espacios <br />
                            <span className="text-[#22BDDD]">Con Pasión y Precisión</span>
                        </h1>
                        <p className="text-white/70 text-base md:text-xl max-w-xl leading-relaxed">
                            Desde hace más de 10 años, Decorforma combina la tradición de la carpintería fina con la innovación de la melamina moderna.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Stats / Trust Row */}
            <section className="relative -mt-12 md:-mt-16 z-10 px-5 mb-24">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Años de Experiencia', value: 10, suffix: '+', icon: Award },
                        { label: 'Proyectos Entregados', value: 1000, suffix: '+', icon: CheckCircle2 },
                        { label: 'Clientes Felices', value: 1000, suffix: '+', icon: Heart },
                        { label: 'Especialistas', value: 7, suffix: '+', icon: Users },
                    ].map((stat, i) => (
                        <Reveal key={stat.label} delay={i * 0.1} y={20} width="100%">
                            <div className="bg-[#0B2545]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-[#1A8FBB]/50 transition-colors group h-full flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px]">
                                <stat.icon className="w-8 h-8 text-[#22BDDD] mb-3 group-hover:scale-110 transition-transform" />
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-white/50 text-[10px] md:text-xs font-medium uppercase tracking-wider line-clamp-2">{stat.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-6xl mx-auto px-5 mb-20 md:mb-32">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <Reveal x={-30}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/images/22 nuevo.png"
                                className="w-full aspect-[3/5] object-cover object-top"
                                alt="Diseño de interiores premium"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-transparent to-transparent opacity-60" />
                        </div>
                    </Reveal>

                    <div className="space-y-10">
                        <Reveal y={20}>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Nuestra Filosofía de Trabajo
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                En Decorforma, no solo fabricamos muebles; creamos soluciones que integran diseño, funcionalidad y durabilidad. Nuestra obsesión es el detalle y la satisfacción de ver plasmada la visión de nuestros clientes.
                            </p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { title: 'Excelencia CNC', desc: 'Precisión milimétrica en cada corte utilizando tecnología de punta.', icon: Zap },
                                { title: 'Calidad PUR', desc: 'Cantos pegados con tecnología PUR para una resistencia total al calor y la humedad.', icon: ShieldCheck },
                            ].map((feature, i) => (
                                <Reveal key={feature.title} delay={0.2 + i * 0.1} y={20}>
                                    <div className="p-1">
                                        <div className="w-12 h-12 rounded-xl bg-[#1A8FBB]/10 flex items-center justify-center mb-4">
                                            <feature.icon className="text-[#22BDDD] w-6 h-6" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission/Vision */}
            <section className="bg-[#0B2545]/30 py-20 md:py-32 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 gap-12">
                        <Reveal y={20}>
                            <div className="p-8 rounded-3xl bg-[#0B2545]/50 border border-white/5 hover:bg-[#0B2545] transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#22BDDD] mb-4">Nuestra Misión</h3>
                                <p className="text-white/60 leading-relaxed">
                                    Diseñar y fabricar mobiliario a medida que supere las
                                    expectativas de nuestros clientes en diseño, calidad y
                                    funcionalidad, empleando materiales de primera
                                    categoría y procesos innovadores que permitan
                                    transformar cada hogar y oficina en espacios únicos,
                                    eficientes y duraderos.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal y={20} delay={0.2}>
                            <div className="p-8 rounded-3xl bg-[#0B2545]/50 border border-white/5 hover:bg-[#0B2545] transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#22BDDD] mb-4">Nuestra Visión</h3>
                                <p className="text-white/60 leading-relaxed">
                                    Consolidarnos como la empresa líder en el Perú en
                                    diseño y fabricación de muebles de melamina y madera,
                                    reconocida por nuestra excelencia operativa, innovación
                                    permanente y un compromiso sostenido con la calidad,
                                    la sostenibilidad y la satisfacción integral de nuestros
                                    clientes.

                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Cartera de Clientes / Quality */}
            <section className="py-20 md:py-32 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto px-5">
                    <Reveal y={20} width="100%">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Calidad que se siente y perdura</h2>
                            <p className="text-white/50 max-w-2xl mx-auto">
                                Trabajamos con aglomerados de alto estándar,
                                seleccionadas por su resistencia, espesor y acabado
                                superior.

                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60">
                        {/* Mock logos/projects */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <Reveal key={i} delay={i * 0.05} y={20}>
                                <div className="h-16 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-[#1A8FBB]/30 transition-all group p-4 text-center">
                                    <span className="text-white/20 font-bold text-xs uppercase group-hover:text-[#22BDDD] transition-colors tracking-widest">Proyecto {i}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nuestro Proceso */}
            <section className="py-20 md:py-32 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-5">
                    <Reveal y={20} width="100%">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
                            <p className="text-white/50 max-w-2xl mx-auto">
                                Un camino estructurado desde la idea inicial hasta la entrega final de tu mobiliario premium.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connection line (desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#1A8FBB]/40 to-transparent" />

                        {[
                            { step: '01', title: 'Consulta & Diseño', desc: 'Escuchamos tus necesidades y creamos los planos 3D iniciales.' },
                            { step: '02', title: 'Cotización Clara', desc: 'Presupuesto detallado y transparente sin sorpresas ocultas.' },
                            { step: '03', title: 'Fabricación CNC', desc: 'Corte y perforado de alta precisión en nuestro taller.' },
                            { step: '04', title: 'Instalación Final', desc: 'Montaje profesional cuidando cada detalle de tu espacio.' },
                        ].map((item, i) => (
                            <Reveal key={item.step} delay={i * 0.1} y={30}>
                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 rounded-3xl bg-[#0B2545] border border-[#1A8FBB]/30 flex items-center justify-center text-2xl font-bold text-[#22BDDD] mx-auto mb-6 shadow-xl shadow-black/40">
                                        {item.step}
                                    </div>
                                    <h4 className="text-white font-bold mb-3">{item.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Centro de Trabajo (Workshop) */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-[#0B2545]/20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="space-y-8 lg:order-2">
                            <Reveal y={20}>
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    Nuestro Centro <br /> de Excelencia
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Contamos con un taller propio equipado con tecnología de última generación. Nuestra planta de producción está diseñada para maximizar la calidad y eficiencia, asegurando que cada pieza de melamina y madera cumpla con los estándares más exigentes del mercado.
                                </p>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="text-[#22BDDD] font-bold text-xl mb-1">Maquinaria CNC</div>
                                        <div className="text-white/40 text-sm italic">Corte Industrial</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="text-[#22BDDD] font-bold text-xl mb-1">Cantos PUR</div>
                                        <div className="text-white/40 text-sm italic">Acabado Impermeable</div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal x={-40}>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/assets/images/22.jpeg"
                                    className="rounded-3xl h-64 w-full object-cover"
                                    alt="Tecnología de precisión"
                                />
                                <img
                                    src="/assets/images/15.jpeg"
                                    className="rounded-3xl h-64 w-full object-cover object-left mt-8"
                                    alt="Carpintería moderna"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 px-5">
                <Reveal y={20} width="100%">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1A8FBB] to-[#116483] rounded-[3rem] p-8 md:p-20 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
                            ¿Listo para dar vida <br /> a tu próximo proyecto?
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                            Conversa con nosotros y descubre cómo nuestra maestría en melamina y madera puede transformar tu espacio.
                        </p>
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, vengo de ver su historia y me gustaría recibir información y cotizar mi proyecto.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-green-900/20 hover:scale-105 active:scale-95 relative z-10 group"
                        >
                            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                            Cotizar mi Proyecto
                        </a>
                    </div>
                </Reveal>
            </section>
        </main >
    );
}
