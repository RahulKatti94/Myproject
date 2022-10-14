import React from "react";
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

const CardProduct = ({carPrizeBlog}) => {
  return (
    <div className="container">
      <div className="card card-product-main-div">
        <div className="row m-2 mt-2">
          <div className="col-6 d-flex flex-row">
            <Image className="image-details" src="/images/woden.jpg" />
            <p className="card-product-para"><b>Wooden Christmas Toys <br />₹99 <nbsp />
              </b> ₹1̶9̶9̶ </p>
              </div>
              <div className="col-6 text-end">
             <span className="icon-span" onClick={carPrizeBlog}>
              <i className="fa-solid fa-xmark icon-close"> </i>
            </span>
          </div>
          </div>
          <div className="m-2 mt-0">
          <h5>Description</h5>
            <p>Wooden Christmas Toys</p>
            </div>
            <div className="row">
                <div className="col-4"></div>
          <div className="col-7 text-center d-flex">
            <button className="card-product-another-button" >Add To Cart</button>
            <button className="card-product-button">Show Me</button>
            </div>

         
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
