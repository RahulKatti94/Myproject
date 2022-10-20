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
<<<<<<< HEAD
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
=======
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
>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
            <button className="card-product-another-button" >Add To Cart</button>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <button className="card-product-button">Show Me</button>
<<<<<<< HEAD
            </div>
      <div className="col-4"></div>
         
=======
          </div>
          {/* </div> */}
          <div className="col-1"></div>


>>>>>>> a77b14688c636c2cc1283294f92f34e16ba42db0
        </div>
      </div>
    </div>
  );
};

export default CardProduct;