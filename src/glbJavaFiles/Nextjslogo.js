/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 1.5;
  });
  const { nodes, materials } = useGLTF('/nextjslogo.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.JS.geometry} material={materials['SVGMat.001']} position={[2.7, 0, 0]} rotation={[1.6, 0, 0]} scale={[111.04, 100, 100]} />
    </group>
  )
}

useGLTF.preload('/nextjslogo.glb')
