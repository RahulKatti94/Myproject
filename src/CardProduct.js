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
      <div className="card card-product-main-div" id="abc">
        <div className="row m-2">
          <div className="col-6 d-flex flex-row">
            <Image className="image-details" src="/images/woden.jpg" />
            <p className="card-product-para"><b>Wooden Christmas Toys <br />₹99
              </b> <strike style = {{color : "#bfbfbf", marginLeft : "10px"}}>₹199</strike></p>
              </div>
              <div className="col-6 text-end">
             <span
             onClick={carPrizeBlog}>
              <i className="fa-solid fa-xmark icon-close"> </i>
            </span>
          </div>
          </div>
          <div className="card-modal-detail-about">
          <h5 className="">Description</h5>
            <p>Wooden Christmas Toys</p>
            </div>
            <div className="row">
                <div className="col-3"></div>
          <div className="mb-2 col-5 text-center d-flex justify-content-around">
            <button className="card-product-another-button" >Add To Cart</button>
            <button className="card-product-button">Show Me</button>
            </div>
      <div className="col-4"></div>
         
        </div>
      </div>
    </div>
  );
};

export default CardProduct;