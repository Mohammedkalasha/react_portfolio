import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "../src/css/styles.css"
import Skills from "./components/Skill/Skills"



function App() {

  
  return (
    <>
      <Topbar></Topbar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
