
import { useEffect, useRef, useState } from 'react';


export const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const projects = [
        {
            title: "ClassTrack - Smart Schedule Analyzer",
            status: "Completed",
            description: "An intelligent schedule analyzer built with Claude AI that detects study blocks, highlights schedule conflicts, and calculates workload scores. Features a clean, intuitive UI with cross-device responsiveness and real-time schedule analysis to help students manage their academic workload effectively.",
            technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
            link: "https://class-track-seven.vercel.app/",
            delay: '0s'
        },
        {
            title: "Personal Portfolio Website",
            status: "Completed",
            description: "A fully responsive personal portfolio showcasing my technical skills, projects, and professional journey. Built with modern web technologies, featuring smooth animations, intersection observers, and an elegant UI/UX design that works seamlessly across all screen sizes.",
            technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
            link: "https://my-pod-foliyo.vercel.app",
            delay: '0.2s'
        },
        {
            title: "KMRL AI Documentation & Chatbot (SIH 2024)",
            status: "In Progress",
            description: "Creating an intelligent documentation system and AI-powered chatbot for Kochi Metro Rail Limited (KMRL). The goal is to provide instant, conversational support for complex operational documentation, leveraging NLP and Generative AI.",
            technologies: ["Generative AI", "NLP", "React", "Python/Flask", "SIH"],
            delay: '0.4s'
        },
    ];

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
        <div className="projects-section" id="projects" ref={sectionRef}>
            
            <div className="projects-content">
                <h1>My Projects</h1>

                <div className="project-list">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card ${isVisible ? 'animate' : ''}`}
                            style={{ animationDelay: project.delay }}
                        >
                            <h2>{project.title}</h2>
                            <p className="status">{project.status}</p>
                            <p className="description">{project.description}</p>

                            <div className="tech-tags">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tag">{tech}</span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="github-link-container">
                    <a
                        href="https://github.com/Mydvthukran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};