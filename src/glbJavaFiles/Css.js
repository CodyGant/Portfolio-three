/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 1.5;
  });
  const { nodes, materials } = useGLTF('/css.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.CSS.geometry} material={materials['CSS.002']} position={[0,0,0]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/css.glb')