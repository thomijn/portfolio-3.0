import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Cone } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";

const material = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color("#fff").convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

function ThreeShapes() {
  const groupRef = useRef();
  const boxRef = useRef();
  const sphereRef = useRef();
  const coneRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: 800,
        end: 1300,
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      groupRef.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        ease: "power4.out",
        duration: 0.5,
        x: 0.4,
        y: 0.4,
        z: 0.4,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  useFrame(({ mouse }) => {
    //spin rotate invidually
    boxRef.current.rotation.y += 0.008;
    boxRef.current.rotation.x += 0.008;
    boxRef.current.rotation.z += 0.008;
    coneRef.current.rotation.y += 0.008;
    coneRef.current.rotation.z += 0.008;
    coneRef.current.rotation.z += 0.008;

    //spin rotate all together
    groupRef.current.rotation.y += 0.002;
    groupRef.current.rotation.x += 0.002;
    groupRef.current.rotation.z += 0.002;
  });

  return (
    <group scale={0.4} position={[2, -5, 0]} ref={groupRef}>
      <motion.mesh ref={boxRef} material={material}>
        <boxBufferGeometry args={[1.5, 1.5, 1.5]} />
      </motion.mesh>
      <motion.mesh ref={sphereRef} position={[1.5, 2, 0]} material={material}>
        <sphereBufferGeometry args={[1, 32, 32]} />
      </motion.mesh>
      <motion.mesh ref={coneRef} position={[-2, -2, 0]} material={material}>
        <coneBufferGeometry
          args={[
            1, // radius
            2, // height
            32, // radialSegments
          ]}
        />
      </motion.mesh>
    </group>
  );
}

export default ThreeShapes;
