import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Home, Paintbrush, Hammer, Check, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Layout, Hammer, Paintbrush, Layout];
  const steps = [
    { title: 'Consulta', desc: 'Escuchamos tus ideas y necesidades para entender tu visión.' },
    { title: 'Propuesta', desc: 'Presentamos una propuesta personalizada alineada a tu estilo.' },
    { title: 'Diseño', desc: 'Creamos el diseño detallado con visualizaciones y planos.' },
    { title: 'Ejecución', desc: 'Coordinamos y ejecutamos cada detalle para hacer realidad el proyecto.' }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden bg-decor-navy">
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-decor-navy flex items-center px-6 lg:px-24 relative z-10">
            <Reveal x={-30} duration={0.8}>
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-7xl font-medium font-serif text-white leading-tight mb-6">
                  Servicios
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-light">
                  Soluciones integrales para cada etapa de tu proyecto.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:block w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Servicios Decorforma" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-decor-navy/40 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Tabbed Services Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Vertical Tabs */}
            <div className="lg:col-span-3 space-y-4">
              {services.map((service, idx) => {
                const Icon = icons[idx];
                const isActive = activeTab === idx;
                return (
                  <button
                    key={service.slug}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 text-left ${
                      isActive 
                        ? 'bg-decor-navy text-white shadow-xl shadow-decor-navy/20 translate-x-2' 
                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-decor-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Icon size={20} />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">{service.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Center & Right Column: Content */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  {/* Service Image */}
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-full h-full border border-decor-accent/20 rounded-3xl -z-10" />
                    <img 
                      src={services[activeTab].image} 
                      alt={services[activeTab].label} 
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-decor-navy leading-tight">
                      {services[activeTab].label}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                      {services[activeTab].longDescription}
                    </p>
                    <ul className="space-y-4">
                      {services[activeTab].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                          <div className="w-5 h-5 rounded-full bg-decor-accent/10 flex items-center justify-center text-decor-accent">
                            <Check size={14} strokeWidth={3} />
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <motion.a 
                      href="/contacto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-decor-accent text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-decor-accent/20"
                    >
                      Solicitar servicio
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: NUESTRO PROCESO */}
      <section className="py-24 bg-decor-muted/20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Reveal y={20}>
              <h2 className="text-4xl md:text-5xl font-serif text-decor-navy mb-4">Nuestro proceso</h2>
              <p className="text-gray-400 font-light tracking-widest uppercase text-sm">Así trabajamos contigo</p>
              <div className="w-20 h-[1px] bg-decor-accent mx-auto mt-8" />
            </Reveal>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-10 left-0 w-full h-[1px] bg-decor-accent/20 hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.2} y={30}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-full bg-white border border-decor-accent/20 flex items-center justify-center mx-auto mb-8 relative transition-all duration-500 group-hover:bg-decor-accent group-hover:border-decor-accent group-hover:scale-110 shadow-sm">
                      <span className="text-decor-accent font-serif text-xl group-hover:text-white transition-colors">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-decor-navy mb-4">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-decor-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4" />
            <Reveal x={-30}>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-medium font-serif text-white mb-6 leading-tight">
                  ¿Listo para iniciar <br /> <span className="text-decor-accent italic">tu proyecto?</span>
                </h2>
                <p className="text-white/50 text-lg font-light max-w-md">Nuestro equipo está listo para ayudarte en cada paso del camino.</p>
              </div>
            </Reveal>
            <Reveal x={30}>
              <motion.a 
                href="/contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-decor-accent text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-decor-accent/30 flex items-center gap-4 group"
              >
                Contáctanos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
