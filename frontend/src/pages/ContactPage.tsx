import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import SEO from '../components/SEO';
import { PHONE_NUMBER } from '../data/site';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <SEO 
        title="Contacto" 
        description="Ponte en contacto con DECORFORMA. Agenda una consulta gratuita para transformar tus espacios con diseño y mobiliario de alta calidad."
      />
      {/* Header Section - Centered (Architecture Style) */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-decor-navy text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Contacto Decorforma" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6">
          <Reveal y={20} duration={0.8}>
            <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-8">
              Contacto
            </h1>
            <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide">
              Cuéntanos tu visión arquitectónica y construyamos algo extraordinario.
            </p>
            <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <Reveal y={20} duration={0.6}>
              <div className="space-y-10">
                <ContactInfoItem 
                  icon={MapPin} 
                  title="Dirección de Estudio" 
                  content="Av. Principal 123, Distrito Financiero, Lima, Perú."
                />
                <ContactInfoItem 
                  icon={Phone} 
                  title="Contacto Directo" 
                  content={PHONE_NUMBER}
                />
                <ContactInfoItem 
                  icon={Mail} 
                  title="Correo Corporativo" 
                  content="info@decorforma.pe"
                />
                <ContactInfoItem 
                  icon={Clock} 
                  title="Horario de Atención" 
                  content={<>Lunes - Viernes: 8:00 AM - 6:00 PM<br/>Sábados: Previa Cita</>}
                />
              </div>
            </Reveal>
          </div>

          {/* Contact Form Column - Square */}
          <div className="lg:col-span-7">
            <Reveal y={30} duration={0.8} delay={0.2}>
              <div className="bg-white p-8 md:p-14 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-none">
                <h3 className="text-2xl font-serif text-decor-navy mb-10 italic">Inicia tu consulta</h3>
                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Nombre completo</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-base rounded-none" 
                        placeholder="Ej. Arquitecto Juan Pérez"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Correo electrónico</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-base rounded-none" 
                        placeholder="estudio@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Teléfono móvil</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-base rounded-none" 
                        placeholder="+51..."
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Tipo de servicio</label>
                      <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-base appearance-none cursor-pointer rounded-none">
                        <option>Arquitectura Interior</option>
                        <option>Diseño Residencial</option>
                        <option>Mobiliario Comercial</option>
                        <option>Consultoría de Espacios</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Detalles del proyecto</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-base resize-none rounded-none" 
                      placeholder="Ubicación, metraje, estilo deseado..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-decor-navy text-white px-12 py-5 rounded-none font-bold text-sm uppercase tracking-[0.2em] shadow-xl shadow-decor-navy/10 flex items-center justify-center gap-4 transition-colors hover:bg-decor-accent"
                  >
                    Enviar Propuesta
                    <Send size={16} />
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section - Square */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal y={20}>
            <div className="relative h-[500px] w-full rounded-none overflow-hidden shadow-sm border border-gray-200">
              {/* Map Placeholder with Style */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50">
                <div className="absolute inset-0 bg-decor-navy/5 mix-blend-multiply" />
              </div>
              
              {/* Floating Marker */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white px-10 py-5 rounded-none shadow-2xl flex items-center gap-4 border border-gray-100">
                  <div className="w-2 h-2 rounded-none bg-decor-accent animate-pulse" />
                  <span className="font-bold text-decor-navy tracking-[0.3em] uppercase text-[10px]">Decorforma Studio</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ContactInfoItem({ icon: Icon, title, content }: { icon: any, title: string, content: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start text-center sm:text-left group">
      <div className="w-14 h-14 rounded-none border border-gray-200 flex items-center justify-center text-decor-navy bg-white shrink-0 transition-all duration-500 group-hover:bg-decor-navy group-hover:text-white group-hover:border-decor-navy">
        <Icon size={20} />
      </div>
      <div className="pt-1">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 group-hover:text-decor-accent transition-colors">{title}</h3>
        <p className="text-decor-navy font-medium text-base leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
