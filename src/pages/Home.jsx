import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Video } from "../assets/videos/video";

export const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);
    }, []);

    return (
        <div className="hero" id="home">
            <Video />
            <div className="hero-buttons">
                <h1 className={isLoaded ? 'animate' : ''}>
                    Hi, I am <span>Manish Yadav</span>
                </h1>
                <p className={isLoaded ? 'animate' : ''}>
                    Welcome to my personal portfolio. Explore my journey and know more about me!
                </p>

                <div className={`buttons ${isLoaded ? 'animate' : ''}`}>
                    <Link to="about" smooth={true} duration={500} className="btn">
                        Know About Me
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="btn">
                        Explore My Work
                    </Link>
                </div>
            </div>
        </div>
    );
};