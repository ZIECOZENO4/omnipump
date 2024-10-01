"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react'

const WorkbenchText = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Workbench:SCAN@-53&display=swap" rel="stylesheet" />
      </Head>
      <motion.h2
        className="hover:underline text-[#F7F2DA] workbench-text"
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
          fontFamily: '"Workbench", system-ui',
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          fontVariationSettings: '"BLED" 0, "SCAN" -53'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        More
      </motion.h2>
      <style jsx global>{`
        .workbench-text {
          font-family: "Workbench", system-ui;
          font-optical-sizing: auto;
          font-weight: 400;
          font-style: normal;
          font-variation-settings:
            "BLED" 0,
            "SCAN" -53;
        }
      `}</style>
    </>
  );
};

export default WorkbenchText;