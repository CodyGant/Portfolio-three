import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import Skeleton from "../glbJavaFiles/Skel";

export default function Scene() {
  
  return (
    <>
    <Canvas style={{ background: 'transparent' }}>
      <ambientLight intensity={.3} />
      <spotLight intensity={.5} angle={0.6} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Skeleton />
      </Suspense>
</Canvas>

</>
  );
}