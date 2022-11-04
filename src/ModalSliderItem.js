import React, {useState, useRef, useEffect} from 'react'
import { Image, Card, ProgressBar } from "react-bootstrap";

import Askquestion from "./Askquestion";
import ShareModal from "./ShareModal";
import ThreeDots from "./ThreeDots";
import CardProduct from "./CardProduct";
import SmallCardProduct from "./SmallCardProduct";

const ModalSliderItem = (props) => {
  const [playPause, setPlayPause] = useState(true);
  const [playButtonVisible, setPlayButtonVisible] = useState(false)

  const videoRef = useRef()
  const {item, setShow} = props

  useEffect(() => {
    if(playPause && videoRef.current) {
      videoRef.current.play()
    }

    if(!playPause && videoRef.current) {
      videoRef.current.pause()
    }
  },[playPause, videoRef.current])

  useEffect(() => {
    setPlayPause(props.isActiveSlide)

    if(!props.isActiveSlide && videoRef) {
      videoRef.current.currentTime = 0
    }
  },[props.isActiveSlide])

  const clickModal = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };


  function shareIconModal(props) {
        const sharedIconModal = document.getElementsByClassName(props);
    
        console.log("Clicked");
    
        Array.prototype.forEach.call(sharedIconModal, function (element) {
          if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          } 
        });
      }
      
    return(
        <div className="position-relative vh-100">
              <Card className="modal-background-color"
                onMouseEnter={() => setPlayButtonVisible(true)}
                onMouseLeave={() => setPlayButtonVisible(false)}
              >
                <div className="card-header">
                  <i
                    title={"More"}
                    className="fa fa-ellipsis-v text-light dot-icon"
                    aria-hidden="true"
                    onClick={() => shareIconModal("three-rated-dot1")}
                  ></i>
                  <p className="txt ">{item?.video_title}</p>
                  <span className="icon-border">
                    <Image
                      title={"PIP Mode"}
                      className="modal-first-para"
                      id="closeIconId"
                      onClick={() => setShow(false)}
                      src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pip.svg"
                    />
                  </span>

                  <span className="icon-border">
                    <img
                      title={"Mute/Unmute"}
                      className="doticons"
                      src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/mute.svg"
                      alt="Share icon"
                      height={"28px"}
                      width=""
                    ></img>
                  </span>
                  <span
                    className="icon-border"
                    id="closeIconId"
                    onClick={() => { setShow(false); props.onModalClose() }}>
                    {/* <i className="fa-solid fa-xmark doticons only-icon-details"></i> */}
                    <label
                      title={"Close"}
                      className="close-modal"
                      style={{ fontfamily: "arial" }}
                    > 
                      ×
                    </label>
                  </span>
                </div>
                <div
                  className="three-dots-main-div-class-element three-rated-dot1"
                  style={{ display: "none" }}
                >
                  <ThreeDots
                    iconVisitModal={() => shareIconModal("three-rated-dot1")}
                  />
                </div>

                <video
                  className=" slider-video vidio"
                  src={item?.video_url}
                  // loop
                  // autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                  ref = {videoRef}
                />
                {playButtonVisible && (
                  <div className="modal-button modal_btn"
                  //  onClick={(event) => event.target.play()}
                  onClick={() => setPlayPause((value) => !value )}>
                    <button className="me-2 mb-2 button-border-icon">
                      <img
                        title={"Play/Pause"}
                        className="pause-play-icon"
                        src={
                          playPause 
                          ? "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/pause.svg"
                          : "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
                        }
                        alt="Play/Pause icon"
                        height=""
                        width=""
                      />
                      {/* <i className="fa fa-play pause-play-icon"></i> */}
                    </button>
                  </div>
                )}
                <div className="modal-button modal_btn" 
                style={{display : "none"}}
                 >
                  <button className="me-2 mb-2 button-border-icon">
                  <img
                      title={"Play/Pause"}
                      className="pause-play-icon"
                      src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/play.svg"
                      alt="Play/Pause icon"
                      height=""
                      width=""
                      />

                    {/* <i className="fa fa-play pause-play-icon"></i> */}
                  </button>
                </div>
                <ProgressBar
                  className="p-bar"
                  now="30"
                  style={{ width: "100%" }}
                  variant="secondary"
                />

                <div
                  className="Small-card-product-component target-image1"
                  style={{ display: "none" }}
                >
                  <SmallCardProduct
                    CarDetailsShare = {() => shareIconModal("target-image1")}
                  />
                </div>
                <div
                  className="Component-position target-code"
                  id="displayDivId"
                  style={{ display: "none" }}
                >
                  <Askquestion
                    showQuestionDiv={() => shareIconModal("target-code")}
                  />
                </div>
                <div
                  className="Toggle-Button1"
                  id="share-modal-id"
                  style={{ display: "none" }}
                >
                  <ShareModal
                    showShareModal={() => shareIconModal("Toggle-Button1")}
                  />
                </div>

                <Card.Body className="modalcard">
                  <div className="d-flex mb-4">
                    <span
                      className="footer-border me-2"
                      onClick={() => shareIconModal("Toggle-Button1")}
                    >
                      {/* <i
                        className="fa fa-share-alt footer-icon"
                        aria-hidden="true"
                      ></i> */}
                      <img
                        title={"Share"}
                        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/share.svg"
                        alt="Share icon"
                        height=""
                        width=""
                      ></img>
                    </span>
                    <span
                      className="footer-border"
                      onClick={() => shareIconModal("target-code")}
                    >
                      {/* <i className="fa-regular fa-circle-question footer-icon"></i> */}
                      <img
                        title={"Ask Question"}
                        src="https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/ask-question.svg"
                        alt="Ask Question icon"
                        height=""
                        width=""
                      ></img>
                    </span>
                  </div>
                  <div className="d-flex">
                    <Image
                      style={{ display: "block" }}
                      className="image-border"
                      onClick={() => shareIconModal("target-image1")}
                      showShareModal11={() => shareIconModal("target-image1")}
                      src="/images/car.jpg"
                    />
                  </div>
                  {/* <div
                    id="iframeTarget" className="iframe-main-div"
                    onClick={() => setShow(false)}>
                    <Iframe showSmallFrameCode={() => shareIconModal("iframe-key")} />
                  </div> */}
                </Card.Body>
              </Card>
            </div>
    )
}

export default ModalSliderItem