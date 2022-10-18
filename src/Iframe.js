import { Card } from "react-bootstrap";
import video from "../src/videos/video.mp4";
import "./Askquestion.css";

const Iframe = () => {
  return (
    <div className="container position-relative">

        
        <Card className="video-card-icon-div">
        <video
            src={video}
            loading="lazy"
            autoPlay
            loop
            // controls
            > 
        </video>
       <div>
         <span><i className="fa-solid fa-xmark remove-icon  icon-remove-top" ></i></span>
         </div>
         </Card>
        </div>
  )
}

export default Iframe