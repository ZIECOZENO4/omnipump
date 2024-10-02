import React from 'react';

const CubicButton = () => {
  return (
    <div className="relative" style={{ width: '113.08px', height: '69.7px' }} >
<button className="relative px-8 py-2 uppercase bg-white text-black text-sm font-bold transition duration-200 
                   border-2 border-black 
                   shadow-[0_5px_0_0_#000] 
                   hover:shadow-none hover:translate-y-[5px]">
  Connect
  <span className="absolute bottom-[-5px] left-0 w-full h-[5px] bg-black"></span>
  <span className="absolute top-0 right-[-5px] w-[5px] h-full bg-black"></span>
</button>
    </div>
  );
};

export default CubicButton;