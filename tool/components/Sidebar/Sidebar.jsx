import React from "react";
import Image from "next/image";
import icon from "@/app/icon.svg";
import Link from "next/link";

export default function Sidebar({ children }) {
  return (
    <div className="drawer bg-base-100 lg:drawer-open text-base-content">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:block ">
        <div className="w-full flex grid grid-cols-3 p-4 lg:hidden">
          <div className="flex-none">
            <label 
            htmlFor="my-drawer-2" className="btn drawer-button btn-square btn-ghost">
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
          <div>
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
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content grid content-between">
          {/* Sidebar content here */}

          <div>
            <a
              href="/"
              className="btn btn-ghost text-xl flex flex-row gap-2 items-center justify-start"
            >
              <Image src={icon} height={40} width={40} alt="tokgen_xyz_icon" />
              tokgen.xyz
            </a>
            <div className="divider my-1"></div>
            <p className="text-lg font-bold">Create</p>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/token.png"
                  height={20}
                  width={20}
                  alt="create_token"
                />
                Create Token
              </button>
            </li>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/nft.png"
                  height={20}
                  width={20}
                  alt="create_nft_token"
                />
                Create NFT
              </button>
            </li>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/multi_token.png"
                  height={20}
                  width={20}
                  alt="create_multi_token"
                />
                Create Multi Token
              </button>
            </li>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/airdrop.png"
                  height={20}
                  width={20}
                  alt="create_airdrop"
                />
                Create Airdrop
              </button>
            </li>
            <div className="divider my-1"></div>
            <p className="text-lg font-bold">Manage</p>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/manageToken.png"
                  height={20}
                  width={20}
                  alt="manage_token"
                />
                Manage Token
              </button>
            </li>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/manageNFT.png"
                  height={20}
                  width={20}
                  alt="manage_nft_token"
                />
                Manage NFT
              </button>
            </li>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/manageMultiToken.png"
                  height={20}
                  width={20}
                  alt="manage_multi_token"
                />
                Manage Multi Token
              </button>
            </li>
            <li>
              <button className="btn btn-ghost flex justify-start">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/airdrop.png"
                  height={20}
                  width={20}
                  alt="manage_airdrop"
                />
                Manage Airdrop
              </button>
            </li>
          </div>
          <div className="dropdown dropdown-top dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn w-full justify-between m-1 border-base-content"
            >
              <Image
                src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/themeChange.png"
                height={20}
                width={20}
                alt="change_theme"
              />
              Change Theme
              <svg
                width="12px"
                height="12px"
                className="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Night Theme"
                  value="default"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Light Theme"
                  value="bumblebee"
                />
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
