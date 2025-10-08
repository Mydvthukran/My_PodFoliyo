
import { useEffect, useRef, useState } from 'react';

import GitLogo from '../assets/logos/git.svg';
import GithubLogo from '../assets/logos/github.png';
import HtmlLogo from '../assets/logos/html.svg';
import JavascriptLogo from '../assets/logos/javascript.svg';
import PythonLogo from '../assets/logos/python.svg';
import ReactLogo from '../assets/logos/react.png';
import CssLogo from '../assets/logos/css.svg';
import CLogo from '../assets/logos/c.png';
import CppLogo from '../assets/logos/c++.png';

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const skills = [
        { logo: HtmlLogo, name: 'HTML', delay: '0s' },
        { logo: CssLogo, name: 'CSS', delay: '0.1s' },
        { logo: JavascriptLogo, name: 'JavaScript', delay: '0.2s' },
        { logo: ReactLogo, name: 'React', delay: '0.3s' },
        { logo: GitLogo, name: 'Git', delay: '0.4s' },
        { logo: GithubLogo, name: 'GitHub', delay: '0.5s' },
        { logo: PythonLogo, name: 'Python', delay: '0.6s' },
        { logo: CLogo, name: 'C', delay: '0.7s' },
        { logo: CppLogo, name: 'C++', delay: '0.8s' }
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
        <div className="skills-section" id="skills" ref={sectionRef}>
            
            <div>
                <h1>Current skills:-</h1>
            </div>
            <div className="alllogo">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`individuallogo ${isVisible ? 'animate' : ''}`}
                        style={{ animationDelay: skill.delay }}
                    >
                        <img src={skill.logo} alt={`${skill.name} Logo`} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};