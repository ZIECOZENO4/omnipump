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
        className="w-full h-full object-cover"
      >
        <source src="/videos/first.mp4" type="video/mp4" />
        <source src="/videos/first.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;