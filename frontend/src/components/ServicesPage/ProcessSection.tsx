import { Reveal } from '../Reveal';

const processSteps = [
  { step: '01', title: 'Consulta', desc: 'Analizamos necesidades y espacio disponible.' },
  { step: '02', title: 'Diseño', desc: 'Desarrollamos plano técnico y renders 3D.' },
  { step: '03', title: 'Producción', desc: 'Fabricamos con precisión y materiales premium.' },
  { step: '04', title: 'Instalación', desc: 'Instalación impecable y limpieza final.' }
];

export function ProcessSection() {
  return (
    <section className="py-32 px-5 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#22BDDD]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal y={20} width="100%">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              NUESTRO <span className="text-[#22BDDD]">PROCESO</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
              Un método ágil y profesional para garantizar resultados excepcionales.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} y={30}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A8FBB] to-[#22BDDD] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <span className="text-white font-black text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[180px] mx-auto font-light">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
