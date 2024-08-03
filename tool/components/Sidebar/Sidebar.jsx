"use client";
import React from "react";
import Image from "next/image";
import icon from "@/app/icon.svg";
import Link from "next/link";
import GasPrice from "./GasPrice/GasPrice";
import { TickerTape } from "react-tradingview-embed";

export default function Sidebar({ children }) {
  
  return (
    <div className="drawer bg-base-100 lg:drawer-open text-base-content shadow-lg">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:block">
        <div className="w-full flex grid grid-cols-3 p-3 sm:hidden lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button btn-square btn-ghost hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" flex justify-center">
            <Link href="/" className="btn btn-ghost text-xl ">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src={icon}
                  height={40}
                  width={40}
                  alt="tokgen_xyz_icon"
                />
                tokgen.xyz
              </div>
            </Link>
          </div>
        </div>
        {/* lg'den küçük ekranlarda gizle, büyük ekranlarda göster */}
        <TickerTape
          widgetProps={{
            showSymbolLogo: true,
            isTransparent: false,
            colorTheme: "dark",
            displayMode: "regular",
            locale: "en",
            symbols: [
              {
                proName: "BINANCE:ETHUSDT",
                title: "ETH/USD",
              },
              {
                proName: "BINANCE:BNBUSDT",
                title: "BNB/USD",
              },
              {
                proName: "KUCOIN:MATICUSDT",
                title: "MATIC/USD",
              },
              {
                proName: "KUCOIN:ARBUSDT",
                title: "ARB/USD",
              },
              {
                proName: "KUCOIN:AVAXUSDT",
                title: "AVAX/USD",
              },
              {
                proName: "KUCOIN:FTMUSDT",
                title: "FTM/USD",
              },
              {
                proName: "KUCOIN:OPUSDT",
                title: "OP/USD",
              },
              {
                proName: "MEXC:BLASTUSDT",
                title: "BLAST/USD",
              },
            ],
          }}
        />
        <GasPrice />
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-1 w-full min-h-full bg-base-200 text-base-content grid content-between">
          {/* Sidebar content here */}

          <div>
            <a
              href="/"
              className="btn btn-ghost text-xl flex flex-row  items-center justify-start"
            >
              <Image src={icon} height={30} width={30} alt="tokgen_xyz_icon" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-1">
            <a
              href="https://x.com/aeoWeb3"
              className="btn btn-ghost text-sm flex flex-row  items-center justify-start"
            >
              <Image
                src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/x.png"
                height={20}
                width={20}
                alt="twitter_aeoWeb3"
              />
            </a>
            <a
              href="https://github.com/aliercanozgokce"
              className="btn btn-ghost text-sm flex flex-row  items-center justify-start"
            >
              <Image
                src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/github.png"
                height={20}
                width={20}
                alt="github_AliErcanOzgokce"
              />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
