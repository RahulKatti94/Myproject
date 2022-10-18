import React, { useRef, useState } from "react";

import girl from "../src/videos/girl.mp4";

const VideoSection = () => {
  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const handlePlayVideo = () => videoRef.current.play();

  const handleProgress = (e) => {
    if (isNaN(e.target.duration))   // duration is NotaNumber at Beginning.
      return;
    setProgress((e.target.currentTime / e.target.duration) * 100);
  };
  return (
    <div>
      <button onClick={handlePlayVideo}>Play video</button>

      <video    
      controls
        onProgress={handleProgress}
        src={girl}
        width="500"
        height="500"
        ref={videoRef}
        

      />

      <progress id="progress" max="100" value={progress}>
        Progress
      </progress>
    </div>
  );
};

export default VideoSection;