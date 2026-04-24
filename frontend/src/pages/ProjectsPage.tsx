import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { projects, Project } from '../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Residencial', 'Comercial', 'Remodelación', 'Interiores'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center overflow-hidden bg-decor-navy">
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-decor-navy flex items-center px-6 lg:px-24 relative z-10">
            <Reveal x={-30} duration={0.8}>
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-7xl font-medium font-serif text-white leading-tight mb-6">
                  Proyectos
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-light">
                  Espacios diseñados y construidos con pasión y precisión.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:block w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Proyectos Decorforma" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-decor-navy/40 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 border-b border-gray-100 sticky top-[72px] bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal y={10}>
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-decor-accent text-white shadow-lg shadow-decor-accent/20' 
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* CTA Section */}
      <section className="py-24 bg-decor-navy relative overflow-hidden mb-20 mx-6 rounded-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <Reveal x={-20}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full border border-decor-accent/30 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-decor-accent/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-decor-accent">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                 </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">¿Quieres que tu proyecto sea el próximo?</h2>
                <p className="text-white/50 text-lg font-light">Hablemos y creemos algo extraordinario juntos.</p>
              </div>
            </div>
          </Reveal>
          <Reveal x={20}>
            <motion.a 
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-decor-accent text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl shadow-decor-accent/20"
            >
              Contáctanos
            </motion.a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer ${
        project.size === 'large' ? 'md:col-span-2' : ''
      } ${project.size === 'tall' ? 'md:row-span-2 min-h-[600px]' : 'h-[400px]'}`}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-3xl font-serif text-white mb-3 tracking-wide">{project.title}</h3>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-white/60 text-sm font-light uppercase tracking-[0.2em]">{project.location}</p>
            <p className="text-decor-accent text-xs font-black uppercase tracking-[0.3em]">{project.category}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
