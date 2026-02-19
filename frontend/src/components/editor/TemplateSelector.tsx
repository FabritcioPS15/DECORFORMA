import { useState } from 'react';
import { Search, Clock, Star } from 'lucide-react';
import { furnitureTemplates } from '../../data/custom-designs/templates';

interface TemplateSelectorProps {
  onTemplateSelect: (templateId: string) => void;
  selectedTemplate?: string;
}

export default function TemplateSelector({ onTemplateSelect, selectedTemplate }: TemplateSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredTemplates = furnitureTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || template.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold text-white mb-4">Plantillas</h2>
        
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Buscar plantillas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#22BDDD]"
          />
        </div>

        <div className="flex gap-2">
          {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
            <button
              key={level}
              onClick={() => setDifficultyFilter(level as any)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                difficultyFilter === level
                  ? 'bg-[#22BDDD] text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {level === 'all' ? 'Todos' : 
               level === 'beginner' ? 'Principiante' :
               level === 'intermediate' ? 'Intermedio' : 'Avanzado'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              onSelect={() => onTemplateSelect(template.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ 
  template, 
  isSelected, 
  onSelect 
}: { 
  template: any; 
  isSelected: boolean; 
  onSelect: () => void; 
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-4 rounded-lg border transition-all ${
        isSelected
          ? 'bg-[#22BDDD]/20 border-[#22BDDD] text-white'
          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="font-medium text-sm mb-1">{template.name}</h3>
          <p className="text-xs text-white/50 line-clamp-2">{template.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs">
          <span className={`px-2 py-1 rounded ${
            template.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
            template.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {template.difficulty}
          </span>
          <div className="flex items-center gap-1 text-white/40">
            <Clock size={12} />
            {template.estimatedTime}
          </div>
        </div>
        <div className="text-sm font-semibold text-[#22BDDD]">
          S/.{template.basePrice.toFixed(2)}
        </div>
      </div>
    </button>
  );
}
