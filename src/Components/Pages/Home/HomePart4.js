import React from "react";
import { Link } from "react-router-dom";
import "./style-home.css";
import "./style-home-mobile.css";
import hp4 from "../../images/h-p4.jpg";

const HomePart4 = () => {
  return (
    <div className="homePart4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="content">
        <div className="Part1">
          <img src={hp4} alt="mangalore" />
          <div className="texts">
            <h1>
              Special Blogs <br /> on <br /> Manglore & <br /> Western Ghats
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore, iusto repudiandae perspiciatis assumenda minima nihil
              illo explicabo, asperiores magni atque neque earum rerum facilis
              nemo eos libero ipsum quaerat officiis! Quidem quasi, facere
              aspernatur nisi commodi alias cum ducimus perferendis fugiat.
            </p>
            <Link to="/special-blog">
              <h2>View Blogs ...</h2>
            </Link>
          </div>
        </div>
        <div className="Part2">
          <div className="content">
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
    </div>
  );
};

export default HomePart4;
