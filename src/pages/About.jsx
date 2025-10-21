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

    const handleDownloadResume = () => {
       
        const link = document.createElement('a');
        link.href = '/Manish_Yadav_Resume.pdf'; 
        link.download = 'Manish_Yadav_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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

                    <button 
                        onClick={handleDownloadResume}
                        className={`resume-download-btn ${isVisible ? 'animate' : ''}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};