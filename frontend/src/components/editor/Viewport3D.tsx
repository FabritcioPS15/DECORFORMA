import { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, PerspectiveCamera, TransformControls } from '@react-three/drei';
import { Move3D, RotateCcw, Maximize2, View, Box } from 'lucide-react';
import { FurnitureComponent } from '../../data/custom-designs/components';
import AlignmentGuides from './AlignmentGuides';
import { getCollidingComponents, resolveCollision } from '../../utils/collisionDetection';

interface Viewport3DProps {
  components: FurnitureComponent[];
  selectedComponentId?: string;
  onComponentSelect?: (componentId: string) => void;
  onComponentUpdate?: (componentId: string, updates: Partial<FurnitureComponent>) => void;
  onComponentDrop?: (position: { x: number; y: number; z: number }) => void;
  showGrid?: boolean;
  showWireframe?: boolean;
  snapToGrid?: boolean;
  gridSize?: number;
  enableCollisionDetection?: boolean;
  viewMode?: 'perspective' | 'top' | 'front' | 'side';
}

// Componente para manejo de snapping
function SnappingHelper() {
  // Este componente ayudará a implementar el snapping más adelante
  return null;
}

// Componente 3D para un mueble
function FurnitureMesh({ 
  component, 
  isSelected, 
  onClick, 
  onTransform,
  transformMode,
  allComponents,
  enableCollisionDetection
}: { 
  component: FurnitureComponent; 
  isSelected: boolean; 
  onClick: () => void;
  onTransform?: (componentId: string, position: any) => void;
  transformMode: 'translate' | 'rotate' | 'scale';
  allComponents: FurnitureComponent[];
  enableCollisionDetection: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<any>(null);
  const transformRef = useRef<any>(null);
  const [isTransforming, setIsTransforming] = useState(false);

  const getMaterialProperties = (material: string, finish: string) => {
    const materialMap: Record<string, Record<string, any>> = {
      melamina: {
        blanco: { color: '#f5f5f5', metalness: 0.1, roughness: 0.4 },
        gris: { color: '#808080', metalness: 0.1, roughness: 0.4 },
        roble: { color: '#DEB887', metalness: 0.1, roughness: 0.6 },
        nogal: { color: '#8B4513', metalness: 0.1, roughness: 0.6 },
        negro: { color: '#1a1a1a', metalness: 0.1, roughness: 0.3 }
      },
      mdf: {
        crudo: { color: '#F5DEB3', metalness: 0.0, roughness: 0.8 },
        laca: { color: '#ffffff', metalness: 0.2, roughness: 0.1 },
        negro: { color: '#000000', metalness: 0.3, roughness: 0.1 }
      },
      madera: {
        natural: { color: '#8B4513', metalness: 0.0, roughness: 0.7 },
        caoba: { color: '#C04000', metalness: 0.0, roughness: 0.6 },
        cedro: { color: '#A0826D', metalness: 0.0, roughness: 0.7 },
        pino: { color: '#D2691E', metalness: 0.0, roughness: 0.8 }
      },
      metal: {
        acero: { color: '#C0C0C0', metalness: 0.9, roughness: 0.2 },
        aluminio: { color: '#848484', metalness: 0.8, roughness: 0.3 },
        bronce: { color: '#CD7F32', metalness: 0.7, roughness: 0.4 },
        negro: { color: '#1a1a1a', metalness: 0.8, roughness: 0.2 }
      },
      triplay: {
        natural: { color: '#D2691E', metalness: 0.0, roughness: 0.9 },
        pintado: { color: '#ffffff', metalness: 0.1, roughness: 0.5 },
        barniz: { color: '#DEB887', metalness: 0.1, roughness: 0.4 }
      },
      cristal: {
        transparente: { color: '#ffffff', metalness: 0.0, roughness: 0.0, transparent: true, opacity: 0.3 },
        esmerilado: { color: '#f0f0f0', metalness: 0.0, roughness: 0.8, transparent: true, opacity: 0.6 },
        bronce: { color: '#8B4513', metalness: 0.1, roughness: 0.2, transparent: true, opacity: 0.4 }
      }
    };

    return materialMap[material]?.[finish] || materialMap.melamina.blanco;
  };

  const materialProps = getMaterialProperties(component.material, component.finish);
  
  // Manejar transformaciones con detección de colisiones
  const handleTransformChange = useCallback(() => {
    if (meshRef.current && onTransform && isTransforming) {
      const position = meshRef.current.position;
      const newPosition = {
        x: Math.round(position.x * 100), // Convertir de metros a cm
        y: Math.round(position.y * 100),
        z: Math.round(position.z * 100)
      };
      
      // Verificar colisiones si está habilitado
      if (enableCollisionDetection) {
        const tempComponent = {
          ...component,
          position: newPosition
        };
        
        const collidingComponents = getCollidingComponents(tempComponent, allComponents, component.id);
        
        if (collidingComponents.length > 0) {
          // Resolver colisión con el primer componente detectado
          const resolvedPosition = resolveCollision(tempComponent, collidingComponents[0]);
          meshRef.current.position.set(
            resolvedPosition.x / 100,
            resolvedPosition.y / 100,
            resolvedPosition.z / 100
          );
          onTransform(component.id, resolvedPosition);
          return;
        }
      }
      
      onTransform(component.id, newPosition);
    }
  }, [component.id, onTransform, isTransforming, allComponents, enableCollisionDetection, component]);
  
  useEffect(() => {
    if (isSelected && meshRef.current) {
      meshRef.current.position.set(
        component.position.x / 100,
        component.position.y / 100,
        component.position.z / 100
      );
    }
  }, [component.position, isSelected]);

  return (
    <>
      <mesh
        ref={meshRef}
        position={[
          component.position.x / 100, // Convertir cm a metros
          component.position.y / 100,
          component.position.z / 100
        ]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry
          args={[
            component.dimensions.width / 100,
            component.dimensions.height / 100,
            component.dimensions.depth / 100
          ]}
        />
        <meshStandardMaterial
          {...materialProps}
          wireframe={isSelected || hovered}
          emissive={isSelected ? '#22BDDD' : undefined}
          emissiveIntensity={isSelected ? 0.3 : 0}
        />
      </mesh>
      
      {isSelected && (
        <TransformControls
          ref={transformRef}
          object={meshRef}
          mode={transformMode}
          onObjectChange={handleTransformChange}
          onMouseDown={() => setIsTransforming(true)}
          onMouseUp={() => setIsTransforming(false)}
        />
      )}
    </>
  );
}

export default function Viewport3D({
  components,
  selectedComponentId,
  onComponentSelect,
  onComponentUpdate,
  onComponentDrop,
  showGrid = true,
  showWireframe = false,
  snapToGrid = true,
  gridSize = 0.5,
  enableCollisionDetection = true,
  viewMode = 'perspective'
}: Viewport3DProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [transformMode, setTransformMode] = useState<'translate' | 'rotate' | 'scale'>('translate');
  const [isDragOver, setIsDragOver] = useState(false);
  const [currentViewMode, setCurrentViewMode] = useState(viewMode);
  
  // Configuraciones de cámara para diferentes vistas
  const cameraPositions = {
    perspective: { position: [4, 3, 4] as [number, number, number], fov: 60 },
    top: { position: [0, 8, 0] as [number, number, number], fov: 45 },
    front: { position: [0, 2, 8] as [number, number, number], fov: 50 },
    side: { position: [8, 2, 0] as [number, number, number], fov: 50 }
  };
  
  const currentCameraConfig = cameraPositions[currentViewMode];
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (onComponentDrop && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Convertir coordenadas de pantalla a coordenadas 3D aproximadas
      const worldX = Math.round(x * 200); // Convertir a cm
      const worldZ = Math.round(y * 200); // Convertir a cm
      
      onComponentDrop({ x: worldX, y: 0, z: worldZ });
    }
  }, [onComponentDrop]);

  return (
    <div 
      ref={canvasRef} 
      className={`w-full h-full relative ${
        isDragOver ? 'ring-2 ring-[#22BDDD] ring-offset-2 ring-offset-[#061230]' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Canvas
        camera={{ position: currentCameraConfig.position, fov: currentCameraConfig.fov }}
        className="bg-gradient-to-b from-[#0B2545]/20 to-[#061230]/40"
      >
        <PerspectiveCamera makeDefault />
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={currentViewMode === 'perspective'}
          minDistance={1}
          maxDistance={10}
          maxPolarAngle={currentViewMode === 'perspective' ? Math.PI / 2 : 0}
          minPolarAngle={currentViewMode === 'top' ? Math.PI / 2 : 0}
        />
        
        {showGrid && (
          <Grid
            args={[10, 10]}
            cellSize={0.5}
            cellThickness={0.5}
            cellColor="#6b7280"
            sectionSize={2}
            sectionThickness={1}
            sectionColor="#22BDDD"
            fadeDistance={30}
            fadeStrength={1}
            followCamera={false}
            infiniteGrid={true}
          />
        )}
        
        {/* Iluminación mejorada */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight 
          position={[-10, 5, -5]} 
          intensity={0.6}
          color="#ffffff"
        />
        <spotLight
          position={[0, 8, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
          color="#ffffff"
        />
        
        {/* Componentes 3D */}
        {components.map((component) => (
          <FurnitureMesh
            key={component.id}
            component={component}
            isSelected={selectedComponentId === component.id}
            onClick={() => onComponentSelect?.(component.id)}
            onTransform={onComponentUpdate}
            transformMode={transformMode}
            allComponents={components}
            enableCollisionDetection={enableCollisionDetection}
          />
        ))}
        
        {/* Guías de alineación */}
        <AlignmentGuides
          components={components}
          selectedComponentId={selectedComponentId}
          snapThreshold={5}
        />
        
        {/* Helper de snapping */}
        <SnappingHelper />

        {/* Suelo con textura */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial 
            color="#061230" 
            opacity={0.8} 
            transparent
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </Canvas>
      
      {/* Controles de Vista */}
      <div className="absolute top-4 left-4 bg-[#0B2545]/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
        <div className="flex flex-col gap-2">
          <button
            className={`p-2 rounded transition-colors ${
              currentViewMode === 'perspective' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setCurrentViewMode('perspective')}
            title="Vista Perspectiva"
          >
            <Box size={16} />
          </button>
          <button
            className={`p-2 rounded transition-colors ${
              currentViewMode === 'top' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setCurrentViewMode('top')}
            title="Vista Superior"
          >
            <View size={16} />
          </button>
          <button
            className={`p-2 rounded transition-colors ${
              currentViewMode === 'front' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setCurrentViewMode('front')}
            title="Vista Frontal"
          >
            <Box size={16} />
          </button>
          <button
            className={`p-2 rounded transition-colors ${
              currentViewMode === 'side' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setCurrentViewMode('side')}
            title="Vista Lateral"
          >
            <Box size={16} />
          </button>
        </div>
      </div>
      
      {/* Controles de Transformación */}
      <div className="absolute top-4 right-4 bg-[#0B2545]/80 backdrop-blur-md rounded-lg p-2 border border-white/10">
        <div className="flex flex-col gap-2">
          <button
            className={`p-2 rounded transition-colors ${
              transformMode === 'translate' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setTransformMode('translate')}
            title="Mover"
          >
            <Move3D size={16} />
          </button>
          <button
            className={`p-2 rounded transition-colors ${
              transformMode === 'rotate' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setTransformMode('rotate')}
            title="Rotar"
          >
            <RotateCcw size={16} />
          </button>
          <button
            className={`p-2 rounded transition-colors ${
              transformMode === 'scale' 
                ? 'bg-[#22BDDD] text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/70'
            }`}
            onClick={() => setTransformMode('scale')}
            title="Escalar"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
