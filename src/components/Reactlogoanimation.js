import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import Head from "../Reactlogo";

export default function Scene() {
  
  return (
    <>
    <Canvas  >
    
      <ambientLight intensity={0.3} position={4} />
      <pointLight color="white" intensity={1} position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Head />
      </Suspense>
</Canvas>

</>
  );
}
