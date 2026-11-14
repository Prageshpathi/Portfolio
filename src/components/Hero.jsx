
import myProfilePhoto from "../assets/myProfilePhoto.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Hero Content */}
      <div className="hero-container">

        <div className="hero-text">
          <p className="hero-greeting">
            HELLO, I'M
          </p>

          <h1>
            Prageshpathi Rajan
          </h1>

          <h2>
            Aspiring Software Engineer
          </h2>

          <p className="hero-description">
            I'm a Computer Science Engineering student passionate
            about software development, Python, AI/ML and building
            innovative technology solutions.
          </p>

          <div className="hero-buttons">
            <a href="#activities" className="hero-btn primary-btn">
              View Activities
            </a>

            <a href="#contact" className="hero-btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <img
            src={myProfilePhoto}
            alt="Prageshpathi Rajan"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
