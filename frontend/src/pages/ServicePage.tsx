import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { WA_NUMBER } from '../data/site';

export default function ServicePage() {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-white text-4xl font-bold">Servicio no encontrado</h1>
                <Link to="/" className="text-[#22BDDD] mt-4 inline-block hover:underline">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <main className="bg-[#061230] min-h-screen">
            {/* Service Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        className="w-full h-full object-cover opacity-40 scale-105"
                        alt={service.label}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061230] via-[#061230]/60 to-transparent" />
                </div>

                <div className="relative max-w-6xl mx-auto px-5 w-full">
                    <Reveal y={30}>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            {service.label}
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Deep Content */}
            <section className="py-32 px-5">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <Reveal x={-30}>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Excelencia y Precisión en <br />
                                <span className="text-[#22BDDD]">Cada Detalle</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                {service.longDescription}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#22BDDD] flex-shrink-0 mt-1" size={18} />
                                        <span className="text-white/80 text-sm font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal x={30}>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#1A8FBB]/20 rounded-[3rem] blur-2xl group-hover:bg-[#1A8FBB]/30 transition-all duration-500" />
                            <img
                                src={service.image}
                                className="relative rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl border border-white/10"
                                alt="Detalle del servicio"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-32 px-5">
                <Reveal y={20} width="100%">
                    <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#0B2545] to-[#061230] border border-[#1A8FBB]/20 p-12 md:p-20 text-center shadow-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para empezar?</h2>
                        <p className="text-white/50 mb-10 text-lg">Hagamos realidad tu proyecto con la mejor tecnología en melamina.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Decorforma, estoy interesado en recibir información y cotizar mi proyecto de: ' + service.label)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fba57] text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-green-900/20 hover:scale-105 active:scale-95 group"
                            >
                                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                                Cotizar mi Proyecto
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main >
    );
}
