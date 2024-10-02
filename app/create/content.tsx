"use client"
"use client"
import { motion } from "framer-motion"

const blockchains = [
  { name: "Arbitrum", color: "bg-gradient-to-r from-indigo-600 to-blue-500 border border-blue-600", logo: "/images/arbi.png", recommended: true },
  { name: "Ethereum", color: "bg-gradient-to-r from-indigo-500 to-neutral-700 border border-blue-800", logo: "/images/eth.png" },
  { name: "Optimism", color: "bg-gradient-to-r from-red-500 to-orange-500 border border-red-500", logo: "/images/opti.png" },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <h1 className="text-xl md:text-2xl sm:text-4xl  text-center mb-8 sm:mb-12">Select a Blockchain</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch space-y-6 sm:space-y-0 sm:space-x-6">
        {blockchains.map((blockchain) => (
          <motion.div
            key={blockchain.name}
            className={`${blockchain.color} rounded-3xl p-6 w-full sm:w-64 h-80 flex flex-col items-center justify-center relative overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {blockchain.recommended && (
              <div className="absolute rounded-2xl top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 ">
                Recommended
              </div>
            )}
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <img src={blockchain.logo} alt={`${blockchain.name} logo`} className="w-24 h-24" />
            </motion.div>
            <h2 className="text-2xl font-bold">{blockchain.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
}