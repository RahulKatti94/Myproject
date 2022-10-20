import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Askquestion = ({showQuestionDiv}) => {
  return (
    <div className="container">
      <div className="topper-div">
        <div className="header-section">
          <div className="header">
            <span className="pre-header">Ask Question</span>
            <span className="post-header" onClick={showQuestionDiv}>
              <i className="fa-solid fa-xmark"></i>


            </span>
          </div>
          <form>
<<<<<<< HEAD
            <div className="p-3">
=======
            <div className="p-4" style={{textAlign:'center'}}>
>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
              <textarea
                required
                className="text-area"
                rows={3}
                cols = {58}
                placeholder="Type here"
              />
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="footer-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Askquestion;