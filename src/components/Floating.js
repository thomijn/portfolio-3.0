/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useWindowSize from "../hooks/useWindowSize";

export function Floating(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/me-floating.glb");
  const { actions } = useAnimations(animations, group);
  const { width } = useWindowSize();

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
    //change timescale
    // actions["Armature|mixamo.com|Layer0"].timeScale = 0.5;
  }, [actions]);

  useFrame((state, delta) => {
    //lerp rotation with mouse
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.mouse.x * 0.5,
      0.1
    );

    //lerp x position with mouse
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.mouse.x * 0.5 + 4,
      0.1
    );

  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Mesh_0001"
            geometry={nodes.Mesh_0001.geometry}
            material={materials["Material_0.001"]}
            skeleton={nodes.Mesh_0001.skeleton}
            frustumCulled={false}
          >
            <meshPhysicalMaterial roughness={0.2} smoothShading={true} color={"white"} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/me-floating.glb");
