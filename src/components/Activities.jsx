
import topperImage from "../assets/topper.jpeg";
import bioreactor from "../assets/algo bio reactor.jpeg";
import dronebasednetwork from "../assets/dronebasednetwork.jpg";
import BootcampImg from "../assets/bootcamp.jpeg";
import IndustrialVisitImg from "../assets/IVImg.png";
import "./Activities.css";

const activities = [
  {
    title: "University Topper Award",
    category: "Achievement",
    date: "2026",
    description:
      "Recognized for outstanding academic performance and achievement at university.",
    image: topperImage
  },
  {
    title: "Drone as a Network Tower",
    category: "Project Presentation",
    date: "2025",
    description:
      "Presented an innovative concept of using drones as an alternative to traditional network towers and Got cash prize for the same.",
    image: dronebasednetwork
  },
  {
    title: "College Project Presentation",
    category: "Competition",
    date: "2025",
    description:
      "Secured second prize for presenting an innovative technology project about Algae-Bio Reactor to eliminate pollution ",
    image: bioreactor
  },
  {
    title: "Technical Learning",
    category: "Workshop",
    date: "2025",
    description:
      "Participated in technical learning activities and explored emerging technologies.",
    image: BootcampImg
  },
  {
    title: "Industrial Visits",
    category: "Learning",
    date: "2025",
    description:
      "Participated in an industrial visit to gain practical insights into real-world applications of technology with Shrishti Innovations in Trivandrum",
    image: IndustrialVisitImg
  }
];

function Activities() {
  const duplicatedActivities = [...activities, ...activities];

  return (
    <section className="activities-section" id="activities">
      <div className="activities-heading">
        <p>MY JOURNEY</p>
        <h2>Activities & Achievements</h2>
        <p className="activities-intro">
          A glimpse of my achievements, projects, presentations
          and learning experiences.
        </p>
      </div>

      <div className="activities-slider">
        <div className="activities-track">
          {[0, 1].map((group) => (
            <div className="activities-group" key={group}>
              {activities.map((activity, index) => (
                <article
                  className="activity-card"
                  key={`${group}-${index}`}
                >
                  <div className="activity-image">
                    <img
                      src={activity.image}
                      alt={activity.title}
                    />
                    <span className="activity-category">
                      {activity.category}
                    </span>
                  </div>

                  <div className="activity-info">
                    <span className="activity-date">
                      {activity.date}
                    </span>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="activity-hint">
        Activities scroll automatically from right to left.
      </p>
    </section>
  );
}

export default Activities;
