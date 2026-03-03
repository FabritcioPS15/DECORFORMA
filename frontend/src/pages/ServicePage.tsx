import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { WA_NUMBER } from '../data/site';
import { IoArrowForward } from 'react-icons/io5';

export default function ServicePage() {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="pt-48 pb-20 text-center bg-white min-h-screen">
                <h1 className="#0B2545 text-4xl font-black uppercase tracking-tighter">Servicio no encontrado</h1>
                <Link to="/" className="text-[#22BDDD] mt-6 inline-flex items-center gap-2 font-bold hover:underline">
                    <IoArrowForward className="rotate-180" /> Volver al inicio
                </Link>
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Service Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20 lg:pt-40">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        className="w-full h-full object-cover opacity-60 scale-105"
                        alt={service.label}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full">
                    <Reveal y={30}>
                        <span className="text-[#22BDDD] text-[12px] font-black uppercase tracking-[0.3em] mb-4 block">
                            Detalles del Servicio
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-[#0B2545] mb-6 leading-tight uppercase tracking-tighter">
                            {service.label}
                        </h1>
                        <p className="text-[#666] text-lg md:text-xl max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Deep Content */}
            <section className="py-32 bg-white px-5">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <Reveal x={-30}>
                        <div className="space-y-10">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0B2545] leading-none uppercase tracking-tighter">
                                EXCELENCIA Y <br />
                                <span className="text-gray-200">PRECISIÓN</span>
                            </h2>
                            <p className="text-[#666] text-lg leading-relaxed">
                                {service.longDescription}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-colors hover:border-[#22BDDD]/30">
                                        <CheckCircle2 className="text-[#22BDDD] flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-[#0B2545] text-sm font-bold uppercase tracking-tight leading-tight">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal x={30}>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#1A8FBB]/5 rounded-[3rem] blur-3xl transition-all duration-500" />
                            <img
                                src={service.image}
                                className="relative rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl border border-gray-100"
                                alt="Detalle del servicio"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-32 px-5 bg-white">
                <Reveal y={20} width="100%">
                    <div className="max-w-5xl mx-auto rounded-[3rem] bg-[#0B2545] border border-white/5 p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22BDDD]/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none relative z-10">
                            ¿LISTO PARA <br /> <span className="text-[#22BDDD]">EMPEZAR?</span>
                        </h2>
                        <p className="text-white/50 mb-12 text-lg md:text-xl max-w-2xl mx-auto relative z-10">
                            Hagamos realidad tu proyecto con la mejor tecnología en melamina y diseño personalizado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en recibir información y cotizar mi proyecto de: ' + service.label)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#22BDDD] hover:bg-[#1A8FBB] text-white font-black px-12 py-6 rounded-2xl transition-all hover:scale-105 uppercase tracking-widest text-sm shadow-xl shadow-cyan-900/40"
                            >
                                <MessageCircle size={22} />
                                Cotizar mi Proyecto
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main >
    );
}
