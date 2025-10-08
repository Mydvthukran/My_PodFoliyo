 import { useEffect, useRef, useState } from 'react';
import image from '../assets/logos/my-pic.jpg';


export const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="about-container" id="about" ref={sectionRef}>
            
            <div className="about-content">
                <img
                    src={image}
                    alt="Manish Yadav's pic"
                    className={`profile-img ${isVisible ? 'animate' : ''}`}
                />

                <div className="about-text">
                    <h1 className={isVisible ? 'animate' : ''}>
                        Hello! I'm Manish Yadav.
                    </h1>

                    <p className={isVisible ? 'animate' : ''}>
                        I am currently a second-year student at SIET Panchkula, pursuing a degree in Computer Science.
                        My academic focus is enriched by a minor in <strong>Cyber Security</strong>, reflecting my strong interest in building and securing robust digital systems.
                    </p>

                    <p className={isVisible ? 'animate' : ''}>
                        My journey is centered around <strong>Learning every day something new</strong>—specifically building clean, modern, and high-performance user interfaces.
                        I enjoy transforming complex ideas into intuitive web applications using React and modern CSS techniques.
                    </p>

                    <p className={isVisible ? 'animate' : ''}>
                        I am always eager to learn and take on new challenges. Let's build something great!
                    </p>
                </div>
            </div>
        </div>
    );
};