import { FurnitureComponent } from '../data/custom-designs/components';

export interface BoundingBox {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
}

export function getBoundingBox(component: FurnitureComponent): BoundingBox {
  const halfWidth = component.dimensions.width / 2;
  const halfHeight = component.dimensions.height / 2;
  const halfDepth = component.dimensions.depth / 2;

  return {
    minX: component.position.x - halfWidth,
    maxX: component.position.x + halfWidth,
    minY: component.position.y - halfHeight,
    maxY: component.position.y + halfHeight,
    minZ: component.position.z - halfDepth,
    maxZ: component.position.z + halfDepth,
  };
}

export function checkCollision(box1: BoundingBox, box2: BoundingBox): boolean {
  return (
    box1.minX < box2.maxX &&
    box1.maxX > box2.minX &&
    box1.minY < box2.maxY &&
    box1.maxY > box2.minY &&
    box1.minZ < box2.maxZ &&
    box1.maxZ > box2.minZ
  );
}

export function getCollidingComponents(
  component: FurnitureComponent,
  allComponents: FurnitureComponent[],
  excludeId?: string
): FurnitureComponent[] {
  const componentBox = getBoundingBox(component);
  
  return allComponents.filter(other => {
    if (other.id === component.id || other.id === excludeId) return false;
    
    const otherBox = getBoundingBox(other);
    return checkCollision(componentBox, otherBox);
  });
}

export function getCollisionInfo(
  component: FurnitureComponent,
  other: FurnitureComponent
): {
  hasCollision: boolean;
  penetrationDepth: number;
  collisionAxis: 'x' | 'y' | 'z' | 'none';
} {
  const box1 = getBoundingBox(component);
  const box2 = getBoundingBox(other);
  
  if (!checkCollision(box1, box2)) {
    return { hasCollision: false, penetrationDepth: 0, collisionAxis: 'none' };
  }
  
  // Calcular profundidad de penetración en cada eje
  const penetrationX = Math.min(box1.maxX - box2.minX, box2.maxX - box1.minX);
  const penetrationY = Math.min(box1.maxY - box2.minY, box2.maxY - box1.minY);
  const penetrationZ = Math.min(box1.maxZ - box2.minZ, box2.maxZ - box1.minZ);
  
  // Encontrar el eje con menor penetración (para resolver colisión)
  const minPenetration = Math.min(penetrationX, penetrationY, penetrationZ);
  
  let collisionAxis: 'x' | 'y' | 'z' = 'x';
  if (minPenetration === penetrationY) collisionAxis = 'y';
  else if (minPenetration === penetrationZ) collisionAxis = 'z';
  
  return {
    hasCollision: true,
    penetrationDepth: minPenetration,
    collisionAxis
  };
}

export function resolveCollision(
  component: FurnitureComponent,
  other: FurnitureComponent
): { x: number; y: number; z: number } {
  const collisionInfo = getCollisionInfo(component, other);
  
  if (!collisionInfo.hasCollision) {
    return component.position;
  }
  
  const newPosition = { ...component.position };
  const offset = collisionInfo.penetrationDepth / 2 + 1; // Pequeña separación adicional
  
  switch (collisionInfo.collisionAxis) {
    case 'x':
      if (component.position.x < other.position.x) {
        newPosition.x -= offset;
      } else {
        newPosition.x += offset;
      }
      break;
    case 'y':
      if (component.position.y < other.position.y) {
        newPosition.y -= offset;
      } else {
        newPosition.y += offset;
      }
      break;
    case 'z':
      if (component.position.z < other.position.z) {
        newPosition.z -= offset;
      } else {
        newPosition.z += offset;
      }
      break;
  }
  
  return newPosition;
}
