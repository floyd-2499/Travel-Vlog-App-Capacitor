import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Head-Foot/Header";
import Footer from "../../Head-Foot/Footer";
import "./blog-style.css";
import "./blog-mobile.css";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.jpg";
import splBlogs from "../../images/splBlogs.svg";
import Loader from "../Loading/Loader";

const CombineBlog = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="page-bg">
          <div className="page">
            <Header />
            <div className="heading">
              <h1>BLOGS LIST</h1>
            </div>
            <div className="content">
              <Link to="/blog-1">
                <div className="blog-card">
                  <img src={blog1} alt="blog1" />
                  <div className="texts">
                    <h1>Live with no excuses & travel with no regrets</h1>
                    <h2>by Floyd Dsouza</h2>
                    <div className="blog-link">
                      <p>28 - July - 2021</p>
                      <h3>VIEW BLOG...</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/blog-2">
                <div className="blog-card">
                  <img src={blog2} alt="blog2" />
                  <div className="texts">
                    <h1>Travel essentials you must have</h1>
                    <h2>by Floyd Dsouza</h2>
                    <div className="blog-link">
                      <p>28 - July - 2021</p>
                      <h3>VIEW BLOG...</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/special-blog">
                <div className="blog-card">
                  <img src={splBlogs} alt="splBlogs" />
                  <div className="texts">
                    <h1>Special Blogs on Manglore & Western Ghats</h1>
                    <h2>by Floyd Dsouza</h2>
                    <div className="blog-link">
                      <p>28 - July - 2021</p>
                      <h3>VIEW BLOG...</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CombineBlog;
