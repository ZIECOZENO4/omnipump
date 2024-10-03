"use client";
import React, { useState } from "react";
import { Bell, ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import { Card, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";


export default function DesktopCoin() {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="min-h-screen  text-white p-4 md:px-[5vw] px-4">
    <style jsx global>{`
    input:focus,
    textarea:focus {
      outline: none;
      border-color: #4ae436 !important;
    }
  `}</style>
      <main className="flex space-x-4">
        <div className="w-2/3 space-y-4">
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
          </Card>
          <div className="flex space-x-8 text-xl mb-4 mt-6 md:mt-10">
            <button
              className={`${
                activeTab === "comments"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("comments")}
            >
              Comments 0
            </button>
            <button
              className={`${
                activeTab === "trades"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("trades")}
            >
              Trades
            </button>
          <hr />
          </div>
          {activeTab === "comments" ? (
            <>
              <Card className="bg-black border border-slate-600  p-4 flex flex-col items-center justify-center h-48">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  !
                </div>
                <p className="text-gray-400">
                  No comments yet Be the first to comment!
                </p>
              </Card>
              <div className="text-center text-green-500 mb-4 py-2  border border-slate-600">Load more</div>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                + Add Comment
              </Button>
            </>
          ) : (
            <Card className="bg-black p-4 flex   border border-slate-600 flex-col items-center justify-center h-48">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                !
              </div>
              <p className="text-gray-400">No trades yet</p>
            </Card>
          )}
        </div>
        <div className="w-1/3 space-y-4">
          <Card className="bg-black border border-slate-600 mt-2 p-4">
            <p className="py-1 text-xs ">1 $1 is 0.000010 ETH ($0.023)</p>
            <div className="flex justify-between mb-8 p-2">
              <Button className="bg-green-500 hover:bg-green-600 flex-grow mr-2">
                Buy
              </Button>
              <Button variant="bordered" className="flex-grow ml-2">
                Sell
              </Button>
            </div>
            <div className="flex text-xs justify-between  mb-8">
              <span>Total Supply:10001</span>
              <span className="text-purple-700">Set slippage: 1%</span>
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter amount"
                className="flex-grow bg-black border border-gray-700 p-2 rounded-xl"
              />
              <select aria-label="USD" className="bg-black border border-gray-700 p-2 rounded-xl">
                <option>USD</option>
                <option>ETH</option>
                <option>BTC</option>
                <option>SOL</option>
              </select>
            </div>
            <div className="flex space-x-2 mb-4">
              <Chip radius="sm" className="flex-grow p-2">
                1 ETH
              </Chip>
              <Chip radius="sm" className="flex-grow p-2">
                5 ETH
              </Chip>
              <Chip radius="sm" className="flex-grow p-2">
                10 ETH
              </Chip>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Connect Wallet
            </Button>
          </Card>

          <Card className="bg-black border border-slate-600  text-white p-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className=" flex flex-row justify-between w-full h-auto">
                <div className="  inset-0 bg-purple-600 rounded-full">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Token logo"
                  width={48}
                  height={48}
                  className="relative z-10 rounded-full"
                />
                </div>
                <div className="mt-4 text-right text-xs text-gray-400">
                <Chip radius="md" className="p-2">
                  MCAP: $24.28000
                </Chip>
              </div>
              </div>
           
            </div>
            <div className="my-4">
              <h2 className="text-2xl ">hellohell</h2>
              <p className="text-slate-500 text-sm">
                HelloHell Is Here...{" "}
                <span className="text-green-400"> More ▼</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">Total Supply</p>
                <p className="font-mono">1000.000000</p>
              </div>
              <div>
                <p className="text-gray-400">Token Reserve</p>
                <p className="font-mono">1000.000000</p>
              </div>
              <div>
                <p className="text-gray-400">ETH Reserve</p>
                <p className="font-mono">0.009520</p>
              </div>
              <div>
                <p className="text-gray-400">Token Price</p>
                <p className="font-mono">0.000010</p>
              </div>
              <div>
                <p className="text-gray-400">Creator</p>
                <p className="font-mono truncate">afbbff</p>
              </div>
              <div>
                <p className="text-gray-400">24h Volume</p>
                <p className="font-mono">$1,000,000</p>
              </div>
            </div>
          </Card>
   
       
          <Card className="bg-black border border-slate-400 text-center p-4">
            <h2 className="text-xl md:text-3xl text-white text-center mb-4">
              Holders Distribution
            </h2>
            <p className="text-xs my-8">No Current Distribution</p>
          </Card>
        </div>
      </main>
    </div>
  );
}