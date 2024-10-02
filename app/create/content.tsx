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
      <div className="flex flex-col sm:flex-row justify-between w-screen gap-10 h-[40vh] items-center sm:items-stretch space-y-6 sm:space-y-0 sm:space-x-10">
        {blockchains.map((blockchain) => (
          <Link href='/deploy' key={blockchain.name} className="w-full h-full">
            <motion.div
              className={`${blockchain.color} rounded-3xl p-6 w-full h-full  px-40  flex flex-col items-center justify-center relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {blockchain.recommended && (
                <div className="absolute flex flex-row gap-3 rounded-2xl top-4 p-2 px-8 right-4 bg-red-500 text-white text-md  py-1 ">
                 <p>Recommended</p> 

                 <button
  className="pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 disabled:opacity-70 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
  disabled>
  <div
    className="inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
  </div>
</button>
                </div>
              )}
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.1 }}
              >
                <img src={blockchain.logo} alt={`${blockchain.name} logo`} className="w-full h-[80%]" />
              </motion.div>
              <h2 className="text-3xl">{blockchain.name}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}