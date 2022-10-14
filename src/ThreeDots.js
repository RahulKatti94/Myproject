import React from 'react'
import "./Askquestion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card , Image } from 'react-bootstrap'

const ThreeDots = ({iconVisitModal}) => {
  return (
    <div className='container'>
        <Card className='bg-dark text-white card-opacity-color'>
        <div className="text-end m-2" >
               <span onClick={iconVisitModal}><i className="fa-solid fa-xmark remove-icon" ></i></span>
            </div>
            <div className='row'>
                <div className='col-1'></div>
            <div className=' col-10'>
            <Image  className="ollicraft-modal" src="/images/ollicraft.png" />
            <h5 className='pt-4 text-center'>Olliecraft</h5> <hr />
            <h6 className='text-center'>ABOUT</h6>
            <p className='three-dots-p-tag text-center'>Party decor, custom pinata, interactive play tents, hanging mobiles, personalized stamps, growth charts and gift packaging</p>
            <div className='three-dots-div-tag'>
            <h5 className='text-center'>Powered by</h5>
          <a href={'https://www.goswirl.live/'}>  <Image className="three-dots-image-tag bg-white" src="/images/Swirlgo.png" /></a></div>
            </div>
            <div className='col-1'></div>
            </div>
        </Card>
    </div>
  )
}

export default ThreeDots