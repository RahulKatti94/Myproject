import React, { useState } from 'react'
import { ProgressBar } from 'react-bootstrap';
const ResponsiveVideoItem = ({ item }) => {
  const [remainingTime, setRemainingTime] = useState(0)
  const [videoProgressValue, setVideoProgressValue] = useState(0)

  const cardDetails = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const handleTimeUpdate = (e) => {
         setRemainingTime(Math.round(e.target.duration - e.target.currentTime))
         setVideoProgressValue((e.target.currentTime / e.target.duration) * 100)
  }

  const handleLoadStart = (e) =>{
     setRemainingTime(e.target.duration)
   }

  return (
    <React.Fragment>
      <video
        id="video"
        className=" slider-video card-video"
        // play={item.auto_play}
        src={item.video_url}
        loop
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        mute={item.uto_play_mute_un}
        loading="lazy"
        style={cardDetails}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata = {handleLoadStart}
      ></video>
      <div className="viewers d-flex">
        <span>
          <i className="fa fa-eye  f-icon" aria-hidden="true"></i>
        </span>
        <span>{item.total_views}</span>
      </div>
        <div className="video-timer">
          <span>{ new Date(remainingTime * 1000).toISOString().slice(14, 19)} </span>
        </div> 


        <ProgressBar
                      className="p-bar"
                      style={{ width: "100%" }}
                      now={videoProgressValue}
                      variant="secondary"
                      play={item.auto_play_video}
                    />
    </React.Fragment>
  )
}

export default ResponsiveVideoItem