
import {Video} from "../assets/videos/video"
export const Projects = () => {
    const projects = [
        {
            title: "Automatic Attendance System (SIH 2024)",
            status: "In Progress",
            description: "Developing a robust, real-time attendance solution. This system uses Facial Recognition technology (OpenCV/Python) to automatically mark attendance, streamlining data collection and reducing manual overhead.",
            technologies: ["Python", "OpenCV", "Machine Learning", "SIH"],
            delay: '0s'
        },
        {
            title: "KMRL AI Documentation & Chatbot (SIH 2024)",
            status: "In Progress",
            description: "Creating an intelligent documentation system and AI-powered chatbot for Kochi Metro Rail Limited (KMRL). The goal is to provide instant, conversational support for complex operational documentation, leveraging NLP and Generative AI.",
            technologies: ["Generative AI", "NLP", "React", "Python/Flask", "SIH"],
            delay: '0.2s'
        },
        {
            title: "Holo Batalian",
            status: "In Progress (e-Yantra)",
            description: "A specialized project focused on robotics and embedded systems through the e-Yantra program. This involves designing and programming an autonomous robotic system to complete complex tasks in a simulated battlefield environment.",
            technologies: ["C/C++", "Embedded Systems", "Robotics", "e-Yantra"],
            delay: '0.4s'
        },
    ];

    return (
        <div className="projects-section" id="projects">
            <Video/>
            <div className="projects-content">
                <h1>My Current Projects</h1>

                <div className="project-list">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card"
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