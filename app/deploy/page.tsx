import { useState } from 'react'
import { Bell, ChevronDown, Upload } from 'lucide-react'

export default function Component() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-screen bg-black text-gray-300 p-4">
      <style jsx global>{`
        input:focus, textarea:focus {
          outline: none;
          border-color: #FFD700 !important;
        }
      `}</style>
   
      <main className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" placeholder="Token name" className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
          </div>
          <div>
            <label className="block mb-2">Ticker</label>
            <input type="text" placeholder="Token ticker" className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
          </div>
          <div>
            <label className="block mb-2">Description</label>
            <textarea placeholder="Token description" className="w-full bg-gray-800 rounded p-2 border border-gray-700 h-24"></textarea>
          </div>
          <div>
            <label className="block mb-2">Image</label>
            <div className="border border-gray-700 rounded bg-gray-900 p-8 text-center">
              <Upload className="mx-auto mb-2" />
              <p>Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-2">ETH Amount</label>
              <input type="number" placeholder="1" className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
            </div>
            <div className="flex-1">
              <label className="block mb-2">liquidity</label>
              <input type="number" placeholder="10000" className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
            </div>
          </div>
          <div>
            <label className="block mb-2">Percentage of liquidity to be locked</label>
            <input type="number" placeholder="0" className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
          </div>
          <div className="bg-gray-800 rounded p-4">
            <h3 className="font-bold mb-2">Liquidity Information</h3>
            <div className="mb-2">
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="w-1/4 bg-green-500 h-full rounded"></div>
              </div>
            </div>
            <p className="text-red-500 text-sm">Bad</p>
            <p className="text-sm text-gray-500">The ratio is too low. Consider increasing your liquidity.</p>
            <p className="mt-4">
              <span className="font-bold">Initial Price</span><br />
              The initial price will be approximately: 0.00010000 ETH per token
            </p>
          </div>
          <button 
            className="w-full bg-gray-800 text-white p-2 rounded"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Hide More Options' : 'Show More Options'}
          </button>
          {showMore && (
            <>
              <div>
                <label className="block mb-2">Twitter Link</label>
                <input type="text" placeholder="https://twitter.com/..." className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
              </div>
              <div>
                <label className="block mb-2">Telegram Link</label>
                <input type="text" placeholder="https://t.me/..." className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
              </div>
              <div>
                <label className="block mb-2">Website</label>
                <input type="text" placeholder="https://..." className="w-full bg-gray-800 rounded p-2 border border-gray-700" />
              </div>
            </>
          )}
          <button className="w-full bg-green-500 text-white p-3 rounded font-bold">
            Submit
          </button>
        </div>
      </main>
    </div>
  )
}