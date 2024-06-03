import React from "react";
import Image from "next/image";
import down from "@/assets/icons/arrow-down.svg";

export default function Problem() {
  return (
    <section className="text-base-content min-h-4/5 flex flex-col items-center py-20">
      <div
        data-theme="bumblebee"
        className="card max-md:w-5/6 mim-w-80 max-w-lg w-3/6 p-10  bg-secondary shadow-xl"
      >
        <div className="card-body ">
          <div className="text-center leading-loose">
            <p>
              +<span className="font-bold text-red-600"> 6 hrs</span> writing
              and optimizing smart contracts
            </p>
            <p>
              +<span className="font-bold text-red-600"> 4 hrs</span> setting up
              the development environment
            </p>
            <p>
              +<span className="font-bold text-red-600"> 2 hrs</span> selecting
              the appropriate blockchain
            </p>
            <p>
              +<span className="font-bold text-red-600"> 3 hrs</span> ensuring
              contract security
            </p>
            <p>
              +<span className="font-bold text-red-600"> 1 hrs</span> choosing
              the right token standard
            </p>
            <p>
              +<span className="font-bold text-red-600"> 2 hrs</span> testing
              and deploying the token
            </p>
            <h3 className="font-bold text-2xl pt-4">
              = <span className="font-bold text-red-600"> 22+ hours</span> of
              headaches
            </h3>
          </div>
        </div>
      </div>
      <p className="text-sm pt-10 flex flex-row gap-2 items-center">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/icons/arrow-down.svg"
          className="h-fit"
          height={10}
          width={10}
          alt="arrow_down"
        />{" "}
        There is an better way
      </p>
    </section>
  );
}
