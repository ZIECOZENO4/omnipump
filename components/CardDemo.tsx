

// "use client"
// import React from 'react'
// import { motion } from 'framer-motion'
// import './WorkbenchFontTest.css'; 

// const Card = () => (
//   <motion.div
//   className='mx-8'
//     style={{
//       width: '332px',
//       height: '150px',
//       background: '#0A0909',
//       borderRadius: '8px',
//       overflow: 'hidden',
//     }}
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//   >
//     <div className="relative p-3 text-white">
//       <div className="flex justify-between items-start">
//         <div className="w-[100px] h-[100px] my-[10px] mx-[10px] bg-[#D9D9D966]" />
        
//         <div className="text-right flex flex-col p-2">
//           <div className="flex flex-row justify-between align-middle">
//             <motion.h2
//               className="text-left text-[#F7F2DA] font-normal"
//               style={{
//                 width: '70px',
//                 height: '20px',
//                 top: '14px',
//                 left: '137px',
//                 fontSize: '20px',
//                 lineHeight: '20px',
//               }}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               [SPEAR]
//             </motion.h2>
//             <motion.h2
//               className="hover:underline text-[#F7F2DA] workbench-test"
//               style={{
//                 width: '20px',
//                 height: '10px',
//                 top: '9px',
//                 left: '302px',
//                 fontSize: '10px',
//                 fontWeight: 200,
//                 lineHeight: '20px',
//                 textAlign: 'left',
//                 color: '#F7F2DA',
//               }}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               More
//             </motion.h2>
//           </div>
//           <div className="flex flex-col align-middle">
//             <motion.p
//               className="text-[#F7F2DA] workbench-test flex flex-row mt-[5px]"
//               style={{
//                 width: '60px',
//                 height: '10px',
//                 left: '137px',
//                 fontSize: '10px',
//                 fontWeight: 200,
//                 lineHeight: '10px',
//                 textAlign: 'left',
//                 color: '#F7F2DA',
//               }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               Pear Network
//             </motion.p>
      
//             <motion.div
//               className='mt-[25px]'
//               style={{
//                 width: '180px',
//                 height: '10px',
//                 top: '85px',
//                 left: '137px',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               <p
//                 className='workbench-test'
//                 style={{
//                   fontSize: '10px',
//                   fontWeight: 400,
//                   lineHeight: '10px',
//                   textAlign: 'left',
//                   color: '#F7F2DA',
//                 }}
//               >
//                 Time to Launch:
//               </p>
//               <p
//                 style={{
//                   fontSize: '12px', 
//                   fontWeight: 400,
//                   lineHeight: '10px',
//                   textAlign: 'left',
//                   color: '#F7F2DA',
//                 }}
//               >
//                 00D/4H/24m
//               </p>
//             </motion.div>
//             <motion.div
//               className='my-[8px] workbench-test'
//               style={{
//                 width: '180px',
//                 height: '10px',
//                 top: '85px',
//                 left: '137px',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               <p
//                 style={{
//                   fontSize: '10px',
//                   fontWeight: 400,
//                   lineHeight: '10px',
//                   textAlign: 'left',
//                   color: '#F7F2DA',
//                 }}
//               >
//                 Chain:
//               </p>
//               <p
//                 style={{
//                   fontSize: '10px',
//                   fontWeight: 400,
//                   lineHeight: '10px',
//                   textAlign: 'left',
//                   color: '#F7F2DA',
//                 }}
//               >
//                 Arbitrum
//               </p>
//             </motion.div>
//             <motion.div
//               className='mb-[8px]'
//               style={{
//                 width: '180px',
//                 height: '10px',
//                 top: '102px',
//                 left: '137px',
//                 fontSize: '10px',
//                 fontWeight: 400,
//                 lineHeight: '10px',
//                 textAlign: 'left',
//                 color: '#F7F2DA',
//               }}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               aslan is a scammer, always have been
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const CardDemo = () => {
//   return (
//     <div className="container mx-auto px-2 my-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         {[...Array(50)].map((_, index) => (
//           <Card key={index} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CardDemo

"use client"
import React from 'react'
import { motion } from 'framer-motion'
import './WorkbenchFontTest.css'; 
import Link from 'next/link';

const Card = () => (
  <motion.div
    className='w-full' // Changed from mx-8 to w-full
    style={{
      height: '150px',
      width: '380px',
      background: '#0A0909',
      borderRadius: '8px',
      overflow: 'hidden',
    }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative p-3 text-white">
      <div className="flex justify-between items-start">
        <div className="w-[100px] h-[100px] my-[10px] mx-[10px] bg-[#D9D9D966]" />
        
        <div className="text-right flex flex-col p-2">
          <div className="flex flex-row justify-between align-middle">
            <motion.h2
              className="text-left text-[#F7F2DA] font-normal"
              style={{
                width: '70px',
                height: '20px',
                top: '14px',
                left: '137px',
                fontSize: '20px',
                lineHeight: '20px',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              [SPEAR]
            </motion.h2>
            <motion.h2
              className="hover:underline text-[#F7F2DA] workbench-test"
              style={{
                width: '20px',
                height: '10px',
                top: '9px',
                left: '302px',
                fontSize: '10px',
                fontWeight: 200,
                lineHeight: '20px',
                textAlign: 'left',
                color: '#F7F2DA',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              More
            </motion.h2>
          </div>
          <div className="flex flex-col align-middle">
            <motion.p
              className="text-[#F7F2DA] workbench-test flex flex-row mt-[5px]"
              style={{
                width: '60px',
                height: '10px',
                left: '137px',
                fontSize: '10px',
                fontWeight: 200,
                lineHeight: '10px',
                textAlign: 'left',
                color: '#F7F2DA',
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Pear Network
            </motion.p>
      
            <motion.div
              className='mt-[25px]'
              style={{
                width: '180px',
                height: '10px',
                top: '85px',
                left: '137px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p
                className='workbench-test'
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '10px',
                  textAlign: 'left',
                  color: '#F7F2DA',
                }}
              >
                Time to Launch:
              </p>
              <p
                style={{
                  fontSize: '12px', 
                  fontWeight: 400,
                  lineHeight: '10px',
                  textAlign: 'left',
                  color: '#F7F2DA',
                }}
              >
                00D/4H/24m
              </p>
            </motion.div>
            <motion.div
              className='my-[8px] workbench-test'
              style={{
                width: '180px',
                height: '10px',
                top: '85px',
                left: '137px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '10px',
                  textAlign: 'left',
                  color: '#F7F2DA',
                }}
              >
                Chain:
              </p>
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '10px',
                  textAlign: 'left',
                  color: '#F7F2DA',
                }}
              >
                Arbitrum
              </p>
            </motion.div>
            <motion.div
              className='mb-[8px]'
              style={{
                width: '180px',
                height: '10px',
                top: '102px',
                left: '137px',
                fontSize: '10px',
                fontWeight: 400,
                lineHeight: '10px',
                textAlign: 'left',
                color: '#F7F2DA',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              aslan is a scammer, always have been
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const CardDemo = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {[...Array(50)].map((_, index) => (
          <Link href='/omnicoin' key={index}>
            <Card />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CardDemo