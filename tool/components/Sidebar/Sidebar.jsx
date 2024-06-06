import React from "react";
import Image from "next/image";
import icon from "@/app/icon.svg";

export default function Sidebar({ children }) {
  return (
    <div className="drawer bg-base-100 lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:block ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {/* lg'den küçük ekranlarda gizle, büyük ekranlarda göster */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <a
            href="/"
            className="btn btn-ghost text-xl flex flex-row gap-2 items-center justify-center"
          >
            <Image src={icon} height={40} width={40} alt="tokgen_xyz_icon" />
            tokgen.xyz
          </a>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
