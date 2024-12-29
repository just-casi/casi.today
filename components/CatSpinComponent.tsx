import { useState, useRef, useEffect } from 'react';

const CatSpinComponent = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isFastVersion, setIsFastVersion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    setIsVideoVisible(true);
    // Hide the video after 3 seconds
    if (!isFastVersion) {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 1.5;
      setTimeout(() => {
        setIsVideoVisible(false);
        setIsFastVersion(true);
      }, 1700);
    } else {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 4.25;
      setTimeout(() => {
        setIsVideoVisible(false);
        setIsFastVersion(false);
      }, 2350);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVideoVisible]);

  return (<div style={{width: '50%', position: 'relative'}}>
    <video
      ref={videoRef}
      src="/cat-spin.mp4"
      style={{width: '100%'}}
    />
    {!isVideoVisible && (
      <div
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
      />
    )}
  </div>)
};

export default CatSpinComponent;
