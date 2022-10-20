import React from "react";
import { Card, Image } from "react-bootstrap";
import "./Askquestion.css";

const SmallCardProduct = ({showShareModal11}) => {

  return (
    <div className="container">
      <Card className="small-card-container">
        <Card.Body className="small-card-container-body">
          <div className="row m-3">
            <div className="col-6 d-flex flex-row">
              <span className="small-card-arrow"><i className="fa fa-angle-left" onClick={showShareModal11}></i></span>
              <span className="ps-3">Shop</span>
            </div>
            <div className="col-6 text-end">
              <i className="fa-solid fa-xmark remove-icon"></i>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex flex-row m-2 mt-3">
            <Image className="small-card-product-image small-card-arrow" src="/images/car.jpg" />
            <p className="ps-2">
              <b className="small-card-arrow">
                Mini Beetle </b><br /> $ 549

            </p>
          </div>
          <div className="d-flex flex-row m-2">
            <Image className="small-card-product-image small-card-arrow" src="/images/car.jpg" />
            <p className="ps-2">
              <b className="small-card-arrow">
                Mini Ferrari   </b> <br /> $ 749

            </p>
          </div>
          <div className="d-flex flex-row m-2">
            <Image className="small-card-product-image small-card-arrow" src="/images/car.jpg" />
            <p className="ps-2">
              <b className="small-card-arrow">
                Mini Hummer  </b> <br /> $ 549

            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SmallCardProduct;