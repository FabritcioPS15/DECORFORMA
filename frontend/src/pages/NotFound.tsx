import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-5 py-24 relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-50 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-50 rounded-full blur-[120px]" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <Reveal y={40}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-500 text-xs font-black uppercase tracking-widest mb-8">
                        Error 404
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-[#0B2545] mb-6 tracking-tighter uppercase leading-none">
                        PÁGINA NO <br /> <span className="text-gray-200">ENCONTRADA</span>
                    </h1>
                    <p className="text-[#666] text-lg md:text-xl mb-12 leading-relaxed">
                        Lo sentimos, el mueble (o página) que estás buscando no parece estar en nuestro catálogo actual.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#1A8FBB] text-white font-black px-10 py-5 rounded-2xl transition-all shadow-xl shadow-black/5 hover:scale-105 uppercase tracking-widest text-sm"
                        >
                            <Home size={20} />
                            Volver al Inicio
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-[#0B2545] font-black px-10 py-5 rounded-2xl border border-gray-100 transition-all hover:scale-105 uppercase tracking-widest text-sm"
                        >
                            <ArrowLeft size={20} />
                            Regresar
                        </button>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
