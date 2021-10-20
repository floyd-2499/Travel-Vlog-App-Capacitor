import React from "react";
import Header from "../Head-Foot/Header";
import Footer from "../Head-Foot/Footer";
import "./page-style.css";
import "./page-style-mobile.css";
import about from "../images/about.jpg";

const About = () => {
  return (
    <div className="page-bg">
      <div className="page">
        <Header />

        <div className="heading">
          <h1>ABOUT AUTHOR</h1>
        </div>

        <div className="about-container">
          <img src={about} alt="about" />

          <div className="texts">
            <h1>
              Hi, <br /> I am <br /> Floyd Manuel
            </h1>
            <p>
              {" "}
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum.
            </p>
            <div className="icons">
              <a href="https://www.instagram.com/travelvlog.fm/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100065123287798">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/vlog20_fm">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
