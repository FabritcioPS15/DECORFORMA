import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { Reveal } from '../components/Reveal';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { WA_NUMBER } from '../data/site';

export default function ServicePage() {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <main className="min-h-screen bg-white pt-20">
                <div className="max-w-6xl mx-auto px-5 py-16 text-center">
                    <Reveal delay={0.1}>
                        <h1 className="text-3xl font-serif text-decor-navy mt-6 mb-8">
                            Servicio no encontrado
                        </h1>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-decor-navy text-white px-8 py-3 rounded-none font-bold text-sm uppercase tracking-widest hover:bg-decor-accent transition-colors shadow-xl"
                        >
                            <ArrowLeft size={16} />
                            Volver al inicio
                        </Link>
                    </Reveal>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Header Section - Centered (Architecture Style) */}
            <section className="relative h-[35vh] min-h-[320px] pt-24 flex items-center justify-center overflow-hidden bg-decor-navy text-center">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        className="w-full h-full object-cover opacity-30"
                        alt={service.label}
                    />
                    <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-3xl px-6">
                    <Reveal y={20} duration={0.8}>
                        <span className="text-decor-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Servicio Especializado</span>
                        <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-8 mt-4">
                            {service.label}
                        </h1>
                        <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                            {service.description}
                        </p>
                        <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-12" />
                    </Reveal>
                </div>
            </section>

            {/* Deep Content - Square & Architecture Style */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <Reveal x={-30}>
                        <div className="space-y-8 text-center lg:text-left">
                            <span className="text-decor-accent text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">Detalles del Servicio</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-decor-navy leading-tight">
                                Excelencia y Precisión en <br />
                                <span className="italic text-decor-accent">cada centímetro</span>
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                {service.longDescription}
                            </p>

                            <div className="grid sm:grid-cols-1 gap-4 pt-6">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-100 pb-4 last:border-0">
                                        <div className="w-2 h-2 rounded-none bg-decor-accent flex-shrink-0 mt-1" />
                                        <span className="text-decor-navy font-medium tracking-wide">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal x={30}>
                        <div className="relative border border-gray-100 p-2 bg-white shadow-sm">
                            <img
                                src={service.image}
                                className="w-full h-[550px] object-cover rounded-none grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                alt="Detalle del servicio"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FINAL CTA Banner - Square and Centered */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-decor-navy p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center rounded-none shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-decor-navy via-transparent to-black/40" />
                        
                        <div className="relative z-10 max-w-3xl">
                            <Reveal y={30}>
                                <h2 className="text-4xl md:text-7xl font-medium font-serif text-white mb-8 leading-tight">
                                    ¿Listo para <br /> <span className="text-decor-accent italic">empezar?</span>
                                </h2>
                                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                                    Hagamos realidad tu proyecto con la mejor tecnología en melamina y diseño arquitectónico.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en recibir información y cotizar mi proyecto de: ' + service.label)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 bg-white text-decor-navy px-12 py-5 rounded-none font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                                    >
                                        Cotizar por WhatsApp
                                        <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
