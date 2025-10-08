
import { Link } from "react-scroll";

export const Headers = () =>{
    return (
     <div className="header"> <div className="logo"><Link to = "home"smooth= {true} duration={500}offset={-80} spy={true} activeClass="active"><h1>Portfolio</h1></Link> </div>  
  <div className="header2">
   <nav> <ul>
   <li><Link to = "home" smooth= {true} duration={500} offset={-80} spy={true} activeClass="active" >Home</Link> </li>
   <li><Link to = "about"smooth= {true} duration={500}offset={-80} spy={true} activeClass="active" >About</Link> </li>
   <li><Link to = "projects"smooth= {true} duration={500}offset={-80} spy={true} activeClass="active" >Projects</Link> </li>
   <li><Link to = "skills" smooth= {true} duration={500}offset={-80} spy={true} activeClass="active">Skills</Link> </li>
    <li><Link to = "contact"smooth= {true} duration={500}offset={-80} spy={true} activeClass="active" >Contact</Link> </li>
   </ul>
</nav>


  </div>
   
    </div>
    
)
};