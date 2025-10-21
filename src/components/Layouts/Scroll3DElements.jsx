import { useEffect, useState } from 'react';

export const Scroll3DElements = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-3d-container">
            
            <div 
                className="shape-3d cube-3d"
                style={{
                    transform: `
                        translateY(${scrollY * 0.3}px) 
                        rotateX(${scrollY * 0.1}deg) 
                        rotateY(${scrollY * 0.15}deg)
                    `
                }}
            >
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face left"></div>
                <div className="cube-face right"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
            </div>

           
            <div 
                className="shape-3d pyramid-3d"
                style={{
                    transform: `
                        translateY(${scrollY * -0.2}px) 
                        rotateX(${scrollY * -0.08}deg) 
                        rotateZ(${scrollY * 0.1}deg)
                    `
                }}
            >
                <div className="pyramid-face base"></div>
                <div className="pyramid-face side1"></div>
                <div className="pyramid-face side2"></div>
                <div className="pyramid-face side3"></div>
                <div className="pyramid-face side4"></div>
            </div>

           
            <div 
                className="shape-3d sphere-3d"
                style={{
                    transform: `
                        translateY(${scrollY * 0.25}px) 
                        translateX(${Math.sin(scrollY * 0.01) * 50}px)
                        scale(${1 + Math.sin(scrollY * 0.005) * 0.2})
                    `
                }}
            >
                <div className="sphere-inner"></div>
            </div>

            <div 
                className="shape-3d ring-3d"
                style={{
                    transform: `
                        translateY(${scrollY * -0.15}px) 
                        rotateX(${60 + scrollY * 0.05}deg) 
                        rotateZ(${scrollY * 0.2}deg)
                    `
                }}
            >
                <div className="ring-outer"></div>
            </div>

            
            <div 
                className="shape-3d hexagon-3d"
                style={{
                    transform: `
                        translateY(${scrollY * 0.18}px) 
                        rotateY(${scrollY * 0.12}deg)
                        rotateZ(${scrollY * 0.05}deg)
                    `
                }}
            ></div>
        </div>
    );
};