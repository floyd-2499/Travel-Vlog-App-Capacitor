import React, { useEffect, useState } from "react";
import Header from "../../Head-Foot/Header";
import Footer from "../../Head-Foot/Footer";
import "./blog-style.css";
import "./blog-mobile.css";
import splBlogs from "../../images/splBlogs.svg";
import b1sup from "../../images/b1sup.svg";
import author from "../../images/author.svg";
import user1 from "../../images/user1.svg";
import user2 from "../../images/user2.svg";
import user3 from "../../images/user3.svg";
import Loader from "../Loading/Loader";

const SpecialBlog = () => {
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
              <h1>SPECIAL BLOG</h1>
            </div>
            <div className="img-container">
              <img src={splBlogs} alt="blog1" />
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

                <div className="blog-part">
                  <h2>Love You Mangalore</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  {/* b1sup */}
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  <img src={b1sup} alt="" />
                  {/* video */}
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages.
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
                      <p>#Floyd Manuel</p>
                    </div>
                  </div>
                </div>
                <div className="blog-part">
                  <h2>West-Ghats Ride</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  {/* b1sup */}
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  <img src={b1sup} alt="" />
                  {/* video */}
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages.
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
                      <p>#Royson Lewis</p>
                    </div>
                  </div>
                </div>

                <div className="blog-part">
                  <h2>Coastal Karnataka</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  {/* b1sup */}
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  <img src={b1sup} alt="" />
                  {/* video */}
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages.
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
                      <p>#Prakash Dsouza</p>
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

              <div className="rt-content">
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
                <div className="about-author">
                  <img src={author} alt="author" />
                  <h5>Royson Lewis</h5>
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
                <div className="about-author">
                  <img src={author} alt="author" />
                  <h5>Prakash Dsouza</h5>
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

export default SpecialBlog;
