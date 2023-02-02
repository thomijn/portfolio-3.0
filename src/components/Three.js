import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import * as THREE from "three";
import {
  useGLTF,
  useAnimations,
  Reflector,
  useTexture,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Effects } from "./Effects";

const HPI = Math.PI / 2;
const red = new THREE.Color("#fac020");
const white = new THREE.Color("#fff");

gsap.registerPlugin(ScrollTrigger);

export function Three() {
  return (
    <Canvas dpr={[1, 1]} camera={{ fov: 35, position: [0, 0, 5] }}>
      <Suspense fallback={"loading"}>
        <Environment preset="city" />
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 20, 0]} intensity={1.5} />
        <directionalLight position={[0, -10, 0]} intensity={0.25} />
        <Thomas />
      </Suspense>
    </Canvas>
  );
}

function Thomas() {
  const ref = useRef();
  const time = useRef(0);
  const { scene, animations, materials } = useGLTF("/fractured.glb");
  const { actions, mixer } = useAnimations(animations, ref);
  useEffect(
    () => Object.keys(actions).forEach((key) => actions[key].play()),
    []
  );

  materials["Material.001"].transparent = true;
  materials["Material.003"].transparent = true;
  materials["Material.003"].opacity = 0;
  materials["Material.001"].opacity = 0;

  useEffect(() => {
    gsap.to(materials["Material.001"], {
      duration: 1,
      delay: 3.5,
      ease: "power4.out",
      opacity: 1,
    });
    gsap.to(materials["Material.003"], {
      duration: 1,
      delay: 3,
      ease: "power4.out",
      opacity: 1,
    });

    gsap.to(ref.current.scale, {
      duration: 1.5,
      delay: 4,
      // ease: "power4.out",
      x: 1.5,
      y: 1.5,
      z: 1.5,
    });

    gsap.to(ref.current.position, {
      duration: 1.5,
      delay: 4,
      // ease: "power4.out",
      x: 0,
      y: -2.2,
      z: 0,
    });

    gsap.to(ref.current.position, {
      duration: 1,
      delay: 1,
      ease: "power4.out",
      x: 1,
      scrollTrigger: {
        start: 0,
        end: 1000,
        scrub: true,
      },
    });

    gsap.to(ref.current.rotation, {
      duration: 1,
      delay: 1,
      ease: "power4.out",
      y: -Math.PI * 0.7,
      scrollTrigger: {
        start: 0,
        end: 1000,
        scrub: true,
      },
    });
  }, []);

  let prevPosition = new THREE.Vector2(0, 0);
  const stepSizeSeconds = 1 / 10;
  const renderingTotalTime = useRef(0);
  const otherLoopTotalTime = useRef(0);
  let distance = 0;
  useFrame((state, deltaSeconds) => {
    if (deltaSeconds > 0.3) deltaSeconds = 0.3;

    renderingTotalTime.current += deltaSeconds;

    while (
      otherLoopTotalTime.current <=
      renderingTotalTime.current - stepSizeSeconds
    ) {
      distance = state.mouse.distanceTo(prevPosition) * 5;
      prevPosition = state.mouse.clone();
      otherLoopTotalTime.current += stepSizeSeconds;
    }

    // materials["Material.001"].color.copy(red).multiplyScalar(distance / 10);
    materials["Material.001"].metalness = 1;
    materials["Material.003"].metalness = 0.6;
    materials["Material.001"].roughness = 0;
    materials["Material.001"].color = red;

    materials["Material.003"].roughness = 0.1;
    mixer.setTime(
      (time.current = THREE.MathUtils.lerp(
        time.current,
        distance > 0 ? distance.toFixed(1) : 0,
        0.08
      ))
    );
  });
  return (
    <primitive
      smoothShading
      scale={0.7}
      position={[0.04, -0.99, 0]}
      rotation={[0, -HPI, 0]}
      ref={ref}
      object={scene}
    />
  );
}
