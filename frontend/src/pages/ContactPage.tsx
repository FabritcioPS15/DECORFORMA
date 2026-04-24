import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Architecture Studio Style */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-decor-navy">
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-decor-navy flex items-center px-6 lg:px-24 relative z-10">
            <Reveal x={-30} duration={0.8}>
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-7xl font-medium font-serif text-white leading-tight mb-6">
                  Contáctanos
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-light">
                  Cuéntanos tu idea y hagámosla realidad.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:block w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Contacto Decorforma" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-decor-navy/20 mix-blend-multiply" />
          </div>
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
                  title="Dirección" 
                  content="Av. Principal 123, Lima, Perú."
                />
                <ContactInfoItem 
                  icon={Phone} 
                  title="Teléfono" 
                  content="+51 999 999 999"
                />
                <ContactInfoItem 
                  icon={Mail} 
                  title="Correo" 
                  content="info@decorforma.pe"
                />
                <ContactInfoItem 
                  icon={Clock} 
                  title="Horario" 
                  content={<>Lunes - Viernes: 8:00 AM - 6:00 PM<br/>Sábados: 9:00 AM - 1:00 PM</>}
                />
              </div>
            </Reveal>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Reveal y={30} duration={0.8} delay={0.2}>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre completo</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-lg" 
                        placeholder="Tu nombre..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Correo electrónico</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-lg" 
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Teléfono</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-lg" 
                        placeholder="+52..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Tipo de proyecto</label>
                      <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-lg appearance-none cursor-pointer">
                        <option>Residencial</option>
                        <option>Comercial</option>
                        <option>Mobiliario a medida</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Mensaje</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-decor-accent outline-none transition-colors font-light text-lg resize-none" 
                      placeholder="Cuéntanos más sobre tu proyecto..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: '#b08d5a' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto bg-decor-accent text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl shadow-decor-accent/20 flex items-center justify-center gap-3 transition-colors"
                  >
                    Enviar mensaje
                    <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-decor-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal y={20}>
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white">
              {/* Map Placeholder with Style */}
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-99.1332,19.4326,12/1200x500?access_token=YOUR_TOKEN')] bg-cover bg-center">
                <div className="absolute inset-0 bg-decor-navy/5 mix-blend-multiply" />
              </div>
              
              {/* Floating Marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-gray-100 scale-110">
                  <div className="w-3 h-3 rounded-full bg-decor-navy animate-pulse" />
                  <span className="font-bold text-decor-navy tracking-widest uppercase text-xs">DECORFORMA</span>
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
    <div className="flex gap-6 items-start group">
      <div className="w-14 h-14 rounded-2xl border border-decor-accent/20 flex items-center justify-center text-decor-accent bg-decor-accent/5 shrink-0 transition-all duration-300 group-hover:bg-decor-accent group-hover:text-white group-hover:scale-110">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-decor-navy mb-2">{title}</h3>
        <p className="text-gray-500 font-light text-lg leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
