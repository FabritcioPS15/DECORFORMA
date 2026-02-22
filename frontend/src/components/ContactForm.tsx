import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const furnitureTypes = [
  'Closet / Ropero',
  'Cocina integral',
  'Mueble de sala',
  'Escritorio / Oficina',
  'Estante / Biblioteca',
  'Mueble de baño',
  'Mueble TV / Sala',
  'Otro',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    furniture: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-[#F4F8FC]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal x={-30}>
            <div>
              <span className="text-[#1A8FBB] text-sm font-semibold uppercase tracking-widest">
                Contacto
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-2 mb-5">
                Cuéntanos tu proyecto
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Completa el formulario y nos comunicaremos contigo en menos de 2 horas
                para comenzar a diseñar el espacio que siempre soñaste.
              </p>

              <div className="space-y-5">
                {[
                  { step: '01', title: 'Nos envías tu consulta', desc: 'Cuéntanos qué necesitas y el espacio disponible.' },
                  { step: '02', title: 'Recibimos tu diseño', desc: 'Nuestros diseñadores elaboran una propuesta visual.' },
                  { step: '03', title: 'Aprobamos y fabricamos', desc: 'Fabricamos y entregamos según lo acordado.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1A8FBB]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#1A8FBB] text-xs font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2545] text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} x={30}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={56} className="text-[#1A8FBB] mx-auto mb-4" />
                  <h3 className="text-xl font-extrabold text-[#0B2545] mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Nos comunicaremos contigo en menos de 2 horas. Gracias por
                    confiar en Decorforma.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B2545] mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ej: Ana García"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A8FBB] focus:ring-2 focus:ring-[#1A8FBB]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B2545] mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ej: 999 888 777"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A8FBB] focus:ring-2 focus:ring-[#1A8FBB]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B2545] mb-1.5">
                      Tipo de mueble *
                    </label>
                    <select
                      name="furniture"
                      required
                      value={form.furniture}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1A8FBB] focus:ring-2 focus:ring-[#1A8FBB]/20 transition-all bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      {furnitureTypes.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B2545] mb-1.5">
                      Cuéntanos más (opcional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe el espacio, medidas aproximadas o preferencias de color..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A8FBB] focus:ring-2 focus:ring-[#1A8FBB]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0B2545] hover:bg-[#1A3A6B] disabled:opacity-60 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 hover:shadow-lg text-base"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                    {loading ? 'Enviando...' : 'Solicitar cotización gratuita'}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Sin compromiso. Respuesta garantizada en menos de 2 horas.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
