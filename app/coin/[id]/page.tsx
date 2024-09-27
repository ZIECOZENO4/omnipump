'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import MobileCoin from './MobileCoin';
import DesktopCoin from './DesktopCoin';

export default function CoinPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const coinDataString = searchParams.get('data');
  const coin = coinDataString ? JSON.parse(decodeURIComponent(coinDataString)) : null;
  const [liked, setLiked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!coin) {
    return <div>Coin data not found</div>;
  }

  const toggleLike = () => setLiked(prev => !prev);

  const CoinComponent = isMobile ? MobileCoin : DesktopCoin;

  return (
    <div>
      <div className="container mx-auto  px-4 py-8">
      <CoinComponent
        name={coin.name}
        symbol={coin.symbol}
        image={coin.image}
        value={coin.value}
        market_cap={coin.market_cap}
        liked={liked}
        onToggleLike={toggleLike}
      />

    </div>
    </div>
   
  );
}