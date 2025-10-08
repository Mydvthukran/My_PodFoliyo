
import { useState } from "react";
import { Link } from "react-scroll";

export const Headers = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header">
            <div className="logo">
                <Link 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    offset={-80} 
                    spy={true} 
                    activeClass="active"
                    onClick={closeMenu}
                >
                    <h1>Portfolio</h1>
                </Link>
            </div>

            
            <div 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="header2">
                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li>
                            <Link 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                offset={-80} 
                                spy={true} 
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="about" 
                                smooth={true} 
                                duration={500} 
                                offset={-80} 
                                spy={true} 
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="skills" 
                                smooth={true} 
                                duration={500} 
                                offset={-80} 
                                spy={true} 
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="projects" 
                                smooth={true} 
                                duration={500} 
                                offset={-80} 
                                spy={true} 
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                offset={-80} 
                                spy={true} 
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};