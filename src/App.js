import './App.css';

import Navbar from './components/Navbar_files/Navbar';
import Home from './components/Home_page/Home';
import About from './components/About_page/About';
import Projects from './components/Projects_page/Projects';
import Experience from './components/Experience_page/Experience';
import Contact from './components/Contact_page/Contact';

function App() {
    window.addEventListener("load", () => {
      const loader = document.querySelector(".pre-loader");
  
      if (loader) {
        loader.classList.add("pre-loader--hidden");
        // const a = document.querySelector(".App");
  
        loader.addEventListener("transitionend", () => {
          loader.classList.display = "none";
        });
      }
    });
  return (
    <div className="App">
      <div className="pre-loader">
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>  
      </div>
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
