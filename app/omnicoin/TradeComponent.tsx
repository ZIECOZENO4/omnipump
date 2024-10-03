"use client"
import React from 'react'
import { Bell, ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import { Card, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const TradeComponent = () => {
  return (
    <div className='w-full p-2 flex flex-col '>
            <h1 className='text-xl md:text-3xl text-center py-2 md:py-4'>Trade Transaction </h1>
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
  <div>
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
  </div>
  )
}

export default TradeComponent