import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { Link } from "react-router-dom"

const ShareModal = ({showShareModal}) => {
  return (
    <div className="container share-modal-class">
      <div className="card">
        <div className="card-body">
          <div className="row m-0">
            <div className="col-6 text-end">
              <span className="share-text"> Share to </span>
            </div>
            <div className="col-6 text-end">
              <span className="icon-span"
              onClick={showShareModal}>
                <i className="fa-solid fa-xmark cross-icon"> </i>
              </span>
            </div>
          </div>
       
        <div className="row m-4">
          <div className="col-5">
          </div>
          <div className="col-3 d-flex justify-content-between bg-transparent">
          <span>
            {/* <Link to= "/#"><i className="fa-brands fa-facebook font-color"></i></Link> */}
            <a title={"share to facebook"} href="https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest">
              {" "}
              <i className="fa-brands fa-facebook fb-icon"></i>
            </a>
            </span>
            <span className=" d-flex twitter-icon hide-text">
            <a title={"share to twitter"}
              href={
                "https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest"
              }
            >
              
              <i className="fa-brands fa-twitter icon-list hide-text"></i>
            </a>
            </span>
            <span className=" d-flex link-icon">
            <i title={"Copy Link"} class="fa-solid fa-link icon-link"></i>
            </span>
            <div className="col-4">
          </div>
         
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShareModal;