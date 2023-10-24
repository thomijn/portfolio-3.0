import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';


const LumbOffBalls = () => {
    const balls = [];

    for (let i = 0; i < 15; i++) {
        balls.push({
            position: [Math.random() * 10 - 5, Math.random() * 10 - 5 - 20, Math.random() * 5 - 2.5],
            color: new THREE.Color(Math.random() * 0xffffff),
            scale: 5
        });
    }

    return (
        <group>
            {balls.map((ball, index) => (
                <Ball key={index} ball={ball} index={index} />
            ))}
        </group>
    );
};

const Ball = ({
    ball,
    index,
    vec = new THREE.Vector3(),
}) => {
    const api = useRef()

    useFrame((state, delta) => {
        if (!api.current) return

    // get top offset of .projects
        const scrollHeight = document.querySelector('.projects').offsetTop + 500
        // if current scroll position is greater than scrollheight of .projects
        // then apply impulse to ball
        if (window.scrollY > scrollHeight) return
        api.current?.applyImpulse(vec.copy({
            x: 0 - api.current.translation().x,
            y: (0- 15) - api.current.translation().y,
            z: 0 - api.current.translation().z
        }).multiplyScalar(0.05))

    })

    return (
        <RigidBody ref={api} key={index} scale={ball.scale} position={ball.position} type="dynamic" colliders="ball">
            <mesh key={index}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshPhysicalMaterial 
                    color={'#fff'}
                    roughness={0.2}
                    transparent={true}
                    opacity={1}
                    envMapIntensity={1}
                />
            </mesh>
        </RigidBody>
    );
}

export default LumbOffBalls;
