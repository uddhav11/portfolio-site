import "./App.css";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      {/* <h1>Hello, world!</h1> */}
      <Navbar />
      <Aboutme />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
