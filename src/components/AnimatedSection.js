import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    scrub: true,
                },
            }
        );
    }, []);

    return <div ref={sectionRef}>{children}</div>;
};

export default AnimatedSection;
