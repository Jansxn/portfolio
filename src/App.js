import './App.css';

import Navbar from './components/Navbar_files/Navbar';
import Home from './components/Home_page/Home';
import About from './components/About_page/About';
import Projects from './components/Projects_page/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
