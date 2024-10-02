import React from 'react';

const CubicButton = () => {
  return (
    <div className="relative" style={{ width: '113.08px', height: '69.7px' }}>
      {/* Main button face */}
      <div
        className="absolute"
        style={{
          width: '110.25px',
          height: '33.39px',
          top: '0',
          left: '2.83px',
          background: '#787878',
          opacity: 0,
          zIndex: 2,
        }}
      >
        {/* Button text */}
        <span
          style={{
            position: 'absolute',
            width: '70px',
            height: '20px',
            top: '8px',
            left: '19.17px',
            fontFamily: 'Workbench, sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '20px',
            textAlign: 'left',
            color: '#F7F2DA',
            opacity: 1,
            zIndex: 3,
          }}
        >
          CONNECT
        </span>
      </div>

      {/* Left side of cube */}
      <div
        className="absolute"
        style={{
          width: '2.84px',
          height: '36.22px',
          top: '0',
          left: '0',
          background: '#787878',
          border: '0.63px solid #000000',
          borderRight: 'none',
          opacity: 0,
          zIndex: 1,
        }}
      ></div>

      {/* Bottom side of cube */}
      <div
        className="absolute"
        style={{
          width: '113.08px',
          height: '3.15px',
          bottom: '0',
          left: '0',
          background: '#787878',
          border: '0.63px solid #000000',
          borderTop: 'none',
          opacity: 0,
        }}
      ></div>
    </div>
  );
};

export default CubicButton;