import React from "react";
import "./style-pc.css";
import "./style.mobile.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot-part1">
          <div className="foot-part1-top">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p>+91 9740 250 911</p>
            <p>travelvlogs@gmail.com</p>
            <p>Mangalore, India</p>
          </div>
          <div className="foot-part1-last">
            <p>© Travel Vlogs 2021 | Designed by Floyd Manuel</p>
          </div>
        </div>

        <div className="foot-part2">
          <div className="foot-part2-lt">
            <Link to="/"> Home</Link>
            <Link to="/about">About Author</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="foot-part2-rt">
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
      <div className="last">
        <p>© Travel Vlogs 2021 | Designed by Floyd Manuel</p>
      </div>
    </>
  );
};

export default Footer;
