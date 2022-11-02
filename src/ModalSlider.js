import React, { useState, useEffect , useRef } from "react";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import "./swirl.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import video from "../src/videos/video.mp4";
import { Image, Card, ProgressBar } from "react-bootstrap";
import main from "../src/videos/main.mp4";
import car from "../src/videos/car.mp4";
import girl from "../src/videos/girl.mp4";
import kid from "../src/videos/kid.mp4";
import rabit from "../src/videos/rabit.mp4";
import toy from "../src/videos/toy.mp4";
import Askquestion from "./Askquestion";
import ShareModal from "./ShareModal";
import ThreeDots from "./ThreeDots";
import CardProduct from "./CardProduct";
import SmallCardProduct from "./SmallCardProduct";
import  ModelSliderItem  from "./ModalSliderItem";

export const ModalSlider = (props) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  const { data, selectedItemIndex } = props;


  // const handleClick = () => {
  //   // alert();

  //   const closeFrameElement = document.getElementById("iframeTarget");

  //   if (closeFrameElement.style.display !== "none") {
  //     closeFrameElement.style.display = "none";
  //   } else {
  //     closeFrameElement.style.display = "block";
  //   }
  // };

  useEffect(() => {
    if (data) {
      setShow(true);
    }
  }, [props]);
  console.log(data);

  
 
  // function carPrizeBlog() {
  //   const carProducts = document.getElementById("cardProductDiv");

  //   if (carProducts.style.display !== "none") {
  //     carProducts.style.display = "none";
  //   } else {
  //     carProducts.style.display = "block";
  //   }
  // }

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  // function handleHide() {
  //   // setFullscreen(breakpoint);
  //   setShow(true);
  // }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centered: true,
    arrows: true,
  };
  

  return (
    <div className="text-center">
      {/* {values.map((v, idx) => (
        <button
          key={idx}
          className="me-2 mb-2  button-border"
          id="firstComponent"
          onClick={() => handleShow(v)}
        >
          Full screen
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
      ))} */}

      <Modal
        className="cross-button h-100"
        show={show}
        backdrop="static"
        keyboard={false}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Body closeButton className="modal-class main-div" id="hello-world">
          <Slider {...settings} lazyLoad initialSlide={selectedItemIndex} className="slider-div transparent-bg  ">
            {data?.map((item) => {
              return <ModelSliderItem item={item} setShow={setShow} />
            })}
          </Slider>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSlider;
