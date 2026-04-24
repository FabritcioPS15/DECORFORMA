import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Award, Heart, Layout, Home, Paintbrush, Hammer } from 'lucide-react';
import Hero from '../components/Hero';
import { Reveal } from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <main className="bg-white">
      <Hero />

      {/* SECTION: SOBRE NOSOTROS - Architecture Studio Style */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Visual Composition */}
            <Reveal x={-50} duration={0.8}>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -top-10 -left-10 w-64 h-64 border-[1px] border-decor-accent/30 -z-10" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-decor-muted -z-10" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Interiorismo de Lujo" 
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                </div>

                {/* Floating Architectural Element */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-12 -left-12 bg-white p-8 shadow-xl rounded-xl hidden md:block max-w-[240px] border border-gray-100"
                >
                  <p className="text-decor-accent font-serif text-3xl mb-2">12+</p>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest leading-tight">Años de excelencia en diseño estructural</p>
                </motion.div>
              </div>
            </Reveal>

            {/* Right Column: Content */}
            <div className="space-y-10">
              <Reveal y={20}>
                <div>
                  <span className="text-decor-accent text-sm font-black tracking-[0.3em] uppercase mb-4 block">Sobre Nosotros</span>
                  <h2 className="text-4xl md:text-6xl font-medium font-serif text-decor-navy leading-tight mb-8">
                    Expertos en mobiliario <br /> 
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
                    <div className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-full border border-decor-accent/20 flex items-center justify-center text-decor-accent bg-decor-accent/5">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-decor-navy text-sm mb-1 uppercase tracking-wider">{item.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
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
      <section className="py-24 bg-decor-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Reveal y={20}>
              <span className="text-decor-accent text-sm font-black tracking-[0.3em] uppercase mb-4 block">Nuestros Servicios</span>
              <h2 className="text-4xl md:text-5xl font-medium font-serif text-decor-navy">
                Soluciones integrales para cada espacio
              </h2>
              <div className="w-20 h-[1px] bg-decor-accent mx-auto mt-8" />
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Carpintería de Melamina', icon: Home, desc: 'Fabricación a medida de muebles altos y bajos para cocinas, closets y centros de entretenimiento.' },
              { title: 'Construcción & Remodelación', icon: Hammer, desc: 'Gestión integral de proyectos de obra civil y acabados arquitectónicos de alta calidad.' },
              { title: 'Diseño de Interiores', icon: Paintbrush, desc: 'Conceptualización de espacios que optimizan la funcionalidad y elevan la estética de tu hogar.' },
              { title: 'Mobiliario Corporativo', icon: Layout, desc: 'Diseño y fabricación de estaciones de trabajo, mostradores y soluciones para negocios.' },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1} y={30}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-decor-navy flex items-center justify-center text-white mb-8 group-hover:bg-decor-accent transition-colors duration-500">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-decor-navy mb-4 group-hover:text-decor-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>
                  <Link to="/servicios" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-decor-navy hover:text-decor-accent transition-colors">
                    Ver más <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PROYECTOS DESTACADOS - Architecture Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <Reveal x={-30}>
              <div>
                <span className="text-decor-accent text-sm font-black tracking-[0.3em] uppercase mb-4 block">Proyectos Destacados</span>
                <h2 className="text-4xl md:text-5xl font-medium font-serif text-decor-navy">
                  Espacios que hablan por nosotros
                </h2>
              </div>
            </Reveal>
            <Reveal x={30}>
              <Link to="/proyectos" className="flex items-center gap-2 text-sm font-bold text-decor-navy hover:text-decor-accent transition-colors group">
                Ver todos los proyectos 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden group shadow-xl">
              <Reveal width="100%" duration={1}>
                <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Proyecto 1" />
              </Reveal>
              <div className="absolute inset-0 bg-gradient-to-t from-decor-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 block text-decor-accent">Residencial</span>
                <h4 className="text-2xl font-serif">Loft Contemporáneo</h4>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              {[
                { img: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600", cat: "Comercial", title: "Corporativo Horizonte" },
                { img: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600", cat: "Interiorismo", title: "Cocina Noir" }
              ].map((proj, i) => (
                <div key={i} className="relative rounded-3xl overflow-hidden group shadow-lg">
                  <Reveal width="100%" delay={0.2 + i * 0.1} duration={1}>
                    <img src={proj.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={proj.title} />
                  </Reveal>
                  <div className="absolute inset-0 bg-decor-navy/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-1 block">{proj.cat}</span>
                      <h4 className="text-xl font-serif">{proj.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA: Architecture Studio Footer CTA */}
      <section className="py-24 bg-decor-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-decor-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <Reveal x={-30}>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-medium font-serif text-white leading-tight mb-6">
                  ¿Listo para transformar <br /> <span className="text-decor-accent italic">tu espacio?</span>
                </h2>
                <p className="text-white/60 text-lg font-light max-w-xl">
                  Inicia una conversación con nuestro equipo de expertos en melamina y construcción. Descubre el potencial de tu propiedad.
                </p>
              </div>
            </Reveal>
            <Reveal x={30}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contacto"
                className="bg-decor-accent text-white px-12 py-6 rounded-xl font-bold text-lg shadow-2xl shadow-decor-accent/20 flex items-center gap-4 group"
              >
                Contáctanos
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
