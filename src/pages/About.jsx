 import image from '../assets/logos/my-pic.jpg';
import {Video} from "../assets/videos/video"
export const About = () => {
     
    return (
        <div className="about-container" id="about">
            <Video/>
            
            <div className="about-content">
                 <img 
                    
                     src={image} 
                    alt="Manish Yadav's pic" 
                   className='profile-img' />
                
                <div className="about-text">
                    <h1>Hello! I'm Manish Yadav.</h1>
                    
                    <p>
                        I am currently a second-year student at SIET Panchkula, pursuing a degree in Computer Science. 
                        My academic focus is enriched by a minor in **Cyber Security**, reflecting my strong interest in building and securing robust digital systems.
                    </p>
                    
                    <p>
                        My journey is centered around **Learning every day something new **—specifically building clean, modern, and high-performance user interfaces. 
                        I enjoy transforming complex ideas into intuitive web applications using React and modern CSS techniques. 
                    </p>
                    
                    <p>
                        I am always eager to learn and take on new challenges. Let's build something great!
                    </p>
                </div>
            </div>
        </div>
    );
};