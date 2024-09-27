// DesktopCoin.tsx
import React from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  Chip,
  Button,
  Select,
  SelectItem
} from "@nextui-org/react";
import CoinBuySellChart from "./CoinChart";
import ConnectWallet from "@/components/ConnectButton";

interface CoinProps {
  name: string;
  symbol: string;
  image: string;
  value: number;
  market_cap: number;
  liked: boolean;
  onToggleLike: () => void;
}

const DesktopCoin: React.FC<CoinProps> = ({
  name,
  symbol,
  image,
  value,
  market_cap,
  liked,
  onToggleLike
}) => {
  return (
    // <Card className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mx-auto' shadow='sm'>
    //   <CardBody>
    //     <div className="grid grid-cols-12 gap-4 items-center justify-center">
    //       <div className="relative col-span-4">
    //         <Image alt={name} className="object-cover" height={200} width={200} src={image} />
    //       </div>
    //       <div className="flex flex-col col-span-8">
    //         <div className="flex justify-between items-start">
    //           <div className="flex flex-col gap-0">
    //             <h3 className="my-2 text-foreground/90">{name} ({symbol})</h3>
    //             <p className="text-small my-1 flex flex-row justify-between text-foreground/80">Value: ${value.toFixed(2)}</p>
    //             <h1 className="text-large flex flex-row justify-between font-medium my-1">Market Cap: ${(market_cap / 1000000000).toFixed(2)}B</h1>
    //             <Chip color="primary" variant="shadow" className="font-bold text-white my-1">Verified on Etherscan</Chip>
    //             <Chip color="warning" variant="dot" className="font-bold text-white mb-1 mt-2">Trending</Chip>
    //             <Chip color="success" className="text-sm md:text-md flex flex-row justify-between my-3 font-bold">Address: OXtr....kret</Chip>
    //           </div>
    //           <Button
    //             isIconOnly
    //             className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
    //             radius="full"
    //             variant="light"
    //             onPress={onToggleLike}
    //           >
    //             {/* <HeartIcon className={liked ? "[&>path]:stroke-transparent" : ""} fill={liked ? "currentColor" : "none"} /> */}
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </CardBody>
    // </Card>
    <div>
      <main className="w-full  min-h-screen transition-all main">
        <div className="p-6">
          <div className="mt-4">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-black hover:bg-opacity-70 text-gray-100 shadow-xl">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <Image
                    alt={name}
                    className="object-cover"
                    height={30}
                    width={30}
                    src={image}
                  />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased text-sm leading-normal font-normal text-blue-600">
                    {name} ({symbol})
                  </p>
                  <h4 className="block antialiased tracking-normal  text-2xl font-semibold leading-snug text-blue-900">
                    {" "}
                    OXtr....kret
                  </h4>
                </div>
                <div className="border-t border-blue-50 p-4">
                  <p className="block antialiased  text-base leading-relaxed font-normal text-blue-600">
                    <strong className="text-green-600">Created by:</strong>
                    &nbsp;Contract Owner
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl  bg-black hover:bg-opacity-70 text-gray-100 shadow-xl">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                  </svg>
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased  text-sm leading-normal font-normal text-blue-600">
                    Market Cap
                  </p>
                  <h4 className="block antialiased tracking-normal  text-2xl font-semibold leading-snug text-blue-900">
                    {(market_cap / 1000000000).toFixed(2)}B
                  </h4>
                </div>
                <div className="border-t border-blue-50 p-4">
                  <p className="block antialiased  text-base leading-relaxed font-normal text-blue-600">
                    <strong className="text-green-500">+55%</strong>&nbsp;than
                    last week
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-black hover:bg-opacity-70 text-100 shadow-xl">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                        <path d="M5.671 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0A9.993 9.993 0 0 1 2.25 9.767l.077-.313 1.934.51a8 8 0 1 0 3.053-4.45l-.221.166 1.017 1.017-4.596 1.06 1.06-4.596 1.096 1.096zM13 6v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased  text-sm leading-normal font-normal text-blue-600">
                    Coin Price{" "}
                  </p>
                  <h4 className="block antialiased tracking-normal  text-2xl font-semibold leading-snug text-blue-900">
                    {value.toFixed(2)}
                  </h4>
                </div>
                <div className="border-t border-blue-50 p-4">
                  <p className="block antialiased  text-base leading-relaxed font-normal text-blue-600">
                    <strong className="text-green-500">+3%</strong>&nbsp; in
                    last 24hrs
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col bg-clip-border rounded-xl bg-black hover:bg-opacity-70 text-gray-100 shadow-xl">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                  </svg>
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased  text-sm leading-normal font-normal text-blue-600">
                    Sales
                  </p>
                  <h4 className="block antialiased tracking-normal  text-2xl font-semibold leading-snug text-blue-900">
                    $103,430
                  </h4>
                </div>
                <div className="border-t border-blue-50 p-4">
                  <p className="block antialiased  text-base leading-relaxed font-normal text-blue-600">
                    <strong className="text-green-500">+5%</strong>&nbsp; in
                    last 10mins
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-black bg-opacity-50 shadow-50 border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Order Statistics</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="rounded-md border border-dashed border-gray-200 p-4">
                  <div className="flex items-center mb-0.5">
                    <div className="text-xl font-semibold">10</div>
                    <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                      $80
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">Active</span>
                </div>
                <div className="rounded-md border border-dashed border-gray-200 p-4">
                  <div className="flex items-center mb-0.5">
                    <div className="text-xl font-semibold">50</div>
                    <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                      +$469
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">Completed</span>
                </div>
                <div className="rounded-md border border-dashed border-gray-200 p-4">
                  <div className="flex items-center mb-0.5">
                    <div className="text-xl font-semibold">4</div>
                    <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
                      -$130B
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">Sold Out</span>
                </div>
              </div>
              <div>
                <CoinBuySellChart />
              </div>
            </div>
            <div className="flex flex-col gap-4 align-middle">
              <div className="bg-black flex flex-col bg-opacity-50 shadow-50 border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex flex-row gap-4 my-4 justify-between align-middle">
                  <button className="px-8 w-full py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-green-500 border-2 border-transparent hover:border-teal-500">
                    Buy {symbol}
                  </button>
                  <button className="px-8 py-2 w-full rounded-md bg-red-500 text-white font-bold transition duration-200 hover:bg-red-600 border-2 border-transparent hover:border-slate-500">
                    {symbol}
                  </button>
                </div>
                <div className="flex flex-row gap-4 align-middle">
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="bg-transparent p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-[#04db00]"
                  />
                  <Select label={symbol} variant="bordered" className="w-full">
                    <SelectItem key="hellpo" className="bg-black max-w-2xl">
                      {symbol}
                    </SelectItem>
                    <SelectItem key="hellpo" className="bg-black max-w-2xl">
                      USD
                    </SelectItem>
                    <SelectItem key="hellpo" className="bg-black max-w-2xl">
                      Eth
                    </SelectItem>
                  </Select>
                </div>
                <ConnectWallet />
                <div className="flex flex-row gap-4 align-middle"></div>
              </div>
              <div className="bg-black flex flex-col bg-opacity-50 shadow-50 border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-center items-center min-h-screen">
                  <div className="max-w-[720px] mx-auto">
                    <div className="w-full max-w-xl mx-auto">
                      <p className="text-[#04db00] mb-4 text-center">
                        Swap Coins ({symbol})
                      </p>
                      <p className="text-slate-100 mb-4">
                        Enter the amount you wish to convert and select the
                        desired currency.
                      </p>
                      <div className="flex flex-col items-center justify-between">
                        <div className="w-full max-w-xs min-w-[200px] mt-4">
                          <label className="block mb-1 text-sm text-slate-200">
                            From
                          </label>
                          <div className="relative mt-2">
                            <input
                              type="text"
                              className="w-full h-10 pl-3 bg-transparent placeholder:text-blue-500 text-slate-100 text-sm border border-[#04db00] rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#04db10] hover:border-[#04db10] shadow-md focus:shadow-md"
                              placeholder="1,000"
                            />
                            <div className="absolute top-2 right-0 flex items-center pr-3">
                              <div className="h-6 border-l border-slate-200 mr-2"></div>
                              <button className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-100 focus:outline-none">
                                <span className="dropdownSpan">{symbol}</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="h-4 w-4 ml-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </button>
                              <div className="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden bg-white border border-slate-200 rounded shadow-lg z-10">
                                <ul className="dropdownOptions">
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="USD"
                                  >
                                    USD
                                  </li>
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="EUR"
                                  >
                                    EUR
                                  </li>
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="CAD"
                                  >
                                    CAD
                                  </li>
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="RON"
                                  >
                                    RON
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center mt-6">
                          <button
                            aria-label="number"
                            className="p-2 rounded-full border border-slate-300  shadow-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5 text-slate-600"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="w-full max-w-xs min-w-[200px] -mt-2">
                          <label className="block mb-1 text-sm text-slate-200">
                            To
                          </label>
                          <div className="relative mt-2">
                            <input
                              type="text"
                              className="w-full h-10 pl-3 bg-transparent placeholder:text-blue-500 text-slate-100 text-sm border border-[#04db00] rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#04db10] hover:border-[#04db10] shadow-md focus:shadow-md"
                              placeholder="1,000"
                            />
                            <div className="absolute top-2 right-0 flex items-center pr-3">
                              <div className="h-6 border-l border-slate-200 mr-2"></div>
                              <button className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-100 focus:outline-none">
                                <span className="dropdownSpan">USD</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="h-4 w-4 ml-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </button>
                              <div className="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden bg-white border border-slate-200 rounded shadow-lg z-10">
                                <ul className="dropdownOptions">
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="USD"
                                  >
                                    USD
                                  </li>
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="EUR"
                                  >
                                    EUR
                                  </li>
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="CAD"
                                  >
                                    CAD
                                  </li>
                                  <li
                                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                                    data-value="RON"
                                  >
                                    RON
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="align-middle items-center ">
                  <ConnectWallet />
                </div>
              </div>
              <div className="bg-black bg-opacity-50 shadow-50 border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-between mb-4 items-start">
                  <div className="font-medium">Public Transactions</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[460px]">
                    <thead>
                      <tr>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                          Transaction
                        </th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                          Earning
                        </th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src={image}
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Transaction to 0xref345nmrf
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-rose-500">
                            -$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                            Withdrawn
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words border-2 border-white w-full shadow-lg rounded">
              <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-50">
                      Holders Distibution
                    </h3>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 bg-gray-600 text-gray-100 align-middle border border-solid border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Role
                        </th>
                        <th className="px-4 bg-gray-600 text-gray-100 align-middle border border-solid border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Amount
                        </th>
                        <th className="px-4 bg-gray-600 text-gray-100 align-middle border border-solid border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          Creators
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1.6B
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">70%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div className="w-[70%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className=" text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          OmniPump
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          2.5M
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">40%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div className="w-[40%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          Buyers
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          708K
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">45%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                                <div className="w-[45%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          User
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          400
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">60%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div className="w-[60%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-50 shadow-50 border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div id="last-users" className=" text-white rounded-lg">
                <h1 className=" py-4 uppercase">
                  All Your {name} ({symbol}) Transactions
                </h1>
                <div className="overflow-x-scroll">
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-black/60">
                      <tr>
                        <th className="text-left py-3 px-2 rounded-l-lg">
                          {symbol}
                        </th>
                        <th className="text-left py-3 px-2">Transaction</th>
                        <th className="text-left py-3 px-2">From</th>
                        <th className="text-left py-3 px-2">To</th>
                        <th className="text-left py-3 px-2">Amount</th>
                        <th className="text-left py-3 px-2">Status</th>
                        <th className="text-left py-3 px-2 rounded-r-lg">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-2 ">
                          <div className="inline-flex space-x-3 items-center">
                            <span>{symbol}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2">OXbhdbfwefvvbf</td>
                        <td className="py-3 px-2">Oxrg...rjgb</td>
                        <td className="py-3 px-2">OXCV..fde</td>
                        <td className="py-3 px-2">24 {symbol}</td>
                        <td className="py-3 px-2">Completed</td>
                        <td className="py-3 px-2">
                          <div className="inline-flex items-center space-x-3">
                            <a
                              href={`https://sepolia.etherscan.io/tx/newtrxhas`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View on Etherscan"
                              className="hover:text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopCoin;
