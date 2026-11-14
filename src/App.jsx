
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="site-video-background" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="site-video-overlay" aria-hidden="true" />
      <div className="site-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Activities />
        <Contact />
      </div>
    </>
  );
}

export default App;
