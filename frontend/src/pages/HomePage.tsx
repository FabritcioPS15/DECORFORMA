import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Award, Heart, Layout, Home, Paintbrush, Hammer } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import SEO from '../components/SEO';
import { products } from '../data/products';

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <main className="bg-white">
      <SEO 
        title="Estudio de Diseño y Mobiliario" 
        description="DECORFORMA es un estudio especializado en diseño de interiores y fabricación de mobiliario a medida de alta gama."
      />
      <Hero />

      {/* SECTION: SOBRE NOSOTROS - Architecture Studio Style */}
      <section className="py-16 md:py-24 lg:py-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Visual Composition */}
            <Reveal x={-50} duration={0.8}>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -top-10 -left-10 w-64 h-64 border-[1px] border-decor-accent/30 -z-10" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-50 border border-gray-100 -z-10" />
                
                <div className="relative rounded-none overflow-hidden border border-gray-100 shadow-xl bg-white">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Interiorismo de Lujo" 
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.2] hover:grayscale-0"
                  />
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                </div>

                {/* Floating Architectural Element */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl rounded-none hidden md:block max-w-[240px] border border-gray-100"
                >
                  <p className="text-decor-navy font-serif text-3xl mb-2">12+</p>
                  <p className="text-decor-accent text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Años de excelencia en diseño estructural</p>
                </motion.div>
              </div>
            </Reveal>

            {/* Right Column: Content */}
            <div className="space-y-10 text-center lg:text-left">
              <Reveal y={20}>
                <div>
                  <span className="text-decor-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Sobre Nosotros</span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-serif text-decor-navy leading-tight mb-8">
                    Expertos en mobiliario <br className="hidden sm:block" /> 
                    <span className="italic text-decor-accent">de melamina a medida</span>
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed font-light">
                    En DECORFORMA somos especialistas en transformar ambientes a través del diseño y fabricación de muebles de melamina de alta gama. Fusionamos la precisión técnica con una visión arquitectónica para crear espacios que no solo son bellos, sino profundamente funcionales.
                  </p>
                </div>
              </Reveal>

              {/* Minimalist Benefits Icons */}
              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                {[
                  { title: 'Diseño personalizado', desc: 'Soluciones a medida que reflejan tu estilo.', icon: Layout },
                  { title: 'Calidad superior', desc: 'Materiales premium y ejecución meticulosa.', icon: Award },
                  { title: 'Experiencia', desc: 'Años respaldando proyectos residenciales.', icon: ShieldCheck },
                  { title: 'Innovación', desc: 'Tendencias y tecnologías sostenibles.', icon: Zap },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.2 + i * 0.1} y={20}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group cursor-default text-center sm:text-left justify-center sm:justify-start">
                      <div className="shrink-0 w-12 h-12 rounded-none border border-gray-200 flex items-center justify-center text-decor-navy bg-white group-hover:bg-decor-navy group-hover:text-white transition-colors duration-500">
                        <item.icon size={18} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-decor-navy text-[11px] mb-1 uppercase tracking-widest">{item.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: NUESTROS SERVICIOS */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center justify-center w-full">
            <Reveal y={20} width="100%">
              <div className="flex flex-col items-center justify-center w-full">
                <span className="text-decor-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-center">Nuestros Servicios</span>
                <h2 className="text-3xl md:text-5xl font-medium font-serif text-decor-navy italic text-center">
                  Soluciones integrales
                </h2>
                <div className="w-20 h-[1px] bg-decor-accent mx-auto mt-8" />
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-gray-200">
            {[
              { title: 'Carpintería de Melamina', icon: Home, desc: 'Fabricación a medida de muebles altos y bajos para cocinas, closets y centros de entretenimiento.' },
              { title: 'Construcción & Remodelación', icon: Hammer, desc: 'Gestión integral de proyectos de obra civil y acabados arquitectónicos de alta calidad.' },
              { title: 'Diseño de Interiores', icon: Paintbrush, desc: 'Conceptualización de espacios que optimizan la funcionalidad y elevan la estética de tu hogar.' },
              { title: 'Mobiliario Corporativo', icon: Layout, desc: 'Diseño y fabricación de estaciones de trabajo, mostradores y soluciones para negocios.' },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1} y={0} width="100%">
                <div 
                  className="bg-white p-10 rounded-none hover:bg-decor-navy transition-colors duration-500 group border-r border-b border-gray-200 flex flex-col h-full text-center lg:text-left items-center lg:items-start"
                >
                  <div className="w-16 h-16 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center text-decor-navy mb-8 group-hover:bg-decor-accent group-hover:border-decor-accent group-hover:text-white transition-colors duration-500 shrink-0">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-serif text-decor-navy mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-light group-hover:text-white/70 transition-colors">
                    {service.desc}
                  </p>
                  <Link to="/servicios" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-decor-navy group-hover:text-decor-accent transition-colors w-fit">
                    Ver detalle <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PROYECTOS DESTACADOS - Architecture Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16 text-center md:text-left">
            <Reveal x={-30}>
              <div>
                <span className="text-decor-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Proyectos Destacados</span>
                <h2 className="text-3xl md:text-5xl font-medium font-serif text-decor-navy italic">
                  Obras recientes
                </h2>
              </div>
            </Reveal>
            <Reveal x={30}>
              <Link to="/proyectos" className="flex items-center gap-4 bg-decor-navy text-white px-8 py-3 rounded-none font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-decor-accent transition-colors group">
                Ver galería 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 h-[800px] md:h-[600px]">
            <div className="md:col-span-8 relative rounded-none overflow-hidden group border border-gray-100">
              <Reveal width="100%" duration={1}>
                <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" alt="Proyecto 1" />
              </Reveal>
              <div className="absolute inset-0 bg-gradient-to-t from-decor-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end items-center sm:items-start p-6 sm:p-8 text-center sm:text-left text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 block text-decor-accent">Residencial</span>
                <h4 className="text-2xl sm:text-3xl font-serif tracking-wide">Loft Contemporáneo</h4>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-1">
              {[
                { img: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600", cat: "Comercial", title: "Corporativo Horizonte" },
                { img: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600", cat: "Interiorismo", title: "Cocina Noir" }
              ].map((proj, i) => (
                <div key={i} className="relative rounded-none overflow-hidden group border border-gray-100">
                  <Reveal width="100%" delay={0.2 + i * 0.1} duration={1}>
                    <img src={proj.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" alt={proj.title} />
                  </Reveal>
                  <div className="absolute inset-0 bg-gradient-to-t from-decor-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end justify-center sm:justify-start p-8 text-center sm:text-left text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-col items-center sm:items-start w-full">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 block text-decor-accent">{proj.cat}</span>
                      <h4 className="text-xl font-serif tracking-wide">{proj.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA: Architecture Studio Footer CTA */}
      <section className="py-16 md:py-24 bg-decor-navy relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-decor-navy p-8 sm:p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center rounded-none border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-decor-navy via-transparent to-black/40" />
            
            <div className="relative z-10 max-w-3xl">
              <Reveal y={30}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium font-serif text-white mb-6 md:mb-8 leading-tight">
                  ¿Listo para transformar <br className="hidden sm:block" /> <span className="text-decor-accent italic">tu espacio?</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                  Inicia una conversación con nuestro equipo de expertos en diseño y construcción. Descubre el potencial de tu propiedad.
                </p>
                <motion.a 
                  href="/contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 bg-white text-decor-navy px-12 py-5 rounded-none font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-decor-accent hover:text-white transition-all duration-300"
                >
                  Contáctanos
                  <ArrowRight size={18} />
                </motion.a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
