import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2500; // 2.5 seconds total loading time
        const intervalTime = 30; // Update every 30ms
        const totalSteps = duration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const currentProgress = Math.min((currentStep / totalSteps) * 100, 100);

            // Add slight easing/randomness to make it feel real
            const randomJitter = Math.random() * 5;
            setProgress(Math.min(currentProgress + randomJitter, 100));

            if (currentStep >= totalSteps) {
                clearInterval(interval);
                setProgress(100);
                setTimeout(() => {
                    onLoadingComplete();
                }, 500); // 500ms delay after 100% to let the user see it finished
            }
        }, intervalTime);

        // Disable scrolling while loading
        document.body.style.overflow = 'hidden';

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'unset';
        };
    }, [onLoadingComplete]);

    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="logo-container">
                    <h1 className="loader-logo">
                        <span className="logo-text">U</span>
                        <span className="logo-dot">.</span>
                    </h1>
                </div>

                <div className="progress-wrapper">
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="progress-text">
                        <span>Loading Experience...</span>
                        <span className="percentage">{Math.floor(progress)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
