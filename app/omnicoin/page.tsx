"use client"
import React, { useState } from 'react'
import { Bell, ChevronDown, ChevronLeft } from "lucide-react"
import { Button } from "@nextui-org/react"
import { Card,Chip } from "@nextui-org/react"

export default function Component() {
  const [activeTab, setActiveTab] = useState('comments')

  return (
    <div className="min-h-screen  text-white p-4">
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
            <div className="bg-gray-800 h-64 flex items-center justify-center">
              <span className="text-gray-400">📈 TradingView Chart Placeholder</span>
            </div>
          </Card>
          <div className="flex space-x-4 mb-4">
  <button 
    className={`${activeTab === 'comments' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400'}`}
    onClick={() => setActiveTab('comments')}
  >
    Comments 0
  </button>
  <button 
    className={`${activeTab === 'trades' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400'}`}
    onClick={() => setActiveTab('trades')}
  >
    Trades
  </button>
</div>
          {activeTab === 'comments' ? (
            <>
              <Card className="bg-gray-800 p-4 flex flex-col items-center justify-center h-48">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">!</div>
                <p className="text-gray-400">No comments yet Be the first to comment!</p>
              </Card>
              <div className="text-center text-green-500 mb-4">Load more</div>
              <Button className="w-full bg-green-500 hover:bg-green-600">+ Add Comment</Button>
            </>
          ) : (
            <Card className="bg-gray-800 p-4 flex flex-col items-center justify-center h-48">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">!</div>
              <p className="text-gray-400">No trades yet</p>
            </Card>
          )}
        </div>
        <div className="w-1/3 space-y-4">
          <Card className="bg-gray-800 p-4">
            <div className="flex justify-between mb-4">
              <Button className="bg-green-500 hover:bg-green-600 flex-grow mr-2">Buy</Button>
              <Button variant="bordered" className="flex-grow ml-2">Sell</Button>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span>Total Supply:10001</span>
              <span className="text-purple-500">Set slippage: 1%</span>
            </div>
            <div className="flex mb-4">
              <input type="text" placeholder="Enter amount" className="flex-grow bg-gray-700 p-2 rounded-l" />
              <select   aria-label='usd' className="bg-gray-700 p-2 rounded-r">
                <option>USD</option>
              </select>
            </div>
            <div className="flex space-x-2 mb-4">
              <Chip radius="sm" className="flex-grow">1 ETH</Chip>
              <Chip radius="sm" className="flex-grow">5 ETH</Chip>
              <Chip radius="sm" className="flex-grow">10 ETH</Chip>
          
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">Connect Wallet</Button>
          </Card>
          <Card className="bg-gray-800 p-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full mr-4"></div>
              <div>
                <div className="text-xl">hellohell</div>
                <div className="text-sm text-gray-400">HelloHell is Here... <span className="text-green-500">More ▼</span></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Total Supply</div>
                <div>1000.000000</div>
              </div>
              <div>
                <div className="text-gray-400">Token Reserve</div>
                <div>1000.000000</div>
              </div>
              <div>
                <div className="text-gray-400">ETH Reserve</div>
                <div>0.009520</div>
              </div>
              <div>
                <div className="text-gray-400">Token Price</div>
                <div>0.000010</div>
              </div>
              <div>
                <div className="text-gray-400">Creator</div>
                <div>afbbff</div>
              </div>
              <div>
                <div className="text-gray-400">24h Volume</div>
                <div>$1,000,000</div>
              </div>
            </div>
          </Card>
          <Card className="bg-black p-4">
            <h2 className="text-xl text-white text-center mb-4">Holders Distribution</h2>
          <p className='text-xs my-4'>No Current Distribution</p>
          </Card>
        </div>
      </main>
    </div>
  )
}