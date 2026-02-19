import { useThree } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { FurnitureComponent } from '../../data/custom-designs/components';
import { useMemo } from 'react';

interface AlignmentGuidesProps {
  components: FurnitureComponent[];
  selectedComponentId?: string;
  snapThreshold?: number; // Distancia para activar snapping en cm
}

export default function AlignmentGuides({ 
  components, 
  selectedComponentId, 
  snapThreshold = 5 
}: AlignmentGuidesProps) {
  const { scene } = useThree();

  // Calcular guías de alineación
  const guides = useMemo(() => {
    if (!selectedComponentId) return [];

    const selectedComponent = components.find(c => c.id === selectedComponentId);
    if (!selectedComponent) return [];

    const guides: Array<{
      start: [number, number, number];
      end: [number, number, number];
      color: string;
      type: 'x' | 'z';
    }> = [];

    const otherComponents = components.filter(c => c.id !== selectedComponentId);

    // Guías de alineación en el eje X
    otherComponents.forEach(component => {
      const selectedCenterX = selectedComponent.position.x;
      const selectedLeftX = selectedComponent.position.x - selectedComponent.dimensions.width / 2;
      const selectedRightX = selectedComponent.position.x + selectedComponent.dimensions.width / 2;

      const componentCenterX = component.position.x;
      const componentLeftX = component.position.x - component.dimensions.width / 2;
      const componentRightX = component.position.x + component.dimensions.width / 2;

      // Alineación de centros
      if (Math.abs(selectedCenterX - componentCenterX) < snapThreshold) {
        guides.push({
          start: [componentCenterX / 100, 0.01, -5],
          end: [componentCenterX / 100, 0.01, 5],
          color: '#22BDDD',
          type: 'x'
        });
      }

      // Alineación de bordes izquierdos
      if (Math.abs(selectedLeftX - componentLeftX) < snapThreshold) {
        guides.push({
          start: [componentLeftX / 100, 0.01, -5],
          end: [componentLeftX / 100, 0.01, 5],
          color: '#22BDDD',
          type: 'x'
        });
      }

      // Alineación de bordes derechos
      if (Math.abs(selectedRightX - componentRightX) < snapThreshold) {
        guides.push({
          start: [componentRightX / 100, 0.01, -5],
          end: [componentRightX / 100, 0.01, 5],
          color: '#22BDDD',
          type: 'x'
        });
      }
    });

    // Guías de alineación en el eje Z
    otherComponents.forEach(component => {
      const selectedCenterZ = selectedComponent.position.z;
      const selectedFrontZ = selectedComponent.position.z - selectedComponent.dimensions.depth / 2;
      const selectedBackZ = selectedComponent.position.z + selectedComponent.dimensions.depth / 2;

      const componentCenterZ = component.position.z;
      const componentFrontZ = component.position.z - component.dimensions.depth / 2;
      const componentBackZ = component.position.z + component.dimensions.depth / 2;

      // Alineación de centros
      if (Math.abs(selectedCenterZ - componentCenterZ) < snapThreshold) {
        guides.push({
          start: [-5, 0.01, componentCenterZ / 100],
          end: [5, 0.01, componentCenterZ / 100],
          color: '#22BDDD',
          type: 'z'
        });
      }

      // Alineación de bordes frontales
      if (Math.abs(selectedFrontZ - componentFrontZ) < snapThreshold) {
        guides.push({
          start: [-5, 0.01, componentFrontZ / 100],
          end: [5, 0.01, componentFrontZ / 100],
          color: '#22BDDD',
          type: 'z'
        });
      }

      // Alineación de bordes traseros
      if (Math.abs(selectedBackZ - componentBackZ) < snapThreshold) {
        guides.push({
          start: [-5, 0.01, componentBackZ / 100],
          end: [5, 0.01, componentBackZ / 100],
          color: '#22BDDD',
          type: 'z'
        });
      }
    });

    return guides;
  }, [components, selectedComponentId, snapThreshold]);

  return (
    <>
      {guides.map((guide, index) => (
        <Line
          key={index}
          points={[guide.start, guide.end]}
          color={guide.color}
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      ))}
    </>
  );
}
