import React from "react";
import { Card, Image } from "react-bootstrap";
import "./Askquestion.css";

<<<<<<< HEAD
const SmallCardProduct = ({CarDetailsShare}) => {
=======
const SmallCardProduct = ({showShareModal11}) => {

>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
  return (
    <div className="container">
      <Card className="small-card-container">
        <Card.Body className="small-card-container-body">
          <div className="row m-3">
            <div className="col-6 d-flex flex-row">
<<<<<<< HEAD
              <span className="small-card-arrow"
              onClick={CarDetailsShare}>
                <i className="fa fa-angle-left"></i>
              </span>
=======
              <span className="small-card-arrow"><i className="fa fa-angle-left" onClick={showShareModal11}></i></span>
>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
              <span className="ps-3">Shop</span>
            </div>
            <div className="col-6 text-end">
              <i className="fa-solid fa-xmark remove-icon"
              onClick={CarDetailsShare}></i>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex flex-row m-2 mt-3">
            <Image
              className="small-card-product-image small-card-arrow"
              src="/images/car.jpg"
            />
            <p className="ps-2">
<<<<<<< HEAD
              <b className="small-card-arrow">Mini Beetle </b>
              <br /> $ 549
=======
              <b className="small-card-arrow">
                Mini Beetle </b><br /> $ 549

>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
            </p>
          </div>
          <div className="d-flex flex-row m-2">
            <Image
              className="small-card-product-image small-card-arrow"
              src="/images/car.jpg"
            />
            <p className="ps-2">
<<<<<<< HEAD
              <b className="small-card-arrow">Mini Ferrari </b> <br /> $ 749
=======
              <b className="small-card-arrow">
                Mini Ferrari   </b> <br /> $ 749

>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
            </p>
          </div>
          <div className="d-flex flex-row m-2">
            <Image
              className="small-card-product-image small-card-arrow"
              src="/images/car.jpg"
            />
            <p className="ps-2">
<<<<<<< HEAD
              <b className="small-card-arrow">Mini Hummer </b> <br /> $ 549
=======
              <b className="small-card-arrow">
                Mini Hummer  </b> <br /> $ 549

>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
            </p>
          </div>

      {/* Footer section hidden at the start */}
          <div className="car-toy-product-div"
          style={{ display : "none"}}>
            <div className="row m-3">
              <div className="d-flex flex-row">
                <Image className="image-details" src="/images/car.jpg" />
                <p className="card-product-para">
                  <b>
                    Mini Beetle <br />
                    ₹549
                  </b>
                </p>
              </div>
            </div>
            <div className="m-3">
              <h5>Description</h5>
              <p>It is Miniature Beetle in Yellow color, looking very cute.</p>
            </div>
            <div className="row">
              <div className="col-5"></div>
              <div className="mb-3 col-2 text-center d-flex justify-content-between">
                <button className="card-product-another-button">
                  Add To Cart
                </button>
                <button className="card-product-button">Show Me</button>
              </div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SmallCardProduct;
