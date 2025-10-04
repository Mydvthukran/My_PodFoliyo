

import { AppLayout } from "./components/Layouts/AppLayout.jsx"; 
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects} from "./pages/Projects";

const App = () => {
  return (
    
    <AppLayout> 
        <Home /> 
        <About /> 
        <Skills /> 
        <Projects />
        <Contact />
        
    </AppLayout>
  );
};

export default App;

