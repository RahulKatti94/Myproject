import React from "react";
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

const CardProduct = () => {
  return (
    <div className="container">
      <div className="card card-product-main-div">
        <div className="row m-3">
          <div className="col-6 d-flex flex-row">
            <Image className="image-details" src="/images/woden.jpg" />
            <p className="card-product-para"><b>Wooden Christmas Toys <br />₹99 <nbsp />
              </b> ₹1̶9̶9̶ </p>
              </div>
              <div className="col-6 text-end">
             <span className="icon-span">
              <i className="fa-solid fa-xmark icon-close"> </i>
            </span>
          </div>
          </div>
          <div className="m-3">
          <h5>Description</h5>
            <p>Wooden Christmas Toys</p>
            </div>
            <div className="row">
                <div className="col-5"></div>
          <div className="mb-3 col-2 text-center d-flex justify-content-between">
            <button className="card-product-another-button" >Add To Cart</button>
            <button className="card-product-button">Show Me</button>
            </div>

         
        </div>
      </div>
    </div>
  );
};

export default CardProduct;