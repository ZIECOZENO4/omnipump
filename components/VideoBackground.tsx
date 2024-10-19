// components/BackgroundVideo.tsx
import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/firstanimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
