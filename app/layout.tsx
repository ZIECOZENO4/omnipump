
import type { Metadata } from "next";
import { Workbench } from 'next/font/google';
import "./globals.css";
import NavBar from "../components/Navbar";
import { Providers } from "./providers";
import { Suspense } from 'react';
import Loading from './loading';
import FirstAnimation from "../components/FirstAnimation";

const workbench = Workbench({
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-workbench',
});

export const metadata: Metadata = {
  title: "OmniPump",
  description: "Generate and create your own coin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${workbench.variable} dark text-white antialiased relative font-workbench`}>
       <Providers>
        <div className="relative min-h-screen">
          <FirstAnimation />
          <div className="relative z-10">
          <NavBar />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </div>
        </Providers>
      </body>
    </html>
  );
}