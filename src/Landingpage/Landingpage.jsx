import React from "react";
import "./Landingpage.css";
import chartImg from "../assets/banner.png.png";
import subramani from "../assets/banner.png.png";
import aswath from "../assets/aswath_professional.png";
import bala from "../assets/kishore.png";
import kishore from "../assets/Kishore.png";

/* ✅ CARD COMPONENT */
const Card = ({ name, role, desc, skills, img }) => {
  return (
    <div className="card-premium">
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p className="role">{role}</p>

        <p className="desc">{desc}</p>

        <div className="skills">
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
/* ✅ MAIN COMPONENT */
const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>
              Data Mastery for the <br />
              <span>Next Decade.</span>
            </h1>

            <p>
              Go beyond simple spreadsheets. Master high-level data intelligence,
              predictive modeling, and strategic execution.
            </p>

            <ul className="hero-points">
              <li>Data Analytics</li>
              <li>Data Engineering</li>
              <li>Business Intelligence (BI)</li>
              <li>Machine Learning</li>
              <li>Statistics</li>
              <li>Agentic AI</li>
            </ul>

            <div className="hero-buttons">
              <button className="primary-btn">Start Learning</button>
              <button className="secondary-btn">View Curriculum</button>
            </div>

            <div className="hero-proof">
              <div className="avatars">
                <img src="https://i.pravatar.cc/40?img=1" alt="" />
                <img src="https://i.pravatar.cc/40?img=2" alt="" />
                <img src="https://i.pravatar.cc/40?img=3" alt="" />
              </div>
              <p>Joined by 1,500+ aspiring professionals this month</p>
            </div>
          </div>

          <div className="hero-right">
            <img src={chartImg} alt="Analytics Chart" />
          </div>
        </div>
      </section>

      {/* TEAM SECTION (2 ROWS) */}
      <div className="team-wrapper">
        <h1>Our Experts Panel</h1>

        <div className="team-grid">
          <Card
            name="Subramani"
            role="Chief Data Scientist"
            desc="AI leader with multi-industry expertise."
            skills={["AI", "ML", "Data Science"]}
            img={subramani}
          />

          <Card
            name="Aswath"
            role="Talent Acquisition Head"
            desc="Hiring and workforce strategy expert."
            skills={["Recruitment", "HR"]}
            img={aswath}
          />

          <Card
            name="Nishanth"
            role="Senior Data Engineer"
            desc="Cloud & big data specialist."
            skills={["AWS", "ETL"]}
            img={subramani} 
          />

          <Card
            name="Prasanna"
            role="Senior BI Developer"
            desc="Dashboard and BI systems expert."
            skills={["Power BI", "SQL"]}
            img={aswath}
          />

          <Card
            name="Bala"
            role="Senior Data Scientist"
            desc="Predictive modeling specialist."
            skills={["Python", "ML"]}
            img={bala}
          />

          <Card
            name="Kishore"
            role="Senior AI Engineer"
            desc="AI automation expert."
            skills={["AI", "Deep Learning"]}
            img={kishore}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;