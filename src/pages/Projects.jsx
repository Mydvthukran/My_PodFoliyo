
import { useEffect, useRef, useState } from 'react';


export const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const projects = [
        {
            title: "ClassTrack - Smart Schedule Analyzer",
            status: "Completed",
            description: "An intelligent schedule analyzer built with Claude AI that detects study blocks, highlights schedule conflicts, and calculates workload scores. Features a clean, intuitive UI with cross-device responsiveness and real-time schedule analysis to help students manage their academic workload effectively.",
            technologies: ["React", "Vite", "CSS", "JavaScript"],
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
            title: "Weather Forecasting Dashboard",
            status: "completed",
            description: "A responsive weather forecasting dashboard built with React and CSS. Features real-time weather data visualization, interactive maps, and a clean UI that adapts to all screen sizes.",
            technologies: ["React", " CSS", "JavaScript", "Weather API"],
            link: "https://weather-app-xi-two-78.vercel.app/",
            delay: '0.4s'
        },
         {
            title: "Byte Forge club website",
            status: "completed",
            description: "A responsive club built with React and CSS. Feature the 3d element that react with crusor.",
            technologies: ["React", " CSS", "JavaScript", "three js"],
            link: " https://byteforgefinal.vercel.app/",
            delay: '0.6s'
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