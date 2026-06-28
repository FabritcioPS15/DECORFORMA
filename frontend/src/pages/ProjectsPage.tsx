import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { projects, Project } from '../data/projects';

import SEO from '../components/SEO';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('Todos');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories = ['Todos', 'Residencial', 'Comercial', 'Remodelación', 'Interiores'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-white min-h-screen">
      <SEO 
        title="Proyectos y Portafolio" 
        description="Explora nuestra galería de proyectos residenciales, comerciales y de diseño de interiores. Inspiración y alta calidad en cada detalle."
      />
      {/* Header Section - Centered (Architecture Style) */}
      <section className="relative h-[35vh] min-h-[320px] pt-24 flex items-center justify-center overflow-hidden bg-decor-navy text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Proyectos Decorforma" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-decor-navy/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6">
          <Reveal y={20} duration={0.8}>
            <h1 className="text-5xl md:text-8xl font-medium font-serif text-white leading-tight mb-8">
              Proyectos
            </h1>
            <p className="text-white/70 text-lg md:text-2xl font-light tracking-wide">
              Una curaduría de nuestros trabajos más emblemáticos en diseño y construcción.
            </p>
            <div className="w-24 h-[1px] bg-decor-accent mx-auto mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Filters Section - Square Style */}
      <section className="py-4 md:py-6 border-b border-gray-100 sticky top-[72px] bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 flex justify-center w-full relative">
          <Reveal y={10} width="100%">
            <div className="flex flex-col items-center justify-center w-full relative">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px]">
                {/* Trigger Button */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between gap-4 w-full px-6 py-4 bg-white border border-gray-200 text-decor-navy font-bold text-xs uppercase tracking-widest shadow-sm hover:border-gray-300 transition-colors"
                >
                  <span>{filter}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-2xl z-50 rounded-none flex flex-col"
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setFilter(cat);
                            setIsDropdownOpen(false);
                          }}
                          className={`flex items-center justify-between px-6 py-4 text-xs font-bold uppercase tracking-widest text-left transition-colors border-b border-gray-50 last:border-0 ${
                            filter === cat 
                              ? 'bg-decor-navy text-white' 
                              : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-decor-navy'
                          }`}
                        >
                          {cat}
                          {filter === cat && <Check size={16} />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pt-8 pb-20 max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section - Square and Centered */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-decor-navy p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center rounded-none shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-decor-navy via-transparent to-black/40" />
            
            <div className="relative z-10 max-w-3xl">
              <Reveal y={30}>
                <h2 className="text-4xl md:text-7xl font-medium font-serif text-white mb-8 leading-tight">
                  ¿Quieres tu espacio <span className="text-decor-accent italic">así?</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto">
                  Transformamos tus ideas en realidades arquitectónicas con acabados de lujo y precisión técnica.
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-none overflow-hidden group cursor-pointer border border-white/5 ${
        project.size === 'large' ? 'md:col-span-2' : ''
      } ${project.size === 'tall' ? 'md:row-span-2 min-h-[600px]' : 'h-[400px]'}`}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-end justify-between gap-4">
           <div>
             <p className="text-decor-accent text-[10px] font-black uppercase tracking-[0.3em] mb-3">{project.category}</p>
             <h3 className="text-3xl font-serif text-white mb-2 tracking-wide leading-tight">{project.title}</h3>
             <p className="text-white/40 text-xs font-light uppercase tracking-[0.2em]">{project.location}</p>
           </div>
           <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
             <ChevronRight size={20} />
           </div>
        </div>
      </div>
    </motion.div>
  );
}
