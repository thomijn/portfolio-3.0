import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Plane, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Terrain from "./Terrain";
import * as THREE from "three";
import { Floating } from "./Floating";
import ThreeShapes from "./ThreeShapes";
import { Debug, Physics } from "@react-three/rapier";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/thomas-idle-v1.glb");
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  }, [actions]);

  const { color } = useControls({
    color: "#ef4f4f",
  });

  // gsap scroll trigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(camera.position, {
      z: 2,
      y: 1,
      x: -0.2,
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        start: 1000,
        end: 1500,
        // markers: true,
      },
    });

    gsap.to(group.current.rotation, {
      y: -0.3,
      ease: "none",
      scrollTrigger: {
        scrub: 0.1,
        start: "top",
        start: 1000,
        end: 1500,
        // markers: true,
      },
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            frustumCulled={false}
            renderOrder={-1}
            castShadow
            receiveShadow
            smoothShading
            name="Mesh_0001"
            geometry={nodes.Mesh_0001.geometry}
            material={materials["Material_0.001"]}
            skeleton={nodes.Mesh_0001.skeleton}
          >
            <meshStandardMaterial smoothShading={true} color={color} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      shadows
      camera={{ zoom: 40, position: [0, 4, 150], rotation: [-0.015, 0, 0] }}
    >
      {/* <group position={[0, -0.8, 0]}>
        <Model />
      </group> */}

      <Floating scale={1} position={[0, 0.5, 0]} />
      <color attach="background" args={["#4a4a4a"]} />
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={0.2}
        position={[0, 1.2, 0]}
        color={0xffffff}
      />
      <Light />
      {/* <directionalLight
        castShadow
        intensity={1}
        position={[2, 10, 4]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
      <directionalLight intensity={0.5} position={[0, 2, 4]} />
      <directionalLight intensity={4} position={[2, 2, -1]} /> */}
      <Leva hidden />
      {/* <AccumulativeShadows
        color="red"
        colorBlend={1}
        toneMapped={true}
        temporal
        frames={32}
        position={[0, -0.8, 0]}
        scale={10}
        opacity={0.5}
      >
        <RandomizedLight amount={8} p
        osition={[2, 10, 10]} />
      </AccumulativeShadows> */}
      {/* <Plane
        args={[100, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.8, 0]}
        receiveShadow
      >
        <shadowMaterial color="#efefef" />
      </Plane> */}
      <Terrain />
      <ThreeShapes />
      <Environment preset="warehouse" />
      <CameraControls />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

const Light = () => {
  const ref = useRef();
  useFrame(({ mouse }) => {
    //lerp light position
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      mouse.x * 5,
      0.05
    );
    ref.current.position.z = THREE.MathUtils.lerp(
      ref.current.position.z,
      -mouse.y * 20,
      0.05
    );
  });
  return (
    <pointLight
      penumbra={1}
      ref={ref}
      intensity={2}
      position={[0, 1.5, 0]}
      color="white"
    />
  );
};

const CameraControls = () => {
  const { camera } = useThree();

  ///gsap scrolltrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(camera.position, {
      duration: 1,
      delay: 1,
      // ease: "power2.in",
      y: -2,
      scrollTrigger: {
        trigger: ".hero",
        start: 0,
        end: 1000,
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return null;
};

useGLTF.preload("/thomas-idle-v1.glb");
