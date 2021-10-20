import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style-pc.css";
import "./style.mobile.css";
import logo from "../images/logo.svg";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [display, setDisplay] = useState("none");

  return (
    <div>
      <div className="header">
        <div className="head-content">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className="nav-icon">
            <i
              className="fas fa-paper-plane"
              onClick={() => setDisplay("block")}
            ></i>
          </div>
        </div>
      </div>

      <Fade right cascade>
        <div className="links" style={{ display: `${display}` }}>
          <i className="fas fa-backward" onClick={() => setDisplay("none")}></i>
          <div className="navs">
            <Link to="/">
              <h1>HOME</h1>
            </Link>
            <Link to="/about">
              <h1>ABOUT</h1>
            </Link>
            <Link to="/contact">
              <h1>CONTACT</h1>
            </Link>
            <Link to="/posts">
              <h1>POSTS</h1>
            </Link>
            <Link to="/blogs">
              <h1>BLOGS</h1>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
