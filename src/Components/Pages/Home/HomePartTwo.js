import React from "react";
import { Link } from "react-router-dom";
import "./style-home.css";
import "./style-home-mobile.css";
import roadtrip from "../../images/roadtrip.png";
import hiking from "../../images/hike.png";
import wild from "../../images/wild.png";
import beach from "../../images/beach.png";

const HomePartTwo = () => {
  return (
    <div className="HomePart2">
      <Link to="/posts">
        <div className="card">
          <div className="sec1">
            <img src={roadtrip} alt="card" />
          </div>
          <div className="sec2">
            <h1>ROAD TRIPS</h1>
            <p>20 Posts</p>
            <h2>View Posts</h2>
          </div>
        </div>
      </Link>

      <Link to="/posts">
        <div className="card">
          <div className="sec1">
            <img src={hiking} alt="card" />
          </div>
          <div className="sec2">
            <h1>HIKING</h1>
            <p>20 Posts</p>
            <h2>View Posts</h2>
          </div>
        </div>
      </Link>

      <Link to="/posts">
        <div className="card">
          <div className="sec1">
            <img src={wild} alt="card" />
          </div>
          <div className="sec2">
            <h1>WILD LIFE</h1>
            <p>20 Posts</p>
            <h2>View Posts</h2>
          </div>
        </div>
      </Link>

      <Link to="/posts">
        <div className="card">
          <div className="sec1">
            <img src={beach} alt="card" />
          </div>
          <div className="sec2">
            <h1>BEACH TRIPS</h1>
            <p>20 Posts</p>
            <h2>View Posts</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePartTwo;
