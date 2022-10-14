import React from "react";
import { Card, Image } from "react-bootstrap";
import "./Askquestion.css";
// import CarToyProduct from "./CarToyProduct";
// import CardProduct from "./CardProduct";

const SmallCardProduct = ({ CarDetailsShare }) => {

  const productBut = event => {

    switch (event.detail) {

      case 1: 
          {

        const valueCard = document.getElementById("styledDivBlog");
        valueCard.style.display = "block";
        const nullCard = document.getElementById("nullBlogDiv");
        nullCard.style.display = "none";

        break;
      }

      case 2: {
        const valueCardbuy = document.getElementById("styledDivCardElement");
        valueCardbuy.style.display = "block";
        // const nullCardBuy = document.getElementById("nullBlogDiv");
        // nullCardBuy.style.display = "block";

        break;
      }
      default: {
        break;
      }
      
  }
};
  return (
    <>
      <div className="container">
        <Card className="small-card-container" id="styledDivCardElement">
          <Card.Body className="small-card-container-body">
            <div className="row m-3">
              <div className="col-6 d-flex flex-row">
                <span className="small-card-arrow" onClick={CarDetailsShare}>
                  <i className="fa fa-angle-left"></i>
                </span>
                <span className="ps-3">Shop</span>
              </div>
              <div className="col-6 text-end" onClick={CarDetailsShare}>
                <i className="fa-solid fa-xmark remove-icon"></i>
              </div>
            </div>
          </Card.Body>
          <Card.Footer id="nullBlogDiv">
            <div className="d-flex flex-row m-2 mt-3" onClick={productBut}>
              <Image
                className="small-card-product-image small-card-arrow"
                src="/images/car.jpg"
              />
              <p className="ps-2">
                <b className="small-card-arrow">Mini Beetle </b>
                <br /> $ 549
              </p>
            </div>
            <div className="d-flex flex-row m-2" onClick={productBut}>
              <Image
                className="small-card-product-image small-card-arrow"
                src="/images/car.jpg"
              />
              <p className="ps-2">
                <b className="small-card-arrow">Mini Ferrari </b> <br /> $ 749
              </p>
            </div>
            <div className="d-flex flex-row m-2" onClick={productBut}>
              <Image
                className="small-card-product-image small-card-arrow"
                src="/images/car.jpg"
              />
              <p className="ps-2">
                <b className="small-card-arrow">Mini Hummer </b> <br /> $ 549
              </p>
            </div>

            {/* try and eroor */}
          </Card.Footer>
        </Card>
      </div>
      <div style={{ display: "none" }} id="styledDivBlog">
        {/* <CarToyProduct /> */}
        {/* <CardProduct /> */}
        <div className="container">
          <div className="card card-list-item-details">
            <div className="row m-2 mt-2">
              <div className="col-6 d-flex flex-row">
                <Image className="image-details" src="/images/woden.jpg" />
                <p className="card-product-para">
                  <b>
                    Wooden Christmas Toys <br />
                    ₹99 <nbsp />
                  </b>{" "}
                  ₹1̶9̶9̶{" "}
                </p>
              </div>
            </div>
            <div className="m-2 mt-0">
              <h5>Description</h5>
              <p>Wooden Christmas Toys</p>
            </div>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-7 text-center d-flex">
                <button className="card-product-another-button">
                  Add To Cart
                </button>
                <button className="card-product-button">Show Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCardProduct;
