import React from 'react'
import DesktopCoin from './DesktopCoin'
import MobileCoin from './MobileCoin'

const OmniCoinPage = () => {
  return (
    <div>
      <div className="hidden sm:flex">
      <DesktopCoin />
      </div>
  <div className="md:hidden">
  <MobileCoin />
  </div>
          </div>
  )
}

export default OmniCoinPage