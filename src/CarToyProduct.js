import React from 'react'
import { Card, Image } from "react-bootstrap";
import "./Askquestion.css";

const CarToyProduct = () => {
  return (
    <div className='container'>
        <Card className="small-card-container">
        <Card.Body className="small-card-container-body">
          <div className="row m-3">
            <div className="col-6 d-flex flex-row">
            <span className="small-card-arrow"><i className="fa fa-angle-left"></i></span>
              <span className="ps-3">Shop</span>
            </div>
            <div className="col-6 text-end">
              <i className="fa-solid fa-xmark remove-icon"></i>
            </div>
          </div>
          </Card.Body>
          <Card.Footer>
          <div className="car-toy-product-div">
        <div className="row m-3">
          <div className="d-flex flex-row">
            <Image className="image-details" src="/images/car.jpg" />
            <p className="card-product-para"><b>Mini Beetle <br />₹549
              </b></p>
              </div>
          </div>
          <div className="m-3">
          <h5>Description</h5>
            <p>It is Miniature Beetle in Yellow color, looking very cute.</p>
            </div>
            <div className="row">
                <div className="col-5"></div>
          <div className="mb-3 col-2 text-center d-flex justify-content-between">
            <button className="card-product-another-button" >Add To Cart</button>
            <button className="card-product-button">Show Me</button>
            </div>

         
        </div>
      </div>
        </Card.Footer>
      </Card>

    </div>
  )
}

export default CarToyProduct