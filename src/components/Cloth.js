import { motion } from "framer-motion-3d";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Cloth(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cloth-sim.glb");
  const { actions } = useAnimations(animations, group);
  const [scroll, setScroll] = useState(0);

  //get scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      setScroll(position);
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scrub through animation based on scroll position
  useEffect(() => {
    if (scroll > 0) {
      actions["Key.002Action"].play();
      actions["Key.002Action"].paused = true;
      actions["Key.002Action"].clampWhenFinished = true;

      //scrub through animation based on scroll position
      actions["Key.002Action"].time = scroll / 300;
    }
  }, [scroll]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="cloth"
        geometry={nodes.cloth.geometry}
        material={nodes.cloth.material}
        morphTargetDictionary={nodes.cloth.morphTargetDictionary}
        morphTargetInfluences={nodes.cloth.morphTargetInfluences}
        // position={[0, 4.7, 1.05]}
        // rotation={[-1.88, -0.07, -0.01]}
      >
        <meshStandardMaterial side={THREE.DoubleSide} color="#ef4f4f" />
      </mesh>
    </group>
  );
}

export const Occlude = () => {
  const [scroll, setScroll] = useState(0);
  const plane = useRef();
  //get scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      //   console.log(position);
      setScroll(position);
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    // move the plane back and forth based on scroll position with the lowest value of y being 1 and highest value of 4.4

    plane.current.position.y = 4.4 - scroll / 200;

    // if (scroll > 0 && plane.current.position.y > 1) {
    //   plane.current.position.y = 4.4 - scroll / 200;
    // } else if (scroll > 0 && plane.current.position.y < 1) {
    //   plane.current.position.y = 1 + scroll / 200;
    // }
  });

  return (
    <motion.mesh ref={plane} renderOrder={-1} position={[0, 4.4, 0.5]}>
      <planeBufferGeometry args={[1, 2.5]} />
      <meshBasicMaterial side={THREE.DoubleSide} colorWrite={false} />
    </motion.mesh>
  );
};

useGLTF.preload("/cloth-sim.glb");
