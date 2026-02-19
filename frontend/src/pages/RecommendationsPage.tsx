import { Reveal } from '../components/Reveal';
import { Star, Quote, CheckCircle2, ShieldCheck, Sparkles, Droplets, Sun, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { WA_NUMBER, WA_MESSAGE } from '../data/site';

export default function RecommendationsPage() {
    const testimonials = [
        {
            name: "Ricardo Mendoza",
            role: "Propietario de Vivienda",
            text: "La calidad del acabado en mis muebles de cocina es excepcional. El diseño 3D previo ayudó muchísimo a visualizar el espacio final.",
            stars: 5
        },
        {
            name: "Elena Rodríguez",
            role: "Diseñadora de Interiores",
            text: "Decorforma es mi aliado estratégico. Su precisión en el corte CNC y el pegado de cantos PUR marca la diferencia en mis proyectos premium.",
            stars: 5
        },
        {
            name: "Carlos Huamán",
            role: "Gerente de Constructora",
            text: "Responsabilidad y puntualidad. Han cumplido con los plazos de entrega en proyectos de gran escala sin sacrificar detalles.",
            stars: 5
        }
    ];

    const maintenanceTips = [
        {
            title: "Limpieza Diaria",
            desc: "Usa un paño suave ligeramente humedecido con agua y jabón neutro. Evita el exceso de agua.",
            icon: Droplets
        },
        {
            title: "Protección Solar",
            desc: "Evita la exposición directa y prolongada al sol para prevenir decoloraciones en la melamina y madera.",
            icon: Sun
        },
        {
            title: "Ventilación Adecuada",
            desc: "Mantén tus ambientes ventilados para evitar la acumulación de humedad que pueda afectar la durabilidad.",
            icon: Wind
        },
        {
            title: "Uso de Productos",
            desc: "No utilices ceras, barnices con silicona o limpiadores abrasivos que puedan dañar el acabado premium.",
            icon: ShieldCheck
        }
    ];

    return (
        <main className="bg-[#061230] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        src="https://images.unsplash.com/photo-1581578731522-7b56ee63a8e2?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-40"
                        alt="Recomendaciones Decorforma"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061230]/80 via-transparent to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full">
                    <Reveal y={30}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A8FBB]/20 border border-[#1A8FBB]/30 text-[#22BDDD] text-xs font-bold uppercase tracking-widest mb-6">
                            Experiencias & Consejos
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Calidad que <span className="text-[#22BDDD]">Inspira</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Descubre por qué nuestros clientes confían en nosotros y aprende cómo mantener tus muebles perfectos por años.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Video Feature Section */}
            <section className="relative -mt-12 mb-32 px-5">
                <div className="max-w-5xl mx-auto">
                    <Reveal y={40} delay={0.3}>
                        <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#0B2545] border border-white/10 shadow-2xl">
                            {/* Video Thumbnail Placeholder */}
                            <div className="aspect-video relative">
                                <img
                                    src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                    alt="Video de recomendaciones"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-transparent to-transparent" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#22BDDD] flex items-center justify-center shadow-2xl shadow-[#22BDDD]/40 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-0 h-0 border-t-[12px] md:border-t-[18px] border-t-transparent border-l-[20px] md:border-l-[30px] border-l-white border-b-[12px] md:border-b-[18px] border-b-transparent ml-2" />
                                    </div>
                                </div>

                                {/* Video Info Overlay */}
                                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div>
                                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Esenciales del Cuidado</h2>
                                        <p className="text-[#22BDDD] font-medium tracking-wide">GUÍA DE MANTENIMIENTO PROFESIONAL</p>
                                    </div>
                                    <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        VIDEO RECOMENDADO
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-32 px-5">
                <div className="max-w-6xl mx-auto">
                    <Reveal y={20}>
                        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-16 flex items-center justify-center gap-3">
                            <Quote className="text-[#22BDDD] w-10 h-10 opacity-20" />
                            Lo que dicen nuestros clientes
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <Reveal key={t.name} delay={i * 0.1} y={30}>
                                <div className="bg-[#0B2545]/50 border border-white/5 rounded-3xl p-8 hover:bg-[#0B2545] transition-all aspect-square flex flex-col justify-between group">
                                    <div>
                                        <div className="flex gap-1 mb-6 text-[#22BDDD]">
                                            {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                        <p className="text-white/70 italic leading-relaxed text-lg underline decoration-[#1A8FBB]/30 underline-offset-8">
                                            "{t.text}"
                                        </p>
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-white font-bold group-hover:text-[#22BDDD] transition-colors">{t.name}</div>
                                        <div className="text-white/30 text-xs font-medium uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Section */}
            <section className="bg-white/5 py-32 px-5 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Reveal x={-30}>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    Cómo cuidar la <br /> <span className="text-[#22BDDD]">inversión en tu hogar</span>
                                </h2>
                                <p className="text-white/50 text-lg">
                                    Nuestros muebles están diseñados para durar décadas. Siguiendo estos simples consejos, mantendrás la belleza y funcionalidad intactas.
                                </p>
                                <div className="bg-[#1A8FBB]/10 border border-[#1A8FBB]/20 rounded-2xl p-6 flex items-start gap-4">
                                    <Sparkles className="text-[#22BDDD] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-[#22BDDD] font-bold">Tip de Oro</h4>
                                        <p className="text-white/60 text-sm">La tecnología PUR que usamos hace que los cantos sean extremadamente resistentes, pero una limpieza adecuada garantiza un brillo eterno.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {maintenanceTips.map((tip, i) => (
                                <Reveal key={tip.title} delay={i * 0.1} y={20}>
                                    <div className="p-6 rounded-3xl bg-[#061230] border border-white/5 hover:border-[#1A8FBB]/30 transition-all h-full">
                                        <div className="w-12 h-12 rounded-2xl bg-[#1A8FBB]/10 flex items-center justify-center mb-4">
                                            <tip.icon className="text-[#22BDDD] w-6 h-6" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2">{tip.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed">{tip.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-24 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Garantía Decorforma', text: '12 Meses de Soporte', icon: ShieldCheck },
                        { label: 'Entrega Segura', text: 'Instalación Propia', icon: CheckCircle2 },
                        { label: 'Asesoría VIP', text: 'Atención Personalizada', icon: Star },
                        { label: 'Calidad Premium', text: 'Tecnología CNC', icon: Sparkles },
                    ].map((badge, i) => (
                        <Reveal key={badge.label} delay={i * 0.05} y={15}>
                            <div className="flex flex-col items-center text-center p-4">
                                <badge.icon className="text-[#1A8FBB]/50 w-8 h-8 mb-4" />
                                <h5 className="text-white font-bold text-sm mb-1">{badge.label}</h5>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest">{badge.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-32 px-5">
                <Reveal y={20} width="100%">
                    <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#0B2545] to-[#061230] border border-[#1A8FBB]/20 p-12 md:p-16 text-center shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-6">¿Quieres ser nuestra próxima recomendación?</h2>
                        <p className="text-white/50 mb-10 text-lg">Únete a cientos de clientes satisfechos que ya disfrutan de la calidad Decorforma.</p>
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-[#1A8FBB]/20 hover:scale-105"
                        >
                            Agenda una Cita Gratis
                            <CheckCircle2 size={18} />
                        </a>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
