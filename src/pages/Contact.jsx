
import {Video} from "../assets/videos/video"

export const Contact = () => {
    const phoneNumber = "+91 9461429507";
    const email = "my3596418@gmail.com";
    const githubUrl = "https://github.com/Mydvthukran";
    const linkedinUrl = "https://www.linkedin.com/in/manish-yadav-483613323/";
    const instagramUrl = "https://www.instagram.com/manishyadavthukran/";

    return (
        <div className="contact-section" id="contact">
            <Video/>
            <div className="contact-content">
                <h1>Get In Touch</h1>
                
                <p className="contact-intro">
                    I'm currently looking for new opportunities and collaborations. 
                    Feel free to reach out to discuss technology, development, or anything else!
                </p>

                <div className="contact-details">
                    <div className="contact-item">
                        <h2>Phone Number</h2>
                        <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="contact-link">
                            {phoneNumber}
                        </a>
                    </div>
                    
                    <div className="contact-item">
                        <h2>Email</h2>
                        <a href={`mailto:${email}`} className="contact-link">
                            {email}
                        </a>
                    </div>
                    
                    <div className="contact-item">
                        <h2>LinkedIn</h2>
                        <a 
                            href={linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                    
                    <div className="contact-item">
                        <h2>GitHub Profile</h2>
                        <a 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                        >
                            View My Code
                        </a>
                    </div>

                    <div className="contact-item">
                        <h2>Instagram</h2>
                        <a 
                            href={instagramUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                        >
                            Follow on Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};