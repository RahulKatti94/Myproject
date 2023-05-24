import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ShareModal = ({ showShareModal }) => {
  return (
    <div className="container share-modal-class">
      <div className="card">
        <div className="card-body mt-2">
          <div className="row m-0">
            <div className="col-7 text-end">
              <span className="share-text"> Share to </span>
            </div>
            <div className="col-5 text-end ">
              <span onClick={showShareModal}>
                <i className="fa-solid fa-xmark cross-icon"> </i>
              </span>
            </div>
          </div>

          <div className="row m-2 mb-4">
            <div className="col-4"></div>
            <div className="col-4 d-flex justify-content-between bg-transparent">
              <span>
                <a
                  title={"share to facebook"}
                  href="https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest"
                >
                  {" "}
                  <img
                    className="fb-icon"
                    src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/facebook.png"
                    alt="Facebook icon"
                    height=""
                    width=""
                  ></img>
                  {/* <i className="fa-brands fa-facebook"></i> */}
                </a>
              </span>

              <span className=" d-flex">
                <a
                  title={"share to twitter"}
                  href={
                    "https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest"
                  }
                >
                  <img className="twitter-icon" src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/twitter.png"  alt="Twitter icon"height="" width="">

                  </img>
                  {/* <i className="fa-brands fa-twitter icon-list hide-text"></i> */}
                </a>
              </span>

              <span className="d-flex">
              <img title={"Copy Link"} className="icon-link" src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/copy-link.png"  alt="Copy link icon" height="" width="" />
                {/* <i title={"Copy Link"} class="fa-solid fa-link icon-link"></i> */}
              </span>
            </div>

            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
