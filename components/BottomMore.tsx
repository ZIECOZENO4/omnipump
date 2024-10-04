"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Plus, Minus, MessageSquare, MessageCircle, MoreHorizontal, X } from "lucide-react"

export default function BottomMore() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Main component container */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed bottom-4 left-4 z-50"
      >
        {/* Menu items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900 rounded-lg overflow-hidden mb-2"
            >
              <div className="p-2 space-y-1">
                <MenuItem icon={<Plus className="w-4 h-4" />} text="Add Liquidity" />
                <MenuItem icon={<Minus className="w-4 h-4" />} text="Remove Liquidity" />
                <MenuItem icon={<MessageSquare className="w-4 h-4" />} text="Comments" />
                <MenuItem icon={<MessageCircle className="w-4 h-4" />} text="Comment on Website" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={toggleMenu}
          className="bg-transparent border border-green-500 text-white rounded-lg p-2 flex items-center justify-between w-full"
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center">
          View
            More
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </motion.button>

        {/* Close button */}
        <AnimatePresence>
          {isOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMenu}
              className="absolute top-2 right-2 bg-zinc-800 text-white rounded-full p-1"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

function MenuItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="hidden md:flex items-center space-x-2 w-full px-2 py-1.5 text-sm text-white hover:bg-zinc-800 rounded">
      {icon}
      <span>{text}</span>
    </button>
  )
}