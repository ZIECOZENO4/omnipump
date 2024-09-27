"use client"
import React from "react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
];

const customTheme = darkTheme({
  colors: {
    borderColor: "#14db3c",
    accentText: "#04db00",
    modalBg: "#121111",
    primaryButtonBg: "#14db3c"
  },
});

export default function ConnectWallet() {
  return (
    <>
      {/* Button for larger screens (md and up) */}
      <div className="hidden md:block">
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={customTheme}
          connectButton={{ label: "Connect Wallet" }}
          connectModal={{
            size: "wide",
            title: "OmniPump Coin Wallet",
            showThirdwebBranding: false,
          }}
        />
      </div>

      {/* Button for smaller screens (below md) */}
      <div className="md:hidden w-12">
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={customTheme}  
          connectButton={{ label: "Connect Wallet" }}
          connectModal={{
            size: "wide",
            title: "OmniPump Coin Wallet",
            showThirdwebBranding: false,
          }}
        />
      </div>
    </>
  );
}