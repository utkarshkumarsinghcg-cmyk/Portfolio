import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // 1. Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050914'); // Very dark, almost black blue
        scene.fog = new THREE.FogExp2('#050914', 0.002); // Add depth

        // 2. Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        camera.position.z = 1000; // Far back to see the wide particle field

        // 3. Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // Antialias false for performance with points
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
        mount.appendChild(renderer.domElement);

        // 4. Create Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000; // Thousands of particles

        const posArray = new Float32Array(particlesCount * 3);
        const scaleArray = new Float32Array(particlesCount);

        // Spread them far and wide randomly
        for (let i = 0; i < particlesCount * 3; i++) {
            // (Math.random() - 0.5) centers it around 0
            posArray[i] = (Math.random() - 0.5) * 3000;
        }

        // Random sizes for slight variation
        for (let i = 0; i < particlesCount; i++) {
            scaleArray[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));

        // Glowing neon blue dots
        const material = new THREE.PointsMaterial({
            color: 0x00f0ff, // Bright neon cyan/blue
            size: 3,         // Base size
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending, // Glowing effect
            sizeAttenuation: true // Far particles appear smaller
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);

        // Group wrapper to separate continuous rotation from mouse rotation
        const particleGroup = new THREE.Group();
        particleGroup.add(particlesMesh);
        scene.add(particleGroup);

        // 5. Variables for mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event) => {
            // Much smaller scaling for mouse input
            mouseX = (event.clientX - windowHalfX) * 0.0002;
            mouseY = (event.clientY - windowHalfY) * 0.0002;
        };

        document.addEventListener('mousemove', onMouseMove);

        // 6. Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Clock for smooth, consistent motion regardless of framerate
        const clock = new THREE.Clock();

        // 7. Animation loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Slower, more subtle floating motion (applied to inner mesh)
            particlesMesh.rotation.y = elapsedTime * 0.02;
            particlesMesh.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1; // Gentle wobble

            // Interactive movement from mouse (with smooth easing)
            targetX = mouseX;
            targetY = mouseY;

            // The lower the multiplier (0.02), the "heavier" and smoother the easing (applied to wrapper group)
            particleGroup.rotation.x += 0.02 * (targetY - particleGroup.rotation.x);
            particleGroup.rotation.y += 0.02 * (targetX - particleGroup.rotation.y);

            renderer.render(scene, camera);
        };

        animate();

        // 8. Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);

            // Cleanup Three.js resources to prevent memory leaks
            particlesGeometry.dispose();
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
                zIndex: -1, // Stays behind content
                pointerEvents: 'none', // Allows clicks to pass through to the portfolio
                background: '#050914' // Solid dark blue fallback
            }}
        />
    );
};

export default ParticleBackground;
