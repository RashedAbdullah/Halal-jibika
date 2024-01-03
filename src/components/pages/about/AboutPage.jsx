import React from "react";
import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="mainAboutPage">
      <div className="aboutOutRoundFolder">
        <div className="aboutRoundedFolder">
          <div>
            <h2>Welcome to</h2>
            <h1>HALAL JIBIKA</h1>
            <p>Discover Meaningful Opportunities Aligned with Your Values</p>
          </div>
        </div>
      </div>
      <div className="aboutNotRounded">
        <div>
          <h3>Why Choose Halal-Jibika Jobs?</h3>
          <p>
            <FaCheckCircle /> <b>1. Ethical Opportunities:</b> Our platform is
            dedicated to curating job listings from companies committed to
            ethical and Halal business practices. Find roles that resonate with
            your values.
          </p>
          <p>
            <FaCheckCircle /> <b>2. Diverse Opportunities:</b> Explore a wide
            range of career paths spanning various industries. Whether you're a
            seasoned professional or just starting your career, we have
            opportunities for everyone.
          </p>
          <p>
            <FaCheckCircle /> <b>3. User-Friendly Platform:</b> Our React-based
            platform ensures a seamless and intuitive user experience. Easily
            browse, search, and apply for jobs that match your skills and
            aspirations.
          </p>
          <p>
            <FaCheckCircle /> <b>4. Community Support:</b> Join a community of
            like-minded professionals. Share experiences, gain insights, and
            build connections with individuals who prioritize Halal work
            environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
