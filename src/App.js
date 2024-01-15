import "./App.css";

import Navbar from "./components/Navbar_files/Navbar";
import Home from "./components/Home_page/Home";
import About from "./components/About_page/About";
import Projects from "./components/Projects_page/Projects";
import Experience from "./components/Experience_page/Experience";
import Contact from "./components/Contact_page/Contact";

function hidePreloader() {
  const loader = document.querySelector(".pre-loader");
  if (loader) {
    loader.classList.add("pre-loader--hidden");

    loader.addEventListener("transitionend", () => {
      loader.classList.add("pre-loader--hide");
    });
  }
}

function App() {
  // Preloader
  const timerID = setTimeout(() => {
    hidePreloader();
  }, 10000);

  window.addEventListener("load", () => {
    clearTimeout(timerID);
    hidePreloader();
  });

  return (
    <div className="App">
      <div className="pre-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
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
