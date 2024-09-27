"use client";
import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Button,
  Switch,
  Select,
  SelectItem,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Slider,
  Image
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import {
  SiEthereum,
  SiBinance,
  SiPolygon,
  SiRipple,
  SiCardano,
  SiSolana,
  SiDogecoin,
  SiLitecoin,
  SiTether
} from "react-icons/si";
import { HeartIcon } from "./HeartIcon";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
const chainData = [
  { key: "all", name: "All Chains" },
  {
    key: "ethereum",
    name: "Ethereum",
    icon: SiEthereum,
    networks: ["Mainnet", "Goerli", "Sepolia"]
  },
  {
    key: "binance",
    name: "Binance Smart Chain",
    icon: SiBinance,
    networks: ["BSC", "BSC Testnet"]
  },
  {
    key: "polygon",
    name: "Polygon",
    icon: SiPolygon,
    networks: ["Mainnet", "Mumbai"]
  },
  {
    key: "arbitrum",
    name: "Arbitrum",
    icon: SiEthereum,
    networks: ["One", "Nova", "Goerli"]
  },
  {
    key: "avalanche",
    name: "Avalanche",
    icon: SiEthereum,
    networks: ["C-Chain", "Fuji"]
  },
  {
    key: "optimism",
    name: "Optimism",
    icon: SiEthereum,
    networks: ["Mainnet", "Goerli"]
  },
  {
    key: "fantom",
    name: "Fantom",
    icon: SiEthereum,
    networks: ["Opera", "Testnet"]
  },
  {
    key: "cronos",
    name: "Cronos",
    icon: SiEthereum,
    networks: ["Mainnet", "Testnet"]
  },
  { key: "gnosis", name: "Gnosis", icon: SiEthereum, networks: ["Mainnet"] },
  {
    key: "base",
    name: "Base",
    icon: SiEthereum,
    networks: ["Mainnet", "Goerli"]
  }
];
const coins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    value: 62981.57,
    market_cap: 1240000000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    value: 2542.83,
    market_cap: 310490000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    value: 1.0,
    market_cap: 119160000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
  },
  {
    id: 4,
    name: "BNB",
    symbol: "BNB",
    value: 568.79,
    market_cap: 84550000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
  },
  {
    id: 5,
    name: "Solana",
    symbol: "SOL",
    value: 145.86,
    market_cap: 68330000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
  },
  {
    id: 6,
    name: "XRP",
    symbol: "XRP",
    value: 0.583,
    market_cap: 32870000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
  },
  {
    id: 7,
    name: "Cardano",
    symbol: "ADA",
    value: 0.62,
    market_cap: 21800000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
  },
  {
    id: 8,
    name: "Dogecoin",
    symbol: "DOGE",
    value: 0.105,
    market_cap: 15290000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
  },
  {
    id: 9,
    name: "Polkadot",
    symbol: "DOT",
    value: 7.92,
    market_cap: 10340000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png"
  },
  {
    id: 10,
    name: "TRON",
    symbol: "TRX",
    value: 0.152,
    market_cap: 13590000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
  },
  {
    id: 11,
    name: "Chainlink",
    symbol: "LINK",
    value: 15.23,
    market_cap: 8620000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png"
  },
  {
    id: 12,
    name: "Polygon",
    symbol: "MATIC",
    value: 0.89,
    market_cap: 8580000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
  },
  {
    id: 13,
    name: "Litecoin",
    symbol: "LTC",
    value: 86.51,
    market_cap: 6390000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"
  },
  {
    id: 14,
    name: "Dai",
    symbol: "DAI",
    value: 1.0,
    market_cap: 4900000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
  },
  {
    id: 15,
    name: "Shiba Inu",
    symbol: "SHIB",
    value: 0.00001,
    market_cap: 6100000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
  },
  {
    id: 16,
    name: "Avalanche",
    symbol: "AVAX",
    value: 16.92,
    market_cap: 5500000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
  },
  {
    id: 17,
    name: "Uniswap",
    symbol: "UNI",
    value: 5.97,
    market_cap: 3460000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png"
  },
  {
    id: 18,
    name: "Stellar",
    symbol: "XLM",
    value: 0.16,
    market_cap: 4420000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png"
  },
  {
    id: 19,
    name: "Monero",
    symbol: "XMR",
    value: 163.21,
    market_cap: 2980000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png"
  },
  {
    id: 20,
    name: "Bitcoin Cash",
    symbol: "BCH",
    value: 238.84,
    market_cap: 4670000000,
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png"
  }
];

