"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import { Mesh, BufferGeometry, Vector3 } from "three";

function STLModel({ url, color }: { url: string; color: string }) {
  const meshRef = useRef<Mesh>(null);
  const geometry = useLoader(STLLoader, url) as BufferGeometry;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Calculate bounding box to center and scale the model
  geometry.computeBoundingBox();
  const center = new Vector3();
  const size = new Vector3();
  
  if (geometry.boundingBox) {
    geometry.boundingBox.getCenter(center);
    geometry.boundingBox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim; // Scale to fit nicely
    
    return (
      <mesh
        ref={meshRef}
        geometry={geometry}
        scale={[scale, scale, scale]}
        position={[-center.x * scale, -center.y * scale, -center.z * scale]}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.0}
          roughness={0.9}
        />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        metalness={0.0}
        roughness={0.9}
      />
    </mesh>
  );
}

function Scene({ stlUrl, color }: { stlUrl: string; color: string }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <pointLight position={[0, 0, 10]} intensity={0.8} />
      <Suspense fallback={null}>
        <STLModel url={stlUrl} color={color} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={5}
      />
    </>
  );
}

export function Model3D({ stlUrl, color }: { stlUrl: string; color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true }}>
      <Scene stlUrl={stlUrl} color={color} />
    </Canvas>
  );
}

