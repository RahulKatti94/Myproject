import React from "react";
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

const CardProduct = ({carPrizeBlog}) => {


  // const box = document.getElementsById("abc");
  // const btnGo = document.getElementsById("xyz");

  // btnGo.addEventListener("click", ()=>box.style.display = "block")

  // btnGo.addEventListener("transitionend", function(e) {
  //   alert("Messsage");
  // })

  return (

    <div className="container">
      <div className="card card-product-main-div p-3">
        <div className="row m-2">
          <div className="col-10 d-flex flex-row">
            <Image className="image-details" src="/images/woden.jpg" />
            <div>
              <p className="card-product-para mb-0">Wooden Christmas Toys </p>
              <p className="" style={{ marginLeft: '0.8rem' }}>
                ₹99 <span>
                  ₹1̶9̶9̶
                </span>
              </p>
            </div>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-1 text-end">
            <span className="icon-span">
              <i className="fa-solid fa-xmark icon-close"> </i>
            </span>
          </div>
        </div>
        <div className="m-2">
          <h5 className="m-0">Description</h5>
          <p className="mt-0">Wooden Christmas Toys</p>
        </div>
        <div className="row">
          <div className="col-1"></div>
          {/* <div className="mb-3 text-center d-flex"> */}
          <div className="col-lg-4">
            <button className="card-product-another-button" >Add To Cart</button>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <button className="card-product-button">Show Me</button>
         
          </div>
          {/* </div> */}
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;