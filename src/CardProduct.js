import React from "react";
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

const CardProduct = ({carPrizeBlog}) => {



  return (

    <div className="container">
      <div className="card card-product-main-div p-2">
        <div className="row m-1">
          <div className="col-10 d-flex flex-row">
            <Image className="image-details" src="/images/woden.jpg" />
            <div>
              <p className="card-product-para mb-0">Wooden Christmas Toys </p>
              <p className="" style={{ marginLeft: '0.8rem' }}>
                ₹99 <strike>
                 199
                  </strike>
              </p>
            </div>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-1 text-end">
            <span className="icon-span" 
            onClick={carPrizeBlog}>
              <i className="fa-solid fa-xmark icon-close"> </i>
            </span>
          </div>
        </div>
        <div>
          <h5 className="m-0 p-1">Description</h5>
          <p className="mt-0 p-1">Wooden Christmas Toys</p>
        </div>
        <div className="row d-flex">
          <div className="col-3"></div>
          <div className="col-6">
            <button className="card-product-another-button justify-content-start" >Add To Cart</button>
            <button className="card-product-button justify-content-end">Show Me</button>

          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;