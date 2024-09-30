"use client"
import React from 'react'
import { motion } from 'framer-motion'

const CardDemo = () => {
  return (
    <div className="justify-center items-center align-middle grid grid-cols-12 gap-4 no-scrollbar">
      <motion.div
        style={{
          width: '332px',
          height: '130px',
          position: 'absolute',
          top: '1022px',
          left: '3542px',
          background: '#0A0909',
          borderRadius: '8px', // Assuming you want to keep the rounded corners
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative p-3 text-white">
          <div className="flex justify-between items-start">
            <img src="/path-to-coin-image.png" alt="Coin" className="w-[100px] h-[100px] my-[15px] mx-[13px] bg-[#D9D9D966]" />
            
            <div className="text-right p-2">
              <div className="flex flex-row justify-between align-middle">
                <motion.h2
                  className="text-left text-[#F7F2DA] font-normal"
                  style={{
                    width: '70px',
                    height: '20px',
                    position: 'absolute',
                    top: '14px',
                    left: '137px',
                    fontFamily: 'Workbench, sans-serif',
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
                  className="hover:underline text-[#F7F2DA]"
                  style={{
                    width: '20px',
                    height: '10px',
                    position: 'absolute',
                    top: '9px',
                    left: '302px',
                    fontFamily: 'Workbench, sans-serif',
                    fontSize: '10px',
                    fontWeight: 400,
                    lineHeight: '10px',
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
              <div className="flex flex-row justify-between align-middle">
                <motion.p
                  className="text-[#F7F2DA]"
                  style={{
                    width: '60px',
                    height: '10px',
                    position: 'absolute',
                    top: '41px',
                    left: '137px',
                    fontFamily: 'Workbench, sans-serif',
                    fontSize: '10px',
                    fontWeight: 400,
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
                  style={{
                    width: '180px',
                    height: '10px',
                    position: 'absolute',
                    top: '68px',
                    left: '137px',
                    fontFamily: 'Workbench, sans-serif',
                    fontSize: '10px',
                    fontWeight: 400,
                    lineHeight: '10px',
                    textAlign: 'left',
                    color: '#F7F2DA',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Time to Launch: 00D/4H/24m
                </motion.div>
                <motion.div
                  style={{
                    width: '180px',
                    height: '10px',
                    position: 'absolute',
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
                      fontFamily: 'Workbench, sans-serif',
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
                      fontFamily: 'Workbench, sans-serif',
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
                  style={{
                    width: '180px',
                    height: '10px',
                    position: 'absolute',
                    top: '102px',
                    left: '137px',
                    fontFamily: 'Workbench, sans-serif',
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
    </div>
  )
}

export default CardDemo