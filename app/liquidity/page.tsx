"use client"
import { Button } from "@nextui-org/react"
import { Card, CardHeader } from "@nextui-org/react"
import { Input } from "@nextui-org/react"

export default function Component() {
  return (
    <div className="py-4 md:px-[10vw] p-4 space-x-8  space-y-8 gap-8 text-[#F7F2DA] min-h-screen">
             <style jsx global>{`
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #4ae436 !important;
        }
      `}</style>
      <Card className="border bg-black border-gray-600 px-8">
        <div className='flex flex-col gap-2 text-start'>
          <h1 className='text-gray-400'>Liquidity Pool</h1>
          <p className=" md:text-2xl text-xl ">Deposit and withdraw your liquidity</p>
        </div>
        <div className="space-y-4">
        <div className='flex flex-col gap-2 text-start'>
          <h1 className='text-gray-400'>Your Balance</h1>
          <p className="md:text-2xl text-xl">0.00 ETH</p>
        </div>
          <div>
          <div className='flex flex-col gap-2 text-start'>
          <h1 className='text-gray-400'>Your Pool Balance</h1>
          <p className="md:text-2xl text-xl">0.00 POL</p>
        </div>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8  px-8">
        <Card className="border bg-black border-gray-600 p-8">
          <CardHeader>
            <h1 className='text-xl md:text-2xl mb-3'>Deposit</h1>
          </CardHeader>
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="deposit-amount" className="text-sm font-medium text-gray-400">
                  Amount to Deposit
                </label>
                <input type="number" id="deposit-amount" placeholder="0.0" className="border border-gray-200 rounded-md bg-black text-[#F7F2DA]" />
               
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-[#F7F2DA]">Deposit</Button>
            </div>
          </div>
        </Card>
        
        <Card className="border border-gray-600 p-8">
          <CardHeader>
            <h1 className='text-xl md:text-2xl mb-3'>Withdraw</h1>
          </CardHeader>
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="withdraw-amount" className="text-sm font-medium text-gray-400">
                  Amount to Withdraw
                </label>
                <input  type="number" id="withdraw-amount" placeholder="0.0" className="border rounded bg-black  border-gray-200 text-[#F7F2DA]" />
       
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-[#F7F2DA]">Withdraw</Button>
            </div>
          </div>
        </Card>
      </div>
      
      <Button variant="bordered" className="w-full hover:bg-blue-200  bg-gradient-to-r  from-slate-500 to-slate-700 border border-blue-100 text-[#F7F2DA]">
       Learn More
    
      </Button>
    </div>
  )
}