import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, RotateCcw, Grid3x3, Move3D, Maximize2, Monitor, Smartphone } from 'lucide-react';
import { furnitureTemplates } from '../data/custom-designs/templates';
import { FurnitureComponent } from '../data/custom-designs/components';
import ComponentLibrary from '../components/editor/ComponentLibrary';
import TemplateSelector from '../components/editor/TemplateSelector';
import PropertyPanel from '../components/editor/PropertyPanel';
import Viewport3D from '../components/editor/Viewport3D';

export default function EditorPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [components, setComponents] = useState<FurnitureComponent[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string>('');
  const [showGrid, setShowGrid] = useState(true);
  const [sidebarMode, setSidebarMode] = useState<'templates' | 'components'>('templates');
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [draggedComponent, setDraggedComponent] = useState<FurnitureComponent | null>(null);

  // Detectar si es desktop
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Obtener componente seleccionado
  const selectedComponent = components.find(c => c.id === selectedComponentId);

  // Cargar plantilla
  const loadTemplate = useCallback((templateId: string) => {
    const template = furnitureTemplates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setComponents([...template.components]);
      setSelectedComponentId('');
    }
  }, []);

  // Manejar drag and drop
  const handleDragStart = useCallback((component: FurnitureComponent) => {
    setDraggedComponent(component);
  }, []);
  
  const handleComponentDrop = useCallback((position: { x: number; y: number; z: number }) => {
    if (draggedComponent) {
      const newComponent = {
        ...draggedComponent,
        id: `${draggedComponent.id}-${Date.now()}`,
        position
      };
      setComponents(prev => [...prev, newComponent]);
      setSelectedComponentId(newComponent.id);
      setDraggedComponent(null);
    }
  }, [draggedComponent]);
  // Añadir componente (método original)
  const addComponent = useCallback((component: FurnitureComponent) => {
    const newComponent = {
      ...component,
      id: `${component.id}-${Date.now()}`,
      position: { x: 0, y: 0, z: 0 }
    };
    setComponents(prev => [...prev, newComponent]);
    setSelectedComponentId(newComponent.id);
  }, []);

  // Eliminar componente
  const removeComponent = useCallback((componentId: string) => {
    setComponents(prev => prev.filter(c => c.id !== componentId));
    if (selectedComponentId === componentId) {
      setSelectedComponentId('');
    }
  }, [selectedComponentId]);

  // Actualizar componente
  const updateComponent = useCallback((componentId: string, updates: Partial<FurnitureComponent>) => {
    setComponents(prev => prev.map(c => 
      c.id === componentId ? { ...c, ...updates } : c
    ));
  }, []);

  // Duplicar componente
  const duplicateComponent = useCallback((component: FurnitureComponent) => {
    const newComponent = {
      ...component,
      id: `${component.id}-copy-${Date.now()}`,
      position: { 
        x: component.position.x + 10, 
        y: component.position.y, 
        z: component.position.z + 10 
      }
    };
    setComponents(prev => [...prev, newComponent]);
    setSelectedComponentId(newComponent.id);
  }, []);

  // Limpiar todo
  const clearAll = useCallback(() => {
    setComponents([]);
    setSelectedComponentId('');
    setSelectedTemplate('');
  }, []);

  // Calcular precio estimado
  const calculatePrice = useCallback(() => {
    const basePrice = components.reduce((total, component) => total + component.price, 0);
    const materialCost = components.length * 25; // Costo estimado de materiales
    const laborCost = components.length * 15; // Costo estimado de mano de obra
    return basePrice + materialCost + laborCost;
  }, [components]);

  // Si no es desktop, mostrar mensaje (después de todos los hooks)
  if (!isDesktop) {
    return (
      <div className="min-h-screen bg-[#061230] text-white flex items-center justify-center px-5">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-[#1A8FBB]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Smartphone className="text-[#22BDDD]" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Editor 3D Solo Disponible en Desktop
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Lo sentimos, el editor 3D requiere una pantalla más grande para una mejor experiencia. 
            Por favor, accede desde una computadora o laptop para diseñar tus muebles personalizados.
          </p>
          <div className="space-y-4">
            <Link
              to="/catalogo"
              className="block w-full bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Volver al Catálogo
            </Link>
            <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
              <Monitor size={16} />
              <span>Recomendado: Pantalla de 1024px o más</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#061230] text-white">
      {/* Header */}
      <header className="bg-[#0B2545]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/catalogo"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              Volver al Catálogo
            </Link>
            <h1 className="text-xl font-bold">Editor de Diseño 3D</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-2 rounded-lg transition-colors ${
                showGrid ? 'bg-[#22BDDD] text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              title="Mostrar/Ocultar Grid"
            >
              <Grid3x3 size={18} />
            </button>
            <button
              onClick={clearAll}
              className="p-2 bg-white/10 text-white/70 hover:bg-white/20 rounded-lg transition-colors"
              title="Limpiar Todo"
            >
              <RotateCcw size={18} />
            </button>
            <button
              className="px-4 py-2 bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Save size={16} />
              Guardar Diseño
            </button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar Izquierdo - Plantillas y Componentes */}
        <div className="w-80 bg-[#0B2545]/50 backdrop-blur-sm border-r border-white/10 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/10 flex-shrink-0">
            <button
              className={`flex-1 px-4 py-3 font-medium transition-colors ${
                sidebarMode === 'templates' ? 'bg-[#22BDDD]/20 text-[#22BDDD]' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setSidebarMode('templates')}
            >
              Plantillas
            </button>
            <button
              className={`flex-1 px-4 py-3 font-medium transition-colors ${
                sidebarMode === 'components' ? 'bg-[#22BDDD]/20 text-[#22BDDD]' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setSidebarMode('components')}
            >
              Componentes
            </button>
          </div>

          {/* Content con scroll */}
          <div className="flex-1 overflow-y-auto">
            {sidebarMode === 'templates' ? (
              <TemplateSelector
                onTemplateSelect={loadTemplate}
                selectedTemplate={selectedTemplate}
              />
            ) : (
              <ComponentLibrary
                onComponentSelect={addComponent}
                selectedCategory={currentCategory}
                onCategoryChange={setCurrentCategory}
                onDragStart={handleDragStart}
              />
            )}
          </div>
        </div>

        {/* Área Principal - Canvas 3D */}
        <div className="flex-1 relative">
          <Viewport3D
            components={components}
            selectedComponentId={selectedComponentId}
            onComponentSelect={setSelectedComponentId}
            onComponentUpdate={updateComponent}
            onComponentDrop={handleComponentDrop}
            showGrid={showGrid}
          />

          {/* Controles de Vista */}
          <div className="absolute top-4 right-4 bg-[#0B2545]/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
            <div className="flex flex-col gap-2">
              <button
                className="p-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
                title="Vista Frontal"
              >
                <Move3D size={16} />
              </button>
              <button
                className="p-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
                title="Vista Superior"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          {/* Información del Diseño */}
          <div className="absolute bottom-4 left-4 bg-[#0B2545]/80 backdrop-blur-md rounded-lg p-4 border border-white/10 max-w-sm">
            <h3 className="font-semibold text-sm mb-2">Información del Diseño</h3>
            <div className="space-y-1 text-xs text-white/70">
              <div>Componentes: {components.length}</div>
              <div>Precio Estimado: S/.{calculatePrice().toFixed(2)}</div>
              {selectedTemplate && (
                <div>Plantilla: {furnitureTemplates.find(t => t.id === selectedTemplate)?.name}</div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Derecho - Propiedades */}
        <div className="w-80 bg-[#0B2545]/50 backdrop-blur-sm border-l border-white/10">
          <PropertyPanel
            selectedComponent={selectedComponent || null}
            onUpdateComponent={updateComponent}
            onDeleteComponent={removeComponent}
            onDuplicateComponent={duplicateComponent}
          />
        </div>
      </div>
    </div>
  );
}
