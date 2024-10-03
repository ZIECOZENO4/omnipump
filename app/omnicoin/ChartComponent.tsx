"use client"
import React from 'react'
import { Bell, ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import { Card} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";
const ChartComponent = () => {
  return (
    <div className='w-full p-2 flex flex-col '>
            <h1 className='text-xl md:text-3xl text-center py-2 md:py-4'>Coin Chart</h1>
       <Card className=" border border-slate-600  bg-black p-4">
    <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
          <Link href='/' passHref>
  <motion.a
    className="inline-block p-2 rounded-full bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    whileHover={{ x: -5 }}
    whileTap={{ x: -10 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <motion.svg
      fill="#ffffff"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color"
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        fill="#000000"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <motion.path
        d="M17,11H11V9.86a1,1,0,0,0-1.5-.69L6.38,11.31a.82.82,0,0,0,0,1.38L9.5,14.83a1,1,0,0,0,1.5-.69V13h6a1,1,0,0,0,0-2Z"
        fill="#2ca9bc"
        initial={{ x: 0 }}
        whileHover={{ x: -2 }}
        whileTap={{ x: -4 }}
      />
    </motion.svg>
  </motion.a>
</Link>
            <div className="w-8 h-8 bg-purple-600 rounded-full mr-2"></div>
            <span>hellohell</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Creator: afbbff</span>
            <span className="text-red-500">🔥</span>
          </div>
        </div>
        </Card>
      <Card className=" border border-slate-600  bg-black p-4">
       
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <div className="text-gray-400">Market cap</div>
            <div className="text-xl">$24.53</div>
          </div>
          <div>
            <div className="text-gray-400">ETH Reserve</div>
            <div className="text-xl">0.009520</div>
          </div>
          <div>
            <div className="text-gray-400">Token Reserve</div>
            <div className="text-xl">1000.000000</div>
          </div>
          <div>
            <div className="text-gray-400">Token Price</div>
            <div className="text-xl">0.000010 ETH</div>
          </div>
        </div>
      
        <div className="bg-slate-800 h-64 flex items-center justify-center rounded-md">
          <span className="text-gray-400">
            📈 TradingView Chart Placeholder
          </span>
        </div>
      </Card></div>
  )
}

export default ChartComponent