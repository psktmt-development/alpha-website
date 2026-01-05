"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import { Mesh, BufferGeometry, BoxGeometry, Vector3 } from "three";
import Image from "next/image";

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

export function NewHeroSection() {
  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 z-10 select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
          <Image
            src="/Visiting Card (2).png"
            alt="The Alpha Circle Logo"
            width={600}
            height={600}
            className="w-auto h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain pointer-events-none"
            priority
            draggable={false}
            style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}
          />
        </div>

        {/* 3D Model Section */}
        <div className="flex-1 h-full max-h-[80vh] flex items-center justify-center w-full md:w-auto">
          <div className="w-full h-full max-w-[700px] max-h-[700px] min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true }}>
              <Scene stlUrl="/home_and_about/The_Alpha_Circle (1).stl" color="#B02425" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

