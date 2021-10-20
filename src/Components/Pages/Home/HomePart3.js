import React from "react";
import { Link } from "react-router-dom";
import "./style-home.css";
import "./style-home-mobile.css";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.jpg";
import Prague from "../../images/Prague.jpg";
import amsterdam from "../../images/amsterdam.png";
import santorini from "../../images/santorini.png";

const HomePart3 = () => {
  return (
    <div className="HomePart3">
      <div className="sec1">
        <div className="blog">
          <div className="blog-img">
            <img src={blog1} alt="blog1" />
            <div className="img-detail">
              <div className="auth">
                <p></p>
              </div>
              <div className="date">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blog-text">
            <h1>Live with no excuses & travel with no regrets</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum.
            </p>
            <div className="blog-link">
              <Link to="/blog-1">
                <h1>CONTINUE READING...</h1>
              </Link>
              <div>
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

        <div className="blog">
          <div className="blog-img">
            <img src={blog2} alt="blog2" />
            <div className="img-detail">
              <div className="auth">
                <p></p>
              </div>
              <div className="date">
                <p></p>
              </div>
            </div>
          </div>
          <div className="blog-text">
            <h1> Travel essentials you must have</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum.
            </p>
            <div className="blog-link">
              <Link to="/blog-2">
                <h1>CONTINUE READING...</h1>
              </Link>
              <div>
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
      </div>
      <div className="sec2">
        <div className="sec2-visits">
          <p>RECENT VISITS</p>
          <div className="visits">
            <img src={Prague} alt="prague" />
            <p>28 - july - 2021</p>
            <h1>Good Morning, Prague !!</h1>
          </div>
          <div className="visits">
            <img src={amsterdam} alt="amsterdam" />
            <p>28 - july - 2021</p>
            <h1>Amsterdam Rides ....</h1>
          </div>
          <div className="visits">
            <img src={santorini} alt="santorini" />
            <p>28 - july - 2021</p>
            <h1>Beauty of Santorini</h1>
          </div>
          <Link to="/posts">
            <h2>View All Visits</h2>
          </Link>
        </div>
        <div className="sec2-posts">
          <h3>RECENT BLOGS</h3>
          <p>click to view</p>
          <div className="vlogs-link">
            <Link to="/special-blog">
              <div className="vlog">
                <div className="vlog-sec1">01</div>
                <div className="vlog-sec2">
                  <h1>LOVE YOU MANGALORE</h1>
                  <h2>by FLOYD MANUEL</h2>
                </div>
              </div>
            </Link>
            <Link to="/special-blog">
              <div className="vlog">
                <div className="vlog-sec1">02</div>
                <div className="vlog-sec2">
                  <h1>WEST-GHATS RIDE</h1>
                  <h2>by ROYSON LEWIS</h2>
                </div>
              </div>
            </Link>

            <Link to="/special-blog">
              <div className="vlog">
                <div className="vlog-sec1">03</div>
                <div className="vlog-sec2">
                  <h1>COASTAL KARNATAKA</h1>
                  <h2>by Prakash Dsouza</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart3;
