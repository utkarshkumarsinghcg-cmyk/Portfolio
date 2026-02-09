import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, threshold = 0.1, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const style = {
        transitionDelay: `${delay}ms`
    };

    return (
        <div ref={ref} className={`reveal-section ${className} ${isVisible ? 'is-visible' : ''}`} style={style}>
            {children}
        </div>
    );
};

export default Reveal;
