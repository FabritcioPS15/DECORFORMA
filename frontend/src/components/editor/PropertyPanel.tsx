import { useState } from 'react';
import { Trash2, Copy, Move3d } from 'lucide-react';
import { FurnitureComponent } from '../../data/custom-designs/components';
import { materials } from '../../data/custom-designs/materials';

interface PropertyPanelProps {
  selectedComponent: FurnitureComponent | null;
  onUpdateComponent: (componentId: string, updates: Partial<FurnitureComponent>) => void;
  onDeleteComponent: (componentId: string) => void;
  onDuplicateComponent: (component: FurnitureComponent) => void;
}

export default function PropertyPanel({
  selectedComponent,
  onUpdateComponent,
  onDeleteComponent,
  onDuplicateComponent
}: PropertyPanelProps) {
  const [activeTab, setActiveTab] = useState<'basic' | 'materials' | 'advanced'>('basic');

  if (!selectedComponent) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-white/50">
          <Move3d size={48} className="mx-auto mb-3 opacity-50" />
          <p className="text-sm">Selecciona un componente para editar sus propiedades</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-white">{selectedComponent.name}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => onDuplicateComponent(selectedComponent)}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-colors"
              title="Duplicar"
            >
              <Copy size={14} />
            </button>
            <button
              onClick={() => onDeleteComponent(selectedComponent.id)}
              className="p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded transition-colors"
              title="Eliminar"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
        
        <div className="flex gap-2">
          {(['basic', 'materials', 'advanced'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                activeTab === tab
                  ? 'bg-[#22BDDD] text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {tab === 'basic' ? 'Básico' : tab === 'materials' ? 'Materiales' : 'Avanzado'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'basic' && <BasicProperties component={selectedComponent} onUpdate={onUpdateComponent} />}
        {activeTab === 'materials' && <MaterialProperties component={selectedComponent} onUpdate={onUpdateComponent} />}
        {activeTab === 'advanced' && <AdvancedProperties component={selectedComponent} onUpdate={onUpdateComponent} />}
      </div>
    </div>
  );
}

function BasicProperties({ 
  component, 
  onUpdate 
}: { 
  component: FurnitureComponent; 
  onUpdate: (componentId: string, updates: Partial<FurnitureComponent>) => void; 
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Dimensiones (cm)</label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs text-white/40 mb-1">Ancho</label>
            <input
              type="number"
              value={component.dimensions.width}
              onChange={(e) => onUpdate(component.id, {
                dimensions: { ...component.dimensions, width: Number(e.target.value) }
              })}
              className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1">Alto</label>
            <input
              type="number"
              value={component.dimensions.height}
              onChange={(e) => onUpdate(component.id, {
                dimensions: { ...component.dimensions, height: Number(e.target.value) }
              })}
              className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1">Prof.</label>
            <input
              type="number"
              value={component.dimensions.depth}
              onChange={(e) => onUpdate(component.id, {
                dimensions: { ...component.dimensions, depth: Number(e.target.value) }
              })}
              className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Posición (cm)</label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs text-white/40 mb-1">X</label>
            <input
              type="number"
              value={component.position.x}
              onChange={(e) => onUpdate(component.id, {
                position: { ...component.position, x: Number(e.target.value) }
              })}
              className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1">Y</label>
            <input
              type="number"
              value={component.position.y}
              onChange={(e) => onUpdate(component.id, {
                position: { ...component.position, y: Number(e.target.value) }
              })}
              className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1">Z</label>
            <input
              type="number"
              value={component.position.z}
              onChange={(e) => onUpdate(component.id, {
                position: { ...component.position, z: Number(e.target.value) }
              })}
              className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-white"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Información</label>
        <div className="space-y-2 text-xs text-white/40">
          <div>Tipo: <span className="text-white/60">{component.type}</span></div>
          <div>Categoría: <span className="text-white/60">{component.category}</span></div>
          <div>Precio: <span className="text-[#22BDDD]">S/.{component.price.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}

function MaterialProperties({ 
  component, 
  onUpdate 
}: { 
  component: FurnitureComponent; 
  onUpdate: (componentId: string, updates: Partial<FurnitureComponent>) => void; 
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Material Base</label>
        <select
          value={component.material}
          onChange={(e) => onUpdate(component.id, { material: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white"
        >
          <option value="melamina">Melamina</option>
          <option value="mdf">MDF</option>
          <option value="madera">Madera</option>
          <option value="metal">Metal</option>
          <option value="tripley">Triplay</option>
          <option value="cristal">Cristal</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Acabado</label>
        <select
          value={component.finish}
          onChange={(e) => onUpdate(component.id, { finish: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white"
        >
          <option value="blanco">Blanco</option>
          <option value="natural">Natural</option>
          <option value="laca">Laca</option>
          <option value="brillante">Brillante</option>
          <option value="mate">Mate</option>
          <option value="acero">Acero</option>
          <option value="bronce">Bronce</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Vista Previa</label>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="w-full h-20 bg-gradient-to-br from-white/10 to-white/5 rounded flex items-center justify-center">
            <div 
              className="w-12 h-12 rounded"
              style={{
                backgroundColor: component.material === 'metal' ? '#C0C0C0' :
                               component.material === 'madera' ? '#8B4513' :
                               component.material === 'tripley' ? '#DEB887' :
                               component.finish === 'negro' ? '#000000' : '#F5F5F5'
              }}
            />
          </div>
          <div className="mt-2 text-xs text-center text-white/40">
            {component.material} - {component.finish}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedProperties({ 
  component, 
  onUpdate 
}: { 
  component: FurnitureComponent; 
  onUpdate: (componentId: string, updates: Partial<FurnitureComponent>) => void; 
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">Precio Personalizado</label>
        <div className="flex items-center gap-2">
          <span className="text-white/40">S/.</span>
          <input
            type="number"
            value={component.price}
            onChange={(e) => onUpdate(component.id, { price: Number(e.target.value) })}
            className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white"
            step="0.01"
          />
        </div>
      </div>

      {component.constraints && (
        <div>
          <label className="block text-xs font-medium text-white/60 mb-2">Restricciones</label>
          <div className="space-y-2 text-xs text-white/40">
            {component.constraints.minWidth && (
              <div>Ancho mínimo: {component.constraints.minWidth}cm</div>
            )}
            {component.constraints.maxWidth && (
              <div>Ancho máximo: {component.constraints.maxWidth}cm</div>
            )}
            {component.constraints.minHeight && (
              <div>Altura mínima: {component.constraints.minHeight}cm</div>
            )}
            {component.constraints.maxHeight && (
              <div>Altura máxima: {component.constraints.maxHeight}cm</div>
            )}
            {component.constraints.minDepth && (
              <div>Profundidad mínima: {component.constraints.minDepth}cm</div>
            )}
            {component.constraints.maxDepth && (
              <div>Profundidad máxima: {component.constraints.maxDepth}cm</div>
            )}
          </div>
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-white/60 mb-2">ID del Componente</label>
        <input
          type="text"
          value={component.id}
          readOnly
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white/40"
        />
      </div>
    </div>
  );
}
