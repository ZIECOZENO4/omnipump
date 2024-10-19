"use client"
import React, { useEffect, useRef } from 'react';

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video: ", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-[100vw] h-[100vh] object-cover"
      >
        <source src="https://files.slack.com/files-tmb/T05SRBZDA4T-F07TB03BL48-4c39c12484/kannonbackgroundvideo2.mp4" type="video/mp4" />
        <source src="https://files.slack.com/files-tmb/T05SRBZDA4T-F07TB03BL48-4c39c12484/kannonbackgroundvideo2.webm" type="video/webm" />
        Your browser does not support the video tag.22
      </video>
    </div>
  );
};

export default BackgroundVideo;