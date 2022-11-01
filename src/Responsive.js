import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./swirl.css";
import { Card, Image, ProgressBar } from "react-bootstrap";
import ModalSlider from "./ModalSlider";
// import video from "../src/videos/video.mp4";
// import ModalSlider from "./ModalSlider";



const Responsive = () => {
  // const [isShown, setIsShown] = useState(true);
  const [style, setStyle] = useState({ display: 'block' });
  const [mouseHoverElementIndex, setmouseHoverElementIndex] = useState();
  const [showModalSlider, setshowModalSlider] = useState(false);
  const [selectedEvent, setselectedEvent] = useState();
  // const [isgiven, setIsgiven] = useState(true);
  // const [isstate, setIsstate] = useState(true);
  // const [isover, setIsover] =   useState(true);
  // const [isvalue, setIsvalue] = useState(true);
  // const [istaken, setIstaken] = useState(true);
  // const [isdone, setIsdone] = useState(true);


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.goswirl.live/index.php/shopify/videolistingV2?user=pl8fbadv').then(y => y.json()).then(y => {
      setData(y)
    });

  }, [])

  console.log(data);



  var settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cardDetails = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const shoot = (event) => {
    setshowModalSlider(true);
    setselectedEvent(event)
  }


  return (
    <div className="container" id="closeModal-id">
      <br /><br /> <br /> <br />
      {
        !showModalSlider ?
          <Slider {...settings} >


            {
              data.swilrs?.video?.map((item, index) => {
                return (<div>   <Card
                  onClick={() => shoot(item)}
                  className="border-0 shabaash"
                  dataBackdrop="static" dataKeyboard="false"
                  // onMouseEnter={() => setIsShown(false)}
                  // onMouseLeave={() => setIsShown(true)}
                  onMouseOver={(e) => {
                    setmouseHoverElementIndex(index);
                    setStyle({ display: 'none' });
                  }}
                  onMouseOut={(e) => {
                    setStyle({ display: 'block' });
                  }}
                >

                  <Card.Body className="p-0 d-flex">
                    <video
                      id="video"
                      className=" slider-video card-video"
                      // play={item.auto_play}
                      src={item.video_url}
                      loop
                      onMouseOver={(event) => event.target.play()}
                      onMouseOut={(event) => event.target.pause()}

                      mute={item.uto_play_mute_un}
                      loading="lazy"
                      style={cardDetails}
                    ></video>
                    <div className="viewers d-flex">
                      <span>
                        <i className="fa fa-eye  f-icon" aria-hidden="true"></i>
                      </span>
                      <span>{item.total_views}</span>
                    </div>
                    <div className="video-timer">
                      <span>{item.time_sec} </span>
                    </div>
                    <div className="modal-button modal_btn">



                      <button className="me-2 mb-2 button-border" style={{ display: mouseHoverElementIndex === index ? 'none' : 'block' }}>
                        <i className="fa fa-play icon-size"></i></button>

                    </div>
                  </Card.Body>
                  <Card.Footer className="footer-card border border-top-0">
                    <div className="footer-pic">
                      <Image
                        className="imagesmall w3-round-large"
                        src="/images/car.jpg"
                      />{" "}
                    </div>
                    {
                      item.product && item.product.length > 0 ?
                        item.product.map((itm, idx) => (

                          idx === 0 ?
                            <>
                              <h5 className="footer-heading">
                                <b>{itm.title}</b>
                              </h5>
                              <p className="price-card">
                                <b>{itm.price} </b>
                                {
                                  itm.price !== itm.discount_price ?
                                    <del style={{ fontWeight: 500 }}>{itm.discount_price}</del>
                                    : null
                                }
                              </p>
                            </>
                            : null


                        ))
                        : null
                    }

                    <ProgressBar
                      className="p-bar"
                      now="30"
                      style={{ width: "100%" }}

                      variant="secondary"
                      play={item.auto_play_video}
                    />
                  </Card.Footer>
                </Card></div>)
              })
            }

            
          </Slider>
          :
          <ModalSlider 
          data={selectedEvent} onModalClose={() => setshowModalSlider(false)}
          >
          </ModalSlider>
      }

    </div>

  );
};
export default Responsive;