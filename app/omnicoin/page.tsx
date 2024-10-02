"use client";
import React, { useState } from "react";
import { Bell, ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import { Card, Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Component() {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="min-h-screen  text-white p-4 md:px-10 px-4">
      <main className="flex space-x-4">
        <div className="w-2/3 space-y-4">
          <Card className="bg-black p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ChevronLeft className="mr-2" />
                <div className="w-8 h-8 bg-purple-600 rounded-full mr-2"></div>
                <span>hellohell</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Creator: afbbff</span>
                <span className="text-red-500">🔥</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
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
            </div>
            <div className="text-right mb-4">
              <div className="text-gray-400">Token Price</div>
              <div className="text-xl">0.000010 ETH</div>
            </div>
            <div className="bg-black h-64 flex items-center justify-center">
              <span className="text-gray-400">
                📈 TradingView Chart Placeholder
              </span>
            </div>
          </Card>
          <div className="flex space-x-8 text-xl mb-4 mt-6">
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
          </div>
          {activeTab === "comments" ? (
            <>
              <Card className="bg-black p-4 flex flex-col items-center justify-center h-48">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  !
                </div>
                <p className="text-gray-400">
                  No comments yet Be the first to comment!
                </p>
              </Card>
              <div className="text-center text-green-500 mb-4">Load more</div>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                + Add Comment
              </Button>
            </>
          ) : (
            <Card className="bg-black p-4 flex flex-col items-center justify-center h-48">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                !
              </div>
              <p className="text-gray-400">No trades yet</p>
            </Card>
          )}
        </div>
        <div className="w-1/3 space-y-4">
          <Card className="bg-black border border-slate-600 mt-2 p-4">
            <p className="py-1">1 $1 is 0.000010 ETH ($0.023)</p>
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
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Enter amount"
                className="flex-grow bg-gray-700 p-2 rounded-l"
              />
              <select aria-label="usd" className="bg-gray-700 p-2 rounded-r">
                <option>USD</option>
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
          <Card className="bg-gray-900 text-white p-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-purple-600 rounded-full"></div>
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
            <div className="my-4">
              <h2 className="text-2xl font-bold">hellohell</h2>
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
            <h2 className="text-xl text-white text-center mb-4">
              Holders Distribution
            </h2>
            <p className="text-xs my-8">No Current Distribution</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
