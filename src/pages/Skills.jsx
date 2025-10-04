
import {Video} from "../assets/videos/video"
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
    return (
        <div className="skills-section" id="skills">
        <Video/>
            
            <div><h1> Current skills:-</h1></div>
            <div className="alllogo">
                <div className="individuallogo" style={{ animationDelay: '0s' }}> 
                    <img src={HtmlLogo} alt="HTML Logo" /> 
                </div> 
                <div className="individuallogo" style={{ animationDelay: '0.1s' }}> 
                    <img src={CssLogo} alt="CSS Logo" />
                </div>
                <div className="individuallogo" style={{ animationDelay: '0.2s' }}> 
                    <img src={JavascriptLogo} alt="JAVASCRIPT Logo" />
                </div> 
                <div className="individuallogo" style={{ animationDelay: '0.3s' }}> 
                    <img src={ReactLogo} alt="REACT Logo" />
                </div>
                <div className="individuallogo" style={{ animationDelay: '0.4s' }}> 
                    <img src={ GitLogo} alt="GIT Logo" />
                </div> 
                <div className="individuallogo" style={{ animationDelay: '0.5s' }}> 
                    <img src={GithubLogo} alt="GITHUB Logo" />
                </div>
                <div className="individuallogo" style={{ animationDelay: '0.6s' }}> 
                    <img src={PythonLogo} alt="PYTHON Logo" />
                </div> 
                <div className="individuallogo" style={{ animationDelay: '0.7s' }}> 
                    <img src={ CLogo } alt="C Logo" />
                </div>
                <div className="individuallogo" style={{ animationDelay: '0.8s' }}> 
                    <img src={ CppLogo } alt="C++ Logo" />
                </div>
            </div>
        </div>
    )
};