"use client"
import { Button, Card, CardHeader, Input } from "@nextui-org/react"

export default function Component() {
  return (
    <div className="py-8 px-4 md:px-[10vw] bg-gray-900 text-white min-h-screen">
      <style jsx global>{`
        input:focus, textarea:focus {
          outline: none;
          border-color: #4ae436 !important;
        }
      `}</style>
      
      <Card className="bg-gray-800 border-gray-700 p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">Liquidity Pool</h1>
        <p className="text-xl mb-6">Deposit and withdraw your liquidity</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-gray-400 mb-2">Your Balance</h2>
            <p className="text-2xl">0.00 ETH</p>
          </div>
          <div>
            <h2 className="text-gray-400 mb-2">Your Pool Balance</h2>
            <p className="text-2xl">0.00 POL</p>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-gray-800 border-gray-700 p-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">Deposit</h2>
          </CardHeader>
          <div className="mt-4">
            <label htmlFor="deposit-amount" className="block text-sm font-medium text-gray-400 mb-2">
              Amount to Deposit
            </label>
            <Input
              id="deposit-amount"
              type="number"
              placeholder="0.0"
              className="w-full bg-gray-700 text-white mb-4"
            />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Deposit</Button>
          </div>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700 p-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">Withdraw</h2>
          </CardHeader>
          <div className="mt-4">
            <label htmlFor="withdraw-amount" className="block text-sm font-medium text-gray-400 mb-2">
              Amount to Withdraw
            </label>
            <Input
              id="withdraw-amount"
              type="number"
              placeholder="0.0"
              className="w-full bg-gray-700 text-white mb-4"
            />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Withdraw</Button>
          </div>
        </Card>
      </div>
      
      <Button
        variant="bordered"
        className="w-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white border-blue-300"
      >
        Learn More
      </Button>
    </div>
  )
}