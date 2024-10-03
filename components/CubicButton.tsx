// import React from "react";

// const CubicButton = () => {
//   return (
//     <div className='flex flex-row mx-4'>
//       <div className="top-9 left-[1305.31px] w-[2.84px] h-[36.22px] bg-[#787878] border-t-[0.63px] border-solid border-black"></div>
//       <div className='flex flex-col'>
//         <div className="w-[110.25px] h-[33.39px] top-9 left-[1307.83px] bg-[#787878] items-center shadow-md flex justify-center">
//           <span className="text-[#F7F2DA] text-xl font-normal leading-5 text-center">
//             CONNECT
//           </span>
//         </div>
//         <div className="top-[69.7px] left-[1305px] w-[113.08px] h-[3.15px] bg-[#787878] border-t-[0.63px] border-solid border-black"></div>
//       </div>
//     </div>
//   );
// };

// export default CubicButton;

import React from "react";

const CubicButton = () => {
  return (
    <div className="relative w-[110px] h-[110px] mx-4">
      {/* Left bar */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-[#787878] border-t-[1px] border-solid border-black"></div>
      
      {/* Main content */}
      <div className="absolute top-0 left-[3px] w-[107px] h-[107px]">
        {/* Top face */}
        <div className="w-full h-[33px] bg-[#787878] shadow-md flex items-center justify-center">
          <span className="text-[#F7F2DA] text-xl font-normal leading-5 text-center">
            CONNECT
          </span>
        </div>
        
        {/* Front face (empty space) */}
        <div className="w-full h-[74px]"></div>
        
        {/* Bottom bar */}
        <div className="w-full h-[3px] bg-[#787878] border-t-[1px] border-solid border-black"></div>
      </div>
    </div>
  );
};

export default CubicButton;