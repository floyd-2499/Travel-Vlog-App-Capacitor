import React from "react";
import { Link } from "react-router-dom";
import "./style-home.css";
import "./style-home-mobile.css";
import p1 from "../../images/h-p1.jpg";

const HomePart1 = () => {
  return (
    <div className="HomePart1">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="part1-container">
        <div className="part1-lt">
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

        <div className="part1-rt">
          <div className="texts">
            <h1>Live with no excuses & travel with no regrets</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              quisquam ullam laborum deleniti labore exercitationem non ipsam
              maiores! Vitae deserunt maiores obcaecati, aspernatur consequuntur
              odio sunt atque accusamus culpa deleniti! Itaque libero reiciendis
              corrupti vel, iusto voluptas ullam voluptate odit quis beatae, id
              dignissimos saepe nihil! Laboriosam eos eum debitis necessitatibus
              nesciunt. Quos est cum eos? Officia perferendis provident
              cupiditate.
            </p>
            <Link to="/blog-1">
              <h2>Continue reading ...</h2>
            </Link>
          </div>

          <div className="pic">
            <img src={p1} alt="part1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
