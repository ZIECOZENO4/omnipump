// // MobileCoin.tsx
// import React from 'react';
// import Image from 'next/image';
// import { Card, CardBody, Chip, Button } from '@nextui-org/react';


// interface CoinProps {
//   name: string;
//   symbol: string;
//   image: string;
//   value: number;
//   market_cap: number;
//   liked: boolean;
//   onToggleLike: () => void;
// }

// const MobileCoin: React.FC<CoinProps> = ({ name, symbol, image, value, market_cap, liked, onToggleLike }) => {
//   return (
//     <Card className='border-none bg-background/60 dark:bg-default-100/50 mx-auto max-w-full' shadow='sm'>
//       <CardBody>
//         <div className='flex flex-col items-center'>
//           <Image alt={name} height={100} width={100} src={image} />
//           <h3 className='my-2 text-foreground/90'>{name} ({symbol})</h3>
//           <p className='text-small my-1 text-foreground/80'>Value: ${value.toFixed(2)}</p>
//           <h1 className='text-large font-medium my-1'>Market Cap: ${(market_cap / 1000000000).toFixed(2)}B</h1>
//           <Chip color='primary' variant='shadow' className='font-bold text-white my-1'>Verified on Etherscan</Chip>
//           <Chip color='warning' variant='dot' className='font-bold text-white my-1'>Trending</Chip>
//           <Chip color='success' className='text-sm flex flex-row justify-between my-1 font-bold'>Address: OXtr....kret</Chip>
//           <Button onClick={onToggleLike} className='mt-4'>
//             {/* <HeartIcon className={liked ? "[&>path]:stroke-transparent" : ""} fill={liked ? "currentColor" : "none"} /> */}
//           </Button>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default MobileCoin;

"use client"
import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconInfoCircle,
  IconChartBar,
  IconExchange,
  IconReceipt2,
} from "@tabler/icons-react";

import InfoComponent from "./InfoComponent";
import TradeComponent from "./TradeComponent";
import ChartComponent from "./ChartComponent";
import TransactionComponent from "./TransactionComponent";

interface CoinProps {
  name: string;
  symbol: string;
  image: string;
  value: number;
  market_cap: number;
  liked: boolean;
  onToggleLike: () => void;
}

const MobileCoin: React.FC<CoinProps> = ({ name, symbol, image, value, market_cap, liked, onToggleLike }) => {
  const [activeComponent, setActiveComponent] = useState("Info");

  const links = [
    {
      title: "Info",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => setActiveComponent("Info"),
    },
    {
      title: "Trade",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => setActiveComponent("Trade"),
    },
    {
      title: "Chart",
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => setActiveComponent("Chart"),
    },
    {
      title: "Transaction",
      icon: (
        <IconReceipt2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => setActiveComponent("Transaction"),
    },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "Info":
        return <InfoComponent />;
      case "Trade":
        return <TradeComponent />;
      case "Chart":
        return <ChartComponent />;
      case "Transaction":
        return <TransactionComponent />;
      default:
        return <InfoComponent />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {renderComponent()}
      <FloatingDock
        className="fixed bottom-2 left-1/2 transform z-50 -translate-x-1/2"
        items={links}
        activeComponent={activeComponent}
      />
    </div>
  );
}

export default MobileCoin;