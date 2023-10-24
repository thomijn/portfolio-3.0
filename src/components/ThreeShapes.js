import React, { useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

const material = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color("#fff").convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

function ThreeShapes({ vec = new THREE.Vector3(), shapeType, scale }) {
  const shapeRef = useRef();

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    // shapeRef.current?.applyImpulse(vec.copy(shapeRef.current.translation()).negate().multiplyScalar(0.2));
  });

  let geometry;

  // Create a random shape based on the shapeType prop
  switch (shapeType) {
    case "sphere":
      geometry = <sphereBufferGeometry args={[1.5, 32, 32]} />;
      break;
    case "cone":
      geometry = <coneBufferGeometry args={[1.5, 3, 32]} />;
      break;
    case "cube":
      geometry = <boxBufferGeometry args={[1.5, 1.5, 1.5]} />;
      break;
    default:
      geometry = <sphereBufferGeometry args={[1.5, 32, 32]} />;
      break;
  }

  return (
    <group scale={1}>
      <RigidBody colliders='hull' scale={scale} position={vec} linearDamping={4} angularDamping={1} friction={0.1} ref={shapeRef}>
        <motion.mesh material={material}>{geometry}</motion.mesh>
      </RigidBody>
    </group>
  );
}

export default ThreeShapes;
