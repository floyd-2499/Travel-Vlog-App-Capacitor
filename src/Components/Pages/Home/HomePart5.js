import React, { useState } from "react";
import "./style-home.css";
import "./style-home-mobile.css";

const HomePart5 = () => {
  const [email, setEmail] = useState("");



  const [display, setDisplsy] = useState("none");

  function resetInput(e) {
    e.preventDefault();
    setEmail("");
    if (email === "") {
      setDisplsy("none");
    } else {
      setDisplsy("block");
    }
  }

  return (
    <div>
      <div className="HomePart5">
        <h1>Subscibe to our Newsletter</h1>
        <i className="fas fa-comment-alt"></i>
        <p>Get each and every blogs through your e-mail</p>
        <form className="inputs" onSubmit={resetInput}>
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={resetInput}>Subscribe</button>
        </form>
      </div>

      {/* <div className="modal" style={{ display: `${display}` }}></div> */}
      <div className="txt" style={{ display: `${display}` }}>
        <i class="fas fa-times" onClick={() => setDisplsy("none")}></i>
        <h1>Thank You</h1>
      </div>
    </div>
  );
};

export default HomePart5;
