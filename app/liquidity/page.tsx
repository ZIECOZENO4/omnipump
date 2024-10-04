"use client"
import { Button } from "@nextui-org/react"
import { Card, CardHeader } from "@nextui-org/react"
import { Input } from "@nextui-org/react"

export default function Component() {
  return (
    <div className="p-4 md:px-10 space-y-4  text-[#F7F2DA] min-h-screen">
             <style jsx global>{`
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #4ae436 !important;
        }
      `}</style>
      <Card className="border border-gray-100">
        <CardHeader>
          <h1 className='md:text-2xl text-xl'>Liquidity Pool</h1>
          <p className="text-sm text-gray-400">Deposit and withdraw your liquidity</p>
        </CardHeader>
        <div className="space-y-4">
            <CardHeader>
          <h1 className='md:text-2xl text-xl'>Your Balance</h1>
          <p className="text-sm text-gray-400">0.00 ETH</p>
        </CardHeader>
          <div>
           <CardHeader>
          <h1 className='md:text-2xl text-xl'>Your Pool Balance</h1>
          <p className="text-sm text-gray-400">0.00 POL</p>
        </CardHeader>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border border-gray-100">
          <CardHeader>
            <h1 className='text-xl md:text-2xl'>Deposit</h1>
          </CardHeader>
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="deposit-amount" className="text-sm font-medium text-gray-400">
                  Amount to Deposit
                </label>
                <Input id="deposit-amount" placeholder="0.0" className="border border-gray-200 text-white" />
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Deposit</Button>
            </div>
          </div>
        </Card>
        
        <Card className="border border-gray-100">
          <CardHeader>
            <h1 className='text-xl md:text-2xl'>Withdraw</h1>
          </CardHeader>
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="withdraw-amount" className="text-sm font-medium text-gray-400">
                  Amount to Withdraw
                </label>
                <Input id="withdraw-amount" placeholder="0.0" className="border border-gray-200 text-white" />
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Withdraw</Button>
            </div>
          </div>
        </Card>
      </div>
      
      <Button variant="bordered" className="w-full bg-blue-700 border border-blue-100 text-white">
       Learn More
    
      </Button>
    </div>
  )
}