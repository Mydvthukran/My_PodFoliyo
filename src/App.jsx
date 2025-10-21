

import { AppLayout } from "./components/Layouts/AppLayout.jsx"; 
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects} from "./pages/Projects";
import { Scroll3DElements } from "./components/Layouts/Scroll3DElements";

const App = () => {
  return (
    <>
      <Scroll3DElements />
      <AppLayout> 
          <Home /> 
          <About /> 
          <Skills /> 
          <Projects />
          <Contact />
      </AppLayout>
    </>
  );
};

export default App;
