import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import "./swirl.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  ModelSliderItem  from "./ModalSliderItem";

export const ModalSlider = (props) => {
  const { data, selectedItemIndex } = props;

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [activeSlidIndex, setActiveSlideIndex] = useState(selectedItemIndex)


  useEffect(() => {
    if (data) {
      setShow(true);
    }
  }, [props]);
  console.log(data);

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
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
    afterChange: (current) => {
      debugger
      setActiveSlideIndex(current)
    }
  };
  
  console.log(activeSlidIndex)
  return (
    <div className="text-center">
      <Modal
        className="cross-button h-100"
        show={show}
        backdrop="static"
        keyboard={false}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Body closeButton className="modal-class main-div" id="hello-world">
          <Slider {...settings} lazyLoad="ondemand" initialSlide={selectedItemIndex} className="slider-div transparent-bg  ">
            {data?.map((item, index) => {
              return <ModelSliderItem item={item} product = {props.product} setShow={setShow} onModalClose = {props.onModalClose} isActiveSlide={index === activeSlidIndex} />
            })}
          </Slider>
        </Modal.Body>
      </Modal>
    </div>
  );
};  

export default ModalSlider;
