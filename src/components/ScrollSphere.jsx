import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ScrollSphere = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // 1. Scene setup
        const scene = new THREE.Scene();

        // 2. Camera setup
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const updateCameraPosition = () => {
            if (window.innerWidth <= 480) {
                // Phones: Image is usually centered
                camera.position.x = 0;
                camera.position.y = -6.5;
                camera.position.z = 45;
            } else if (window.innerWidth <= 968) {
                // Tablets: Image is usually centered
                camera.position.x = 0;
                camera.position.y = -3.5;
                camera.position.z = 40;
            } else {
                // Desktop: Profile picture is slightly offset to the right by grid
                camera.position.x = -11;
                camera.position.y = -1.5;
                camera.position.z = 32;
            }
        };
        updateCameraPosition();

        // 3. Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        // 4. Particles Data Preparation
        const particleColor = 0xFF6B6B; // Corresponds to --color-accent Vibrant Coral/Red
        const particlesCount = 5000;
        const geometry = new THREE.BufferGeometry();

        // Arrays for position morphing
        const posArray = new Float32Array(particlesCount * 3); // Base Sphere state
        const targetArray = new Float32Array(particlesCount * 3); // Exploded Scattered state
        const currentArray = new Float32Array(particlesCount * 3); // Frame-by-frame rendered state

        const radius = 12;

        for (let i = 0; i < particlesCount; i++) {
            // --- A. Original Position (Sphere) ---
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);

            // Convert polar coordinates to Cartesian
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            posArray[i * 3] = x;
            posArray[i * 3 + 1] = y;
            posArray[i * 3 + 2] = z;

            currentArray[i * 3] = x;
            currentArray[i * 3 + 1] = y;
            currentArray[i * 3 + 2] = z;

            // --- B. Random Scattered Position ---
            // We push them outwards from the center of the sphere
            const scatterDistance = (Math.random() * 200) + 30;
            const dirX = x / radius;
            const dirY = y / radius;
            const dirZ = z / radius;

            // Spread entirely outward + random jitter
            targetArray[i * 3] = dirX * scatterDistance + (Math.random() - 0.5) * 80;
            targetArray[i * 3 + 1] = dirY * scatterDistance + (Math.random() - 0.5) * 80;
            targetArray[i * 3 + 2] = dirZ * scatterDistance + (Math.random() - 0.5) * 80;
        }

        // Attach current position to the geometry
        geometry.setAttribute('position', new THREE.BufferAttribute(currentArray, 3));

        const material = new THREE.PointsMaterial({
            color: particleColor,
            size: 0.15,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });

        const particlesGroup = new THREE.Group();
        const particlesMesh = new THREE.Points(geometry, material);
        particlesGroup.add(particlesMesh);
        scene.add(particlesGroup);

        // 5. Mouse Interaction Variables
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.0005;
            mouseY = (event.clientY - windowHalfY) * 0.0005;
        };
        document.addEventListener('mousemove', onMouseMove);

        // 6. Scroll Interaction Variables
        let targetScroll = 0;
        let currentScroll = 0;

        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll > 0) {
                targetScroll = window.scrollY / maxScroll;
            } else {
                targetScroll = 0;
            }
            // Increase sensitivity, so they fully scatter earlier using a multiplier
            targetScroll = Math.max(0, Math.min(1, targetScroll * 1.2));
        };
        window.addEventListener('scroll', onScroll);

        // 7. Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            updateCameraPosition();
        };
        window.addEventListener('resize', handleResize);

        // 8. Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // Smoothly interpolate scroll value
            currentScroll += (targetScroll - currentScroll) * 0.05;

            // A) Array morphing to scatter OR gather particles
            const currentPositions = geometry.attributes.position.array;

            for (let i = 0; i < particlesCount * 3; i++) {
                // Morph from Sphere (posArray) to Scattered (targetArray) based on scroll percentage
                currentPositions[i] = posArray[i] + (targetArray[i] - posArray[i]) * currentScroll;
            }
            geometry.attributes.position.needsUpdate = true;

            // B) Continuous gentle rotation
            particlesMesh.rotation.y += 0.002;
            particlesMesh.rotation.x += 0.001;

            // C) Smooth Mouse floating
            targetX = mouseX;
            targetY = mouseY;
            particlesGroup.rotation.x += 0.05 * (targetY - particlesGroup.rotation.x);
            particlesGroup.rotation.y += 0.05 * (targetX - particlesGroup.rotation.y);

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            renderer.dispose();

            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'var(--color-bg)' // Now reading correctly from index.css for light/dark support
            }}
        />
    );
};

export default ScrollSphere;
