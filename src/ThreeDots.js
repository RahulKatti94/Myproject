import React from 'react'
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image } from 'react-bootstrap'
// import { slide as Menu } from "react-burger-menu"

const ThreeDots = ({ iconVisitModal , product }) => {

  console.log(product)
  return (
    <div className='container '>
      <Card className='bg-dark text-white three-dots-main-div-class'>
        <div className="text-end m-2 mt-3" >
          <span onClick={iconVisitModal}><i className="fa-solid fa-xmark remove-icon" ></i></span>
        </div>
        <div className='row'>
          <div className='col-2'></div>
          <div className=' col-8 text-center'>
            <Image className="ollicraft-modal" src={product.user_profile} />
            <h3 className='pt-4'>{product.designer_brand_name}</h3> <hr />
            <h5>ABOUT</h5>
            <p className='three-dots-p-tag text-center'>{product.designer_bio}</p>
            <div className='three-dots-div-tag'>
              <h6>Powered by</h6>
              <a href={'https://www.goswirl.live/'}>  <Image className="three-dots-image-tag bg-white" src="/images/Swirlgo.png" /></a></div>
          </div>
          <div className='col-2'></div>
        </div>
      </Card>
    </div>

  )
}

export default ThreeDots
