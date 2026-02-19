import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#061230] flex items-center justify-center px-5 py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#1A8FBB]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#22BDDD]/10 rounded-full blur-[120px]" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <Reveal y={40}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
                        Error 404
                    </div>
                    <h1 className="text-7xl md:text-9xl font-bold text-white mb-6">
                        Página No <span className="text-[#22BDDD]">Encontrada</span>
                    </h1>
                    <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed">
                        Lo sentimos, el mueble (o página) que estás buscando no parece estar en nuestro catálogo actual.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-[#1A8FBB]/20 hover:scale-105"
                        >
                            <Home size={20} />
                            Volver al Inicio
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl border border-white/10 transition-all hover:scale-105"
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
