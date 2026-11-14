
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks for reaching out! The contact form needs to be connected to an email service to send messages.");

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="contact-subtitle">GET IN TOUCH</p>
          <h2>Let's <span>Connect</span></h2>
          <p>
            Have a project idea, opportunity, or just want to connect?
            Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">
            <h3>Let's talk</h3>

            <p className="contact-description">
              I'm always interested in learning, collaborating
              on projects, and exploring new opportunities.
            </p>

            <a
              href="mailto:yourmail@example.com"
              className="contact-info-item"
            >
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <div>
                <h4>Email</h4>
                <p>prageshpathiapn@gmail.com</p>
              </div>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/Prageshpathi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/prageshpathi-rm"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message <FaPaperPlane />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
