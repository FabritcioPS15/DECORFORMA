import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Hammer, Paintbrush, Check, ArrowRight } from 'lucide-react';
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
      {/* Header Section - Centered */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-decor-navy text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Servicios Decorforma" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6">
          <Reveal y={20} duration={0.8}>
            <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-8">
              Servicios
            </h1>
            <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide">
              Soluciones integrales de diseño y arquitectura para transformar tus espacios.
            </p>
            <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Tabbed Services Section - Centered Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Reveal y={20}>
              <h2 className="text-3xl md:text-5xl font-serif text-decor-navy mb-4 italic">Nuestras Especialidades</h2>
              <p className="text-gray-400 text-sm uppercase tracking-[0.3em]">Calidad en cada detalle</p>
            </Reveal>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Tabs List */}
            <div className="lg:w-1/4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {services.map((service, idx) => {
                const Icon = icons[idx];
                const isActive = activeTab === idx;
                return (
                  <button
                    key={service.slug}
                    onClick={() => setActiveTab(idx)}
                    className={`shrink-0 flex items-center gap-4 p-5 rounded-none border transition-all duration-300 text-left min-w-[200px] lg:min-w-0 ${
                      isActive 
                        ? 'bg-decor-navy text-white border-decor-navy shadow-xl shadow-decor-navy/10' 
                        : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-decor-navy'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-decor-accent' : 'text-gray-300'} />
                    <span className="font-bold text-xs uppercase tracking-widest">{service.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Area - Centered inside */}
            <div className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gray-100 p-8 md:p-12 shadow-sm rounded-none"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Service Details */}
                    <div className="space-y-8 order-2 md:order-1">
                      <h3 className="text-4xl font-serif text-decor-navy leading-tight">
                        {services[activeTab].label}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed font-light">
                        {services[activeTab].longDescription}
                      </p>
                      <ul className="grid grid-cols-1 gap-4">
                        {services[activeTab].benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-decor-accent rounded-none" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <motion.a 
                          href="/contacto"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-block bg-decor-navy text-white px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest shadow-xl shadow-decor-navy/10"
                        >
                          Consultar Proyecto
                        </motion.a>
                      </div>
                    </div>

                    {/* Service Image */}
                    <div className="relative order-1 md:order-2 h-[350px] md:h-[450px]">
                      <img 
                        src={services[activeTab].image} 
                        alt={services[activeTab].label} 
                        className="w-full h-full object-cover rounded-none grayscale-[0.3] hover:grayscale-0 transition-all duration-700 shadow-2xl"
                      />
                      <div className="absolute inset-0 border border-gray-100 mix-blend-overlay pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: NUESTRO PROCESO - Centered */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Reveal y={20}>
              <h2 className="text-4xl md:text-5xl font-serif text-decor-navy mb-4 italic">Nuestro proceso</h2>
              <p className="text-gray-400 font-light tracking-[0.4em] uppercase text-xs">Excelencia Paso a Paso</p>
              <div className="w-16 h-[2px] bg-decor-accent mx-auto mt-8" />
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.15} y={20}>
                <div className="p-10 bg-white border-r border-b border-gray-100 hover:bg-decor-navy group transition-all duration-500 min-h-[300px] flex flex-col justify-center text-center">
                  <div className="text-4xl font-serif text-decor-accent/30 group-hover:text-decor-accent mb-6 transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-decor-navy group-hover:text-white mb-4 uppercase tracking-wider">{step.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA Banner - Fully Centered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-decor-navy p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center rounded-none shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-decor-navy via-transparent to-black/40" />
            
            <div className="relative z-10 max-w-3xl">
              <Reveal y={30}>
                <h2 className="text-4xl md:text-7xl font-medium font-serif text-white mb-8 leading-tight">
                  ¿Iniciamos tu <span className="text-decor-accent italic">visión?</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                  Agenda una consultoría gratuita y descubre cómo podemos optimizar tus espacios con diseño de alta gama.
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
