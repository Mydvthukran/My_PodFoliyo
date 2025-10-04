import { Link } from "react-scroll";
import {Video} from "../assets/videos/video"
export const Home = () => {
    return (<div className="hero" id="home"  >
    <Video/>

   <div className="hero-buttons">
  <h1>Hi, I am <span>Manish Yadav</span></h1>
  <p>Welcome to my personal portfolio. Explore my journey and know more about me!</p>
  
  <div className="buttons">
    <Link to="about" smooth={true} duration={500} className="btn">Know About Me</Link>
<Link to="projects" smooth={true} duration={500} className="btn">Explore My Work</Link>
  </div> </div> </div>)
};