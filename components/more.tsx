import { motion } from 'framer-motion';
import React from 'react'
const WorkbenchText = () => {
  return (
    <>
      <motion.h2
        className="workbench-text hover:underline"
        style={{
          width: '20px',
          height: '10px',
          top: '9px',
          left: '302px',
          fontSize: '10px',
          fontWeight: 400,
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
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Workbench:SCAN@-53&display=swap');

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