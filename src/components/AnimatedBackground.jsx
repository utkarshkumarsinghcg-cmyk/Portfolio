import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // 1. Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#0a0f1f'); // Dark navy background
        scene.fog = new THREE.FogExp2('#0a0f1f', 0.03); // Adds depth and fading at edges

        // 2. Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        // Move camera back to see the globe
        camera.position.z = 18;

        // 3. Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
        mount.appendChild(renderer.domElement);

        // 4. Create the Globe (Points)
        const radius = 10;
        const widthSegments = 64;
        const heightSegments = 64;

        // SphereGeometry vertices will become our points
        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

        // Glowing neon blue dots
        const material = new THREE.PointsMaterial({
            color: 0x3f8efc, // Neon blue
            size: 0.1,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending, // Gives the glowing effect
        });

        const globe = new THREE.Points(geometry, material);

        // Use a group to separate continuous rotation from mouse interaction tilting
        const globeGroup = new THREE.Group();
        globeGroup.add(globe);
        scene.add(globeGroup);

        // 5. Variables for mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event) => {
            // Calculate normalized mouse coordinates
            mouseX = (event.clientX - windowHalfX) * 0.001;
            mouseY = (event.clientY - windowHalfY) * 0.001;
        };

        document.addEventListener('mousemove', onMouseMove);

        // 6. Handle window resize to maintain responsiveness
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // 7. Animation loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // A) Continuous slow rotation for the globe itself
            globe.rotation.y += 0.002;
            globe.rotation.x += 0.001;

            // B) Smooth mouse interaction applied to the group wrapper
            targetX = mouseX * 0.5;
            targetY = mouseY * 0.5;

            // Interpolate towards the target (easing)
            globeGroup.rotation.x += 0.05 * (targetY - globeGroup.rotation.x);
            globeGroup.rotation.y += 0.05 * (targetX - globeGroup.rotation.y);

            renderer.render(scene, camera);
        };

        animate();

        // 8. Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);

            // Free up GPU memory
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
                zIndex: -1, // Stays firmly behind all content
                pointerEvents: 'none', // Ensures it doesn't block clicks on your portfolio items
            }}
        />
    );
};

export default AnimatedBackground;
