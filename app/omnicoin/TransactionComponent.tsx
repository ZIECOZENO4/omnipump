"use client"
import React from "react";
import { Card} from "@nextui-org/react";

const TransactionComponent = () => {
  return (
    <div className='w-full p-2 flex flex-col '>
      <h1 className='text-xl md:text-3xl text-center py-2 md:py-4'>Transaction History</h1>
      <Card className="bg-black p-4 flex   border border-slate-600 flex-col items-center justify-center h-48">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
          !
        </div>
        <p className="text-gray-400">No trades yet</p>
      </Card>
    </div>
  );
};

export default TransactionComponent;
