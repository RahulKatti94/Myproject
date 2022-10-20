import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import { Link } from "react-router-dom"

const ShareModal = () => {
  return (
    <div className="container share-modal-class">
      <div className="card">
        <div className="card-body">
<<<<<<< HEAD
          <div className="row m-0 mt-2">
=======
          <div className="row m-0">
>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
            <div className="col-7 text-end">
              <span className="share-text"> Share to </span>
            </div>
            <div className="col-5 text-end">
<<<<<<< HEAD
              <span className="icon-span"
              onClick={showShareModal}>
=======
              <span className="icon-span">
>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
                <i className="fa-solid fa-xmark cross-icon"> </i>
              </span>
            </div>
          </div>
<<<<<<< HEAD
       
        <div className="row m-4 mt-0">
          <div className="col-4">
          </div>
          <div className="col-5 d-flex justify-content-between bg-transparent">
          <span>
            <a title={"share to facebook"} href="https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest">
              {" "}
              {/* <i className="fa-brands fa-facebook fb-icon"></i> */}
              <img className="all-icons" src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/facebook.png" data-sharelink="https://olliecraft.com/?ssv=aHR0cHM6Ly92aWRlby5ndW1sZXQuaW8vNjIxNzcwY2ExYzhiODIxYjA1ZDcwMzVhLzYzNGU4OWY2MjlhODAxOTk1YTQ4NDEzOS9tYWluLm1wNA==" alt="Facebook icon" title="Share on Facebook" height="" width="" />
            </a>
            </span>
            <span>
            <a title={"share to twitter"}
              href={
                "https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest"
              }
            >
              
              <img className="all-icons"  src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/twitter.png" data-sharelink="https://olliecraft.com/?ssv=aHR0cHM6Ly92aWRlby5ndW1sZXQuaW8vNjIxNzcwY2ExYzhiODIxYjA1ZDcwMzVhLzYzNGU4OWY2MjlhODAxOTk1YTQ4NDEzOS9tYWluLm1wNA==" alt="Twitter icon" title="Share on Twitter" height="" width="" />
            </a>
            </span>
            <span>
            <img className="all-icons" src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/copy-link.png" data-sharelink="https://olliecraft.com/?ssv=aHR0cHM6Ly92aWRlby5ndW1sZXQuaW8vNjIxNzcwY2ExYzhiODIxYjA1ZDcwMzVhLzYzNGU4OWY2MjlhODAxOTk1YTQ4NDEzOS9tYWluLm1wNA==" alt="Copy link icon" title="Copy Link" height="" width="" />
            {/* <i title={"Copy Link"} class="fa-solid fa-link icon-link"></i> */}
            </span>
            <div className="col-2">
          </div>
         
=======

          <div className="row m-4">
            <div className="col-2">
            </div>
            {/* <div className="col-6 d-flex justify-content-between bg-transparent"> */}
            <div className="col-2 d-flex justify-content-between bg-transparent">
              <span>
                {/* <Link to= "/#"><i className="fa-brands fa-facebook font-color"></i></Link> */}
                <a title={"share to facebook"} href="https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest">
                  {" "}
                  <i className="fa-brands fa-facebook fb-icon"></i>
                </a>
              </span>
            </div>

            <div className="col-1">
            </div>

            <div className="col-2 d-flex justify-content-between bg-transparent">
              <span className=" d-flex twitter-icon hide-text">
                <a title={"share to twitter"}
                  href={
                    "https://social.msdn.microsoft.com/Forums/sqlserver/en-US/f362f061-c8dd-41a5-a0ff-c0c66a737fec/website-testing-with-random-urls?forum=vstest"
                  }
                >

                  <i className="fa-brands fa-twitter icon-list hide-text"></i>
                </a>
              </span>
            </div>

            <div className="col-1">
            </div>

            <div className="col-2 d-flex justify-content-between bg-transparent">
              <span className=" d-flex link-icon">
                <i title={"Copy Link"} class="fa-solid fa-link icon-link"></i>
              </span>
            </div>



            <div className="col-2">
            </div>

            {/* </div> */}
>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;