export default function ComponentCoin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [selectedChain, setSelectedChain] = useState("all");
  const [selectedMarketCap, setSelectedMarketCap] = useState("all");
  const [minMarketCap, setMinMarketCap] = useState("");
  const [maxMarketCap, setMaxMarketCap] = useState("");
  const [liked, setLiked] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    applyFilters();
  }, [selectedChain, selectedMarketCap, minMarketCap, maxMarketCap]);

  const applyFilters = () => {
    let filtered = coins;

    if (selectedMarketCap !== "all") {
      switch (selectedMarketCap) {
        case "low":
          filtered = filtered.filter((coin) => coin.market_cap < 1000000000);
          break;
        case "mid":
          filtered = filtered.filter(
            (coin) =>
              coin.market_cap >= 1000000000 && coin.market_cap < 10000000000
          );
          break;
        case "high":
          filtered = filtered.filter((coin) => coin.market_cap >= 10000000000);
          break;
      }
    }

    if (minMarketCap !== "") {
      filtered = filtered.filter(
        (coin) => coin.market_cap >= parseFloat(minMarketCap) * 1000000000
      );
    }

    if (maxMarketCap !== "") {
      filtered = filtered.filter(
        (coin) => coin.market_cap <= parseFloat(maxMarketCap) * 1000000000
      );
    }

    setFilteredCoins(filtered);
  };

  const resetFilters = () => {
    setSelectedChain("all");
    setSelectedMarketCap("all");
    setMinMarketCap("");
    setMaxMarketCap("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col my-8 gap-4 px-4 md:px-8"
    >
      <motion.div
        className="flex flex-row justify-between align-middle gap-4"
        whileHover={{ scale: 1.02 }}
      >
        <Tabs key="trending" variant="bordered" aria-label="Tabs variants">
          <Tab key="Trending" title="Trending" />
          <Tab key="Featured" title="Featured" />
        </Tabs>
        <Button color="default">USD</Button>
      </motion.div>

      <div className="flex-row justify-between md:hidden flex align-middle ">
          <Switch defaultSelected color="default" className="md:text-xl">
            Launched
          </Switch>
          <Button
            startContent={<FaFilter />}
            onClick={openModal}
            className="md:hidden"
          >
            Filter
          </Button>
        </div>
      <motion.div
        className="flex flex-row gap-8 items-center"
        whileHover={{ scale: 1.02 }}
      >
        <div className="md:flex-row justify-between hidden md:flex align-middle ">
          <Switch defaultSelected color="default" className="md:text-xl">
            Launched
          </Switch>
          <Button
            startContent={<FaFilter />}
            onClick={openModal}
            className="md:hidden items-end text-end"
          >
            Filter
          </Button>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex gap-4">
          <Select
            label="All Chains"
            variant="bordered"
            className="max-w-xs"
            value={selectedChain}
            onChange={(e) => setSelectedChain(e.target.value)}
          >
            {chainData.map((chain) => (
              <SelectItem
                key={chain.key}
                value={chain.key}
                className="bg-black max-w-2xl"
              >
                <button className="p-[1px] relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-500 rounded-lg" />
                  <div className="p-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    {chain.name}
                  </div>
                </button>
              </SelectItem>
            ))} 
          </Select>
          <Select
            label="Market Cap"
            value={selectedMarketCap}
            variant="bordered"
            className="w-[40rem]"
            onChange={(e) => setSelectedMarketCap(e.target.value)}
          >
            <SelectItem key="hello" className="bg-black max-w-2xl">
              <button className="p-[1px] relative my-1">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-500 rounded-lg" />
                <div className="p-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  All Market Cap
                </div>
              </button>
              <button className="p-[1px] relative my-1">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-500 rounded-lg" />
                <div className="p-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Low Cap (&lt; $1B)
                </div>
              </button>
              <button className="p-[1px] relative my-1">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-500 rounded-lg" />
                <div className="p-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Mid Cap ($1B - $10B)
                </div>
              </button>
              <button className="p-[1px] relative my-1">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-500 rounded-lg" />
                <div className="p-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  High Cap (&gt; $10B)
                </div>
              </button>
            </SelectItem>
          </Select>
          <Select
            label="Price"
            variant="bordered"
            className="max-w-xs"
            value={selectedChain}
            onChange={(e) => setSelectedChain(e.target.value)}
          >

              <SelectItem key="button" className="bg-black">
                <div className="p-[1px] relative my-1 flex flex-col gap-4 space-y-4">
        
                  <div className="p-2  flex flex-row justify-between bg-black gap-4 rounded-[6px]  relative group transition duration-200 focus:focus-within: text-white hover:bg-transparent">
                    <Input
                      type="number"
                      label="Min M-Cap"
                      placeholder="0.00"
                      value={minMarketCap}
                      onChange={(e) => setMinMarketCap(e.target.value)}
className='border border-slate-400 focus:border-slate-300 mx-2'
                    />
                    <Input
                      type="number"
                      label="Max  M-Cap"
                      placeholder="0.00"
                      value={maxMarketCap}
                      onChange={(e) => setMaxMarketCap(e.target.value)}
                      className='border border-slate-400 focus:border-slate-300 mx-2'
                    />
                  </div>
                  <div className="p-2 gap-4 flex flex-row justify-between bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <Button color="primary" onClick={applyFilters}>
                      Filter
                    </Button>
                    <Button color="secondary" onClick={resetFilters}>
                      Reset
                    </Button>
                  </div>
                </div>
              </SelectItem>
          </Select>
        </div>
      </motion.div>

      {/* Coin Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredCoins.map((coin) => {
          // Encode the coin data as a query string
          const coinData = encodeURIComponent(JSON.stringify(coin));

          return (
            <Link
              href={`/coin/${coin.id}?data=${coinData}`}
              key={coin.id}
              passHref
            >
              {/* <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="md"
              >
                <CardBody>
                  <div className="grid grid-cols-12 gap-4 no-scrollbar items-center justify-center">
                    <div className="relative col-span-4">
                      <Image
                        alt={coin.name}
                        className="object-cover"
                        height={200}
                        shadow="md"
                        src={coin.image}
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="my-2 text-foreground/90">
                            {coin.name} ({coin.symbol})
                          </h3>
                          <p className="text-small text-slate-500 my-1 flex flex-row justify-between text-foreground/80">
                            Value: <span className='mr-1 md:ml-2 text-slate-200'>${coin.value.toFixed(2)}</span> 
                          </p>
                          <h1 className="text-large flex text-slate-500  flex-row justify-between font-medium my-1">
                            Market Cap: $
                            <span className='mr-1 md:ml-2 text-slate-200'>   {(coin.market_cap / 1000000000).toFixed(2)}B</span>
                         
                          </h1>
                          <Chip
                            color="default"
                            variant="shadow"
                            className="font-bold text-white my-1"
                          >
                            Verified on Etherscan
                          </Chip>
                          <Chip
                            color="warning"
                            variant="dot"
                            className="font-bold text-white mb-1 mt-2"
                          >
                            Trending on Omni
                          </Chip>
                          <Chip
                            color="default"
                            className="text-sm md:text-md flex flex-row justify-between my-3 font-bold"
                          >
                            Address: OXtr....kret
                          </Chip>
                        </div>
                              <Button
                  isIconOnly
                  className="text-default-900/60 hidden md:flex data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onPress={() => setLiked((v) => !v)}
                >
                  <HeartIcon
                    className={liked ? "[&>path]:stroke-transparent" : ""}
                    fill={liked ? "currentColor" : "none"}
                  />
                </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card> */}
                  <div className="justify-center items-center align-middle  grid grid-cols-12 gap-4 no-scrollbar ">
      <motion.div
        className="relative w-[90vw] md:w-[30vw] mx-2 md:mx-4 h-64 bg-black border border-gray-800 rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 opacity-20 animate-gradient" />
        <div className="relative p-3 text-white">
          <div className="flex justify-between items-start ">
            <img src={coin.image}  alt={coin.name} className="w-[40vw] md:w-[10vw] h-full  bg-gray-700 rounded" />
     
            <div className="text-right">
              <div className="flex flex-row justify-between align-middle">
              <motion.h2
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                      {coin.name} ({coin.symbol})
              </motion.h2>
              <motion.h2
                className="text-sm text-gray-400 hover:underline mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                   More
              </motion.h2>
              </div>
          
              <motion.p
                className="text-md text-gray-400 text-left mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
               Coin Creator
              </motion.p>
              <motion.div
            className="mt-4 mb-2 flex flex-row justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-sm text-gray-400">time to launch:</p>
            <p className="text-md">00D/4H/24M</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
                 className="flex flex-row justify-between"
          >
            <p className="text-sm text-gray-400">chain:</p>
            <p className="text-md">Arbitrum</p>
          </motion.div>
          <motion.p
            className="mt-2 text-md "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            aslan is a scammer, always have been
          </motion.p>
            </div>
          </div>
       
        </div>
      </motion.div>
    </div>
            </Link>
          );
        })}
      </div>

      {/* Modal for mobile view */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        placement="bottom"
        className="bg-gray-900 text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filters</ModalHeader>
              <ModalBody>
                <Select
                  label="All Chains"
                  value={selectedChain}
                  onChange={(e) => setSelectedChain(e.target.value)}
                >
                  {chainData.map((chain) => (
                    <SelectItem key={chain.key} value={chain.key}>
                      {chain.name}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Market Cap"
                  value={selectedMarketCap}
                  onChange={(e) => setSelectedMarketCap(e.target.value)}
                >
                  <SelectItem key="all" value="all">
                    All
                  </SelectItem>
                  <SelectItem key="low" value="low">
                    Low Cap (&lt; $1B)
                  </SelectItem>
                  <SelectItem key="mid" value="mid">
                    Mid Cap ($1B - $10B)
                  </SelectItem>
                  <SelectItem key="high" value="high">
                    High Cap (&gt; $10B)
                  </SelectItem>
                </Select>
                <Input
                  type="number"
                  label="Min Market Cap (Billion $)"
                  placeholder="0.00"
                  value={minMarketCap}
                  onChange={(e) => setMinMarketCap(e.target.value)}
                />
                <Input
                  type="number"
                  label="Max Market Cap (Billion $)"
                  placeholder="0.00"
                  value={maxMarketCap}
                  onChange={(e) => setMaxMarketCap(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="secondary" onPress={resetFilters}>
                  Reset
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    applyFilters();
                    onClose();
                  }}
                >
                  Apply
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
