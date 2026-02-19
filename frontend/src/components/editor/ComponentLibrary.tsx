import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { baseComponents, componentCategories, getComponentsByCategory } from '../../data/custom-designs/components';
import { FurnitureComponent } from '../../data/custom-designs/components';

interface ComponentLibraryProps {
  onComponentSelect: (component: FurnitureComponent) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  onDragStart?: (component: FurnitureComponent) => void;
}

export default function ComponentLibrary({ 
  onComponentSelect, 
  selectedCategory = 'all', 
  onCategoryChange,
  onDragStart
}: ComponentLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar componentes
  const filteredComponents = baseComponents.filter(component => {
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold text-white mb-4">Biblioteca de Componentes</h2>
        
        {/* Search */}
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Buscar componentes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#22BDDD] transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {Object.entries({ all: 'Todos', ...componentCategories }).map(([key, value]) => (
              <button
                key={key}
                onClick={() => onCategoryChange?.(key)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  selectedCategory === key
                    ? 'bg-[#22BDDD] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg transition-colors ${
              showFilters ? 'bg-[#22BDDD] text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Filter size={14} />
          </button>
        </div>
      </div>

      {/* Component List */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredComponents.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-white/40 text-sm">No se encontraron componentes</div>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredComponents.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                onSelect={() => onComponentSelect(component)}
                onDragStart={onDragStart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ComponentCard({ 
  component, 
  onSelect,
  onDragStart 
}: { 
  component: FurnitureComponent; 
  onSelect: () => void;
  onDragStart?: (component: FurnitureComponent) => void;
}) {
  const handleDragStart = (e: React.DragEvent) => {
    if (onDragStart) {
      onDragStart(component);
    }
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', component.id);
  };
  
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onClick={onSelect}
      className="w-full text-left p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#22BDDD]/30 transition-all group cursor-move"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-medium text-sm text-white group-hover:text-[#22BDDD] transition-colors">
            {component.name}
          </h3>
          <p className="text-xs text-white/50 mt-1">
            Tipo: {component.type}
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-[#22BDDD]">
            S/.{component.price.toFixed(2)}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-white/40">
        <div>
          {component.dimensions.width}×{component.dimensions.height}×{component.dimensions.depth}cm
        </div>
        <div className="px-2 py-1 bg-white/10 rounded text-white/60">
          {component.category}
        </div>
      </div>

      {component.constraints && (
        <div className="mt-2 text-xs text-white/30">
          <div className="flex flex-wrap gap-2">
            {component.constraints.minWidth && (
              <span>Mín: {component.constraints.minWidth}cm</span>
            )}
            {component.constraints.maxWidth && (
              <span>Máx: {component.constraints.maxWidth}cm</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
