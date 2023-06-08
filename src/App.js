import './App.css';

import Navbar from './components/Navbar_files/Navbar';
import Home from './components/Home_page/Home';
import About from './components/About_page/About';
import Projects from './components/Projects_page/Projects';
import Experience from './components/Experience_page/Experience';
import Contact from './components/Contact_page/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
