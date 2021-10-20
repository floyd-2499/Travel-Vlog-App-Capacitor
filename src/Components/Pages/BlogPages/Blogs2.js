import React, { useEffect, useState } from "react";
import Header from "../../Head-Foot/Header";
import Footer from "../../Head-Foot/Footer";
import "./blog-style.css";
import "./blog-mobile.css";
import blog2 from "../../images/blog2.jpg";
import b1sup from "../../images/b1sup.svg";
import author from "../../images/author.svg";
import user1 from "../../images/user1.svg";
import user2 from "../../images/user2.svg";
import user3 from "../../images/user3.svg";
import Loader from "../Loading/Loader";

const Blogs2 = () => {
  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  function resetInput(e) {
    e.preventDefault();
    setInput("");
    setName("");
    setMail("");
  }
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
              <h1>BLOGS</h1>
            </div>
            <div className="img-container">
              <img src={blog2} alt="blog1" />
            </div>

            <div className="blog-contents">
              <div className="left-content">
                <h1>Live with no excuses & travel with no regrets</h1>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum
                </p>
                <img src={b1sup} alt="" />
                {/* b1sup */}
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum
                </p>
                <iframe
                  title="blog1 related"
                  src="https://www.youtube.com/embed/RSCoug4NgRE"
                  frameborder="0"
                ></iframe>
                {/* video */}
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum
                </p>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
                <div className="blog-share">
                  <div className="bs-left">
                    <h6>Share :</h6>
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
                  <div className="rt">
                    <p>#TRAVEL</p>
                  </div>
                </div>

                <div className="author">
                  <img src={author} alt="author" />
                  {/* author image */}
                  <div className="texts">
                    <h1>Floyd Manuel</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                    <div className="media">
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

                <div className="comment-section">
                  <h1>COMMENTS...!!!</h1>
                  <div className="user-comments">
                    <div className="uc-card">
                      <img src={user1} alt="user1" />
                      {/* user card img */}
                      <div className="texts">
                        <h1>John Quil</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </p>
                        <h2>28 July 2020</h2>
                      </div>
                    </div>
                    <div className="uc-card">
                      <img src={user2} alt="user2" />
                      {/* user card img */}
                      <div className="texts">
                        <h1>Liz Erd</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </p>
                        <h2>28 July 2020</h2>
                      </div>
                    </div>
                    <div className="uc-card">
                      <img src={user3} alt="user3" />
                      <div className="texts">
                        <h1>A. Mused</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </p>
                        <h2>28 July 2020</h2>
                      </div>
                    </div>
                  </div>
                  <div className="make-comment">
                    <h1>-- MAKE A COMMENT -- </h1>

                    <div className="comment">
                      <input
                        type="text"
                        placeholder="Comment"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                    </div>
                    <div className="inputs">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </div>
                    <button onClick={resetInput}>Submit</button>
                  </div>
                </div>
              </div>

              <div className="rt-content" style={{
                  position: "-webkit-sticky",
                  position: "sticky",
                  top: "0",
                }}>
                <div className="about-author">
                  <h1>ABOUT AUTHOR</h1>
                  <img src={author} alt="author" />
                  <h5>Floyd Manuel</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam, autem molestiae ullam commodi iste aliquid
                    architecto, alias dolorem odit.
                  </p>
                  <div className="media-section">
                    <div className="media-card">
                      <i className="fab fa-facebook"></i>
                      <h2>Facebook</h2>
                      <p>1.4k likes</p>
                    </div>
                    <div className="media-card">
                      <i className="fab fa-instagram"></i>
                      <h2>Instagram</h2>
                      <p>1.4k likes</p>
                    </div>
                    <div className="media-card">
                      <i className="fab fa-twitter"></i>
                      <h2>Twitter</h2>
                      <p>1.4k likes</p>
                    </div>
                  </div>
                </div>
                {/* <div className="sec2-posts">
                  <h3>RECENT BLOGS</h3>
                  <p>click to view</p>
                  <div className="vlogs-link">
                    <div className="vlog">
                      <div className="vlog-sec1">01</div>
                      <div className="vlog-sec2">
                        <h1>LOVE YOU MANGALORE</h1>
                        <h2>by FLOYD MANUEL</h2>
                      </div>
                    </div>
                    <div className="vlog">
                      <div className="vlog-sec1">02</div>
                      <div className="vlog-sec2">
                        <h1>WEST-GHATS RIDE</h1>
                        <h2>by ROYSON LEWIS</h2>
                      </div>
                    </div>
                    <div className="vlog">
                      <div className="vlog-sec1">03</div>
                      <div className="vlog-sec2">
                        <h1>COASTAL KARNATAKA</h1>
                        <h2>by Prakash Dsouza</h2>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
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

export default Blogs2;
