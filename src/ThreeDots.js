import React from 'react'
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card , Image } from 'react-bootstrap'

const ThreeDots = ({iconVisitModal}) => {
  return (
    <div className='container w-25 '>
        <Card className='bg-dark text-white three-dots-main-div-class'>
        <div className="text-end m-2" >
               <span onClick={iconVisitModal}><i className="fa-solid fa-xmark remove-icon" ></i></span>
            </div>
            <div className='row'>
                <div className='col-2'></div>
            <div className=' col-8 text-center'>
            <Image className="ollicraft-modal" src="/images/ollicraft.png" />
            <h3 className='pt-4'>Olliecraft</h3> <hr />
            <h5>ABOUT</h5>
            <p className='three-dots-p-tag'>Party decor, custom pinata, interactive play tents, hanging mobiles, personalized stamps, growth charts and gift packaging</p>
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
