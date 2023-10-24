import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations, Plane, Environment, Lightformer, Sphere, MeshTransmissionMaterial, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { Floating } from "./Floating";
import ThreeShapes from "./ThreeShapes";
import { RigidBody, BallCollider, Physics, InstancedRigidBodies } from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import Tubes from "./Tubes";
import LumbOffBalls from "./LumbOffBalls";

const COUNT = window.innerWidth < 768 ? 20 : 75;


const Balls = () => {
  const rigidBodies = useRef(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (!rigidBodies.current) {
      return;
    }

  }, []);

  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < COUNT; i++) {
      instances.push({
        key: "instance_" + Math.random(),
        position: [
          Math.random() * viewport.width - viewport.width / 2,
          Math.random() * viewport.height - viewport.height / 2 + 8,
          Math.random() * 5 - 2.5
        ],
        scale: Math.random() * 0.5 + 0.5,
        rotation: [Math.random(), Math.random(), Math.random()]
      });
    }

    return instances;
  }, []);

  return (
    <InstancedRigidBodies
      ref={rigidBodies}
      instances={instances}
      colliders="ball"
    >
      <instancedMesh
        geometry={new THREE.SphereGeometry(1, 32, 32)}
        material={new THREE.MeshPhysicalMaterial({
          color: "white",
          roughness: 0.2,
          transparent: true,
          opacity: 1,
          envMapIntensity: 1,
          side: THREE.DoubleSide,
        })}

        args={[undefined, undefined, COUNT]} count={COUNT} />
    </InstancedRigidBodies>
  );
};

const CameraControls = () => {
  const { camera } = useThree();
  const { viewport } = useThree();

  //scroll camera up on scroll gsap
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(camera.position, {
      y: -20,
      scrollTrigger: {
        start: 0,
        end: '100%',
        scrub: true,
        ease: "power1.inOut",
      },
    });
  }, []);

  return null;
};

function Borders() {
  const { viewport } = useThree()
  const [close, setClose] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClose(true)
    }
      , 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <RigidBody position={[0, (-viewport.height / 2) - 19.06, 0]} rotation={[-Math.PI / 2, 0, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, 6, 1]}
        >
          <shadowMaterial transparent opacity={0.2} />

        </Plane>
      </RigidBody>
      <RigidBody position={[-viewport.width / 2 - 0, -19.06, 0]} rotation={[0, Math.PI / 2, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height + 0, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />

        </Plane>
      </RigidBody>
      <RigidBody position={[viewport.width / 2 + 0, -19.06, 0]} rotation={[0, -Math.PI / 2, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height + 0, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />

        </Plane>
      </RigidBody>
      <RigidBody position={[0, -19.06, -3]} rotation={[0, 0, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, 100, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />
        </Plane>
      </RigidBody>
      <RigidBody position={[0, -19.06, 3]} rotation={[0, -Math.PI, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />
        </Plane>
      </RigidBody>


      {
        //top
      }
      <RigidBody position={[0, -viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, 6, 1]}
        >
          <shadowMaterial transparent opacity={0.2} />

        </Plane>
      </RigidBody>
      <RigidBody position={[-viewport.width / 2 - 0, 0, 0]} rotation={[0, Math.PI / 2, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height+ 20, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />

        </Plane>
      </RigidBody>
      <RigidBody position={[viewport.width / 2 + 0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height+ 20, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />

        </Plane>
      </RigidBody>
      <RigidBody position={[0, 0, -3]} rotation={[0, 0, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height + 20, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />
        </Plane>
      </RigidBody>
      <RigidBody position={[0, 0, 3]} rotation={[0, -Math.PI, 0]} colliders="cuboid">
        <Plane
          args={[viewport.width, viewport.height + 20, 10]}
        >
          <shadowMaterial transparent opacity={0.2} />
        </Plane>
      </RigidBody>
      {
        close &&

        <RigidBody position={[0, viewport.height / 2, 0]} rotation={[Math.PI / 2, 0, 0]} colliders="cuboid">
          <Plane
            args={[viewport.width, 6, 1]}
          >
            <shadowMaterial transparent opacity={0.2} />
          </Plane>
        </RigidBody>
      }
    </>
  )
}

export default function Scene() {
  const [go, setGo] = useState(false)
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      shadows
      dpr={[1, 1.5]} gl={{ antialias: false }} orthographic camera={{ position: [0, 0, 100], zoom: 100 }}
    >
      {/* <color attach="background" args={["#d2d2d2"]} /> */}
      <ambientLight intensity={0.4} />
      <directionalLight
        intensity={1}
        position={[-20, 10, 0]}
        color={0xffffff}
      />
      <directionalLight
        intensity={1}
        position={[20, 0, 0]}
        color={0xffffff}
      />
      <directionalLight
        intensity={1}
        position={[-20, 10, 0]}
        color={0xffffff}
      />
      <Floating scale={2} position={[4, -12, 0]} />
      <CameraControls />
      <Leva hidden />
      <Physics >
        <LumbOffBalls />
        <Pointer />
        <Balls />
        <Borders />
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={0.5} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vec.set((mouse.x / 2 * viewport.width), (mouse.y / 2 * viewport.height), 0))
  })
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}

useGLTF.preload("/thomas-idle-v1.glb");
