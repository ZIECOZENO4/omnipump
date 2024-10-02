"use client"
import { motion } from "framer-motion"
import Link from 'next/link'

const blockchains = [
  { name: "Arbitrum", color: "bg-gradient-to-r from-indigo-600 to-blue-500 border border-blue-600", logo: "/images/arbi.png", recommended: true },
  { name: "Ethereum", color: "bg-gradient-to-r from-indigo-500 to-neutral-700 border border-green-600", logo: "/images/eth.png" },
  { name: "Optimism", color: "bg-gradient-to-r from-red-500 to-orange-500 border border-red-500", logo: "/images/opti.png" },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <h1 className="text-2xl md:text-3xl sm:text-4xl  text-center mb-8 sm:mb-12">Select a Blockchain</h1>
      <div className="flex flex-col sm:flex-row justify-between w-screen gap-10 h-screen items-center sm:items-stretch space-y-6 sm:space-y-0 sm:space-x-10">
        {blockchains.map((blockchain) => (
          <Link href='/deploy' key={blockchain.name} className="w-full h-full">
            <motion.div
              className={`${blockchain.color} rounded-3xl p-6 w-full h-full  px-10  flex flex-col items-center justify-center relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {blockchain.recommended && (
                <div className="absolute rounded-2xl top-4 p-2 px-4 right-4 bg-red-500 text-white text-xs  py-1 ">
                  Recommended
                </div>
              )}
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.1 }}
              >
                <img src={blockchain.logo} alt={`${blockchain.name} logo`} className="w-full h-full" />
              </motion.div>
              <h2 className="text-2xl font-bold">{blockchain.name}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}