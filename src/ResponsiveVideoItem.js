import React, { useState } from 'react'

const ResponsiveVideoItem = ({ item }) => {
  const [remainingTime, setRemainingTime] = useState(0)

  const cardDetails = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const handleTimeUpdate = (e) => {
    setRemainingTime(Math.round(e.target.duration - e.target.currentTime))
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
      ></video>
      <div className="viewers d-flex">
        <span>
          <i className="fa fa-eye  f-icon" aria-hidden="true"></i>
        </span>
        <span>{item.total_views}</span>
      </div>
      {remainingTime && (
        <div className="video-timer">
          <span>{remainingTime} </span>
        </div> 
      )}
    </React.Fragment>
  )
}

export default ResponsiveVideoItem