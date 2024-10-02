"use client";
import React from 'react';
import CubicButton from './CubicButton';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ConnectWallet from "./ConnectButton";
import { Badge, Button } from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import NotificationAlert from "./Notification";

interface NavItem {
  name: string;
  path: string;
}
const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  headerWrapper: `flex justify-between h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded `,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
};

const MdNavBar = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const currentPath = usePathname();
  
    const navItems: NavItem[] = [
      { name: "Home", path: "/" },
      { name: "Create", path: "/create" },
      { name: "Lunch", path: "/lunch" },
      { name: "New Coin", path: "/newcoin" },
      { name: "Listing", path: "/listing" },
      { name: "Contact", path: "/contact" }
    ];
  
    const toggleNotification = () => {
      setIsNotificationOpen(!isNotificationOpen);
    };
  return (
    <div className='md:bg-[#17171A] hidden md:text-white md:h-20 md:flex md:gap-[100px] w-full md:p-[20px] md:sticky md:top-0 md:z-50 md:fixed'>
   <Link href="/" className="flex flex-row ">
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#e5e7eb"
              whileHover={{ scale: 1.1 }}
              className="transition-colors duration-300 hover:fill-gray-200"
            >
              <g id="SVGRepo_iconCarrier">
                <g id="layer1">
                  <path d="M 6.5 1 A 6.5 6.5 0 0 0 0 7.5 A 6.5 6.5 0 0 0 6.5 14 A 6.5 6.5 0 0 0 13 7.5 A 6.5 6.5 0 0 0 6.5 1 z M 6.5 2 A 5.5 5.5 0 0 1 12 7.5 A 5.5 5.5 0 0 1 6.5 13 A 5.5 5.5 0 0 1 1 7.5 A 5.5 5.5 0 0 1 6.5 2 z M 6 4 L 6 5 C 5.177495 5 4.5 5.677495 4.5 6.5 C 4.5 7.322505 5.177495 8 6 8 L 7 8 C 7.282065 8 7.5 8.217935 7.5 8.5 C 7.5 8.782065 7.282065 9 7 9 L 6 9 L 4.5 9 L 4.5 10 L 6 10 L 6 11 L 7 11 L 7 10 C 7.822504 10 8.5 9.322505 8.5 8.5 C 8.5 7.677495 7.822504 7 7 7 L 6 7 C 5.717935 7 5.5 6.782065 5.5 6.5 C 5.5 6.217935 5.717935 6 6 6 L 7 6 L 8.5 6 L 8.5 5 L 7 5 L 7 4 L 6 4 z M 13.851562 6.0175781 C 13.917903 6.3459879 13.954929 6.6832329 13.976562 7.0253906 C 16.790577 7.267363 19 9.6232872 19 12.5 C 19 15.537566 16.537566 18 13.5 18 C 11.255696 18 9.3278145 16.653823 8.4726562 14.726562 C 8.1476973 14.815637 7.8153176 14.885044 7.4746094 14.929688 C 8.4374925 17.314715 10.77003 19 13.5 19 C 17.089851 19 20 16.089851 20 12.5 C 20 9.0289309 17.27678 6.2014281 13.851562 6.0175781 z M 13.849609 9 C 13.704848 9.7079885 13.454794 10.379092 13.125 11 L 14 11 L 15.5 11 L 15.5 10 L 14 10 L 14 9 L 13.849609 9 z M 12.619141 11.818359 C 12.425617 12.091462 12.211734 12.34917 11.984375 12.59375 C 12.252738 12.843286 12.608526 13 13 13 L 14 13 C 14.282065 13 14.5 13.217935 14.5 13.5 C 14.5 13.782065 14.282065 14 14 14 L 13 14 L 11.5 14 L 11.5 15 L 13 15 L 13 16 L 14 16 L 14 15 C 14.822504 15 15.5 14.322505 15.5 13.5 C 15.5 12.677495 14.822504 12 14 12 L 13 12 C 12.842293 12 12.709869 11.92773 12.619141 11.818359 z " />
                </g>
              </g>
            </motion.svg>
            <motion.p
              className="font-extrabold mt-2 text-white tracking-widest hover:text-gray-500 text-inherit text-md md:text-2xl ml-2 md:ml-4 hover:scale-110 hover:text-xl md:hover:text-3xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              whileHover={{
                y: [-2, 2, -2],
                transition: { repeat: Infinity, duration: 0.5 }
              }}
            >
              OmniPump
            </motion.p>
          </Link>

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
        {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  href={item.path}
                  className={`items-center px-1 flex flex-row align-middle text-center border-b-2 text-md hover:scale-110 hover:text-xl hover:-translate-y-1 transition-all duration-300 ease-in-out font-bold ${
                    currentPath === item.path
                      ? "border-white text-white"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
                {hoveredItem === item.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
     
        </nav>
        <div className="flex items-center justify-end ml-4">
        <div className="md:w-auto hidden text-white rounded-md sm:flex w-12">
              <ConnectWallet />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-opacity-60 text-white hover:bg-gray-500 p-2 md:px-3 md:py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              <Badge content="New" shape="circle" color="default">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="Notifications and Sidebar"
                  variant="light"
                  onClick={toggleNotification}
                >
                 <NotificationIcon
  size={24}
  fill='#94a3b8'
  background="#1e293b"
/>
                </Button>
              </Badge>
            </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isNotificationOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleNotification}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full bg-black text-white z-50 overflow-y-auto"
              style={{
                width:
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? "40%"
                    : "80%"
              }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-center font-bold md:hidden px-4 md:px-8">
                    Quick Links
                  </h2>
                  <h2 className="text-xl text-center font-bold hidden sm:flex px-4 md:px-8">
                    Transaction History
                  </h2>

                  <Button
                    isIconOnly
                    color="danger"
                    variant="light"
                    aria-label="Close"
                    onClick={toggleNotification}
                  >
                    X
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="md:hidden p-3 gap-4 aligm-middle flex flex-col">
                    <Link href="/">
                      <button className="p-[3px] relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r  from-slate-500 to-slate-700 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Home
                        </div>
                      </button>
                    </Link>
                    <Link href="/create">
                      <button className="p-[3px] relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r  from-slate-500 to-slate-700 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Create
                        </div>
                      </button>
                    </Link>
                    <Link href="/lunch">
                      <button className="p-[3px] relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r  from-slate-500 to-slate-700 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Lunch
                        </div>
                      </button>
                    </Link>
                    <Link href="/newcoin">
                      <button className="p-[3px] relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r  from-slate-500 to-slate-700 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                     New Coin
                        </div>
                      </button>
                    </Link>
                    <Link href="/lisiting">
                      <button className="p-[3px] relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r  from-slate-500 to-slate-700 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Listing
                        </div>
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="p-[3px] relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r  from-slate-500 to-slate-700 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Contact
                        </div>
                      </button>
                    </Link>
                    <CubicButton />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl text-center font-bold mt-6 md:hidden px-4 md:px-8">
                      Transaction History
                    </h2>
                    <NotificationAlert />
                  </div>
                  {/* Add more notifications as needed */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MdNavBar;