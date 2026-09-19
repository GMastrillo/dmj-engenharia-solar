"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function buildPanelMesh() {
  const panelGroup = new THREE.Group();
  const frameGeometry = new THREE.BoxGeometry(2.2, 1.4, 0.08);
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x475569,
    metalness: 0.85,
    roughness: 0.25,
  });
  panelGroup.add(new THREE.Mesh(frameGeometry, frameMaterial));

  const cellGeometry = new THREE.BoxGeometry(2.1, 1.3, 0.085);
  const cellMaterial = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.2,
    metalness: 0.6,
    emissive: 0x0284c7,
    emissiveIntensity: 0.08,
  });
  panelGroup.add(new THREE.Mesh(cellGeometry, cellMaterial));

  const gridHelper = new THREE.GridHelper(2.0, 10, 0x38bdf8, 0x1e293b);
  gridHelper.rotation.x = Math.PI / 2;
  gridHelper.position.z = 0.045;
  panelGroup.add(gridHelper);

  return panelGroup;
}

function buildParticles(count: number) {
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 4;
    positions[i + 1] = Math.random() * 3 + 0.5;
    positions[i + 2] = (Math.random() - 0.5) * 3;
  }
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xfbbf24,
    size: 0.04,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  });
  return { points: new THREE.Points(particleGeo, particleMat), particleGeo };
}

function setupLights(scene: THREE.Scene) {
  scene.add(new THREE.AmbientLight(0xffffff, 1.2));
  const sunLight = new THREE.DirectionalLight(0xfef08a, 3.0);
  sunLight.position.set(3, 4, 3);
  scene.add(sunLight);
  const blueAccent = new THREE.PointLight(0x38bdf8, 2, 5);
  blueAccent.position.set(-2, -1, 2);
  scene.add(blueAccent);
}

function setupRendererAndCamera(container: HTMLDivElement) {
  const width = container.clientWidth || 500;
  const height = container.clientHeight || 450;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 1.2, 3.8);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  return { scene, camera, renderer };
}

export function SolarCanvas3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scene, camera, renderer } = setupRendererAndCamera(container);
    const panelGroup = buildPanelMesh();
    scene.add(panelGroup);

    const particleCount = 120;
    const { points, particleGeo } = buildParticles(particleCount);
    scene.add(points);
    setupLights(scene);

    let targetRotX = 0.45;
    let targetRotY = -0.35;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetRotY = -0.35 + ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
      targetRotX = 0.45 + ((e.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      panelGroup.rotation.y += (targetRotY - panelGroup.rotation.y) * 0.05;
      panelGroup.rotation.x += (targetRotX - panelGroup.rotation.x) * 0.05;

      const pos = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        pos[i] -= 0.012;
        if (pos[i] < -0.5) pos[i] = 3.0;
      }
      particleGeo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] md:h-[460px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      <div className="absolute -inset-4 bg-radial from-amber-500/10 via-sky-500/5 to-transparent blur-2xl -z-10" />
    </div>
  );
}
