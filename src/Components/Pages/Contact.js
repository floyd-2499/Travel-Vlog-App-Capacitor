import React,{useState} from "react";
import Header from "../Head-Foot/Header";
import Footer from "../Head-Foot/Footer";
import "./page-style.css";
import "./page-style-mobile.css";


const Contact = () => {
  const [email, setEmail] = useState("");
  const [display, setDisplsy] = useState("none");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState("");

  function resetInput(e) {
    e.preventDefault();
    setEmail("");
    setName("");
    setNum("");
    setMsg("");
    if (email.includes("@" && ".com")) {
      setDisplsy("block");
    } else {
      setDisplsy("none");
    }
  }

  return (
    <div className="page-bg">
      <div className="page">
        <Header />
        <div className="heading">
          <h1>CONTACT US</h1>
        </div>

        <div className="info">
          <div className="sec">
            <h1>Phone number :</h1>
            <p>+91 9740250 911</p>
          </div>
          <div className="sec">
            <h1>E-mail Address :</h1>
            <p>travelvlogs@gmail.com</p>
          </div>
          <div className="sec">
            <h1>Office Address :</h1>
            <p>113 Mangalore City</p>
            <p>Karnataka, India</p>
          </div>
        </div>

        <div className="form">
          <div className="head">
            <h1>Send Us Mail</h1>
            <h6>_</h6>
          </div>
          <div className="inputs">
            <input type="text" id="msg" placeholder="Message" value={msg}
                onChange={(e) => setMsg(e.target.value)}/>
            <div className="user-info">
              <input type="text" id="name" placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}/>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="text" id="num" placeholder="Phone No." value={num}
                onChange={(e) => setNum(e.target.value)}/>
            </div>
            <div className="btn" onClick={resetInput}>
              Submit
            </div>
          </div>
          <div className="txt" style={{ display: `${display}` }}>
            <i class="fas fa-times" onClick={() => setDisplsy("none")}></i>
            <h1>Thank You</h1>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
