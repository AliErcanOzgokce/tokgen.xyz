import React from "react";
import Image from "next/image";
import arbitrum from "@/assets/logos/arbitrum.svg";
import avalanche from "@/assets/logos/avalanche.svg";
import base from "@/assets/logos/base.svg";
import blast from "@/assets/logos/blast.svg";
import bnb from "@/assets/logos/bnb.svg";
import ethereum from "@/assets/logos/ethereum.svg";
import fantom from "@/assets/logos/fantom.svg";
import meld from "@/assets/logos/meld.svg";
import optimisim from "@/assets/logos/optimism.svg";
import peaq from "@/assets/logos/peaq.svg";
import polygon_pos from "@/assets/logos/polygon-pos.svg";
import polygon_zvevm from "@/assets/logos/polygon-zkevm.svg";
import solana from "@/assets/logos/solana.svg";

export default function Chains() {
  return (
    <section
      className="flex flex-col items-center gap-4 py-10 bg-base-100"
      data-theme="halloween"
    >
      <h1 className=" text-4xl max-md:w-5/6 font-bold text-center pt-10">
        Tokenize on leading <span className="">EVM</span> &{" "}
        <span className="">SVM</span> chains
      </h1>
      <div className="flex flex-col w-10/12 max-w-5xl">
        <div className="divider " />
      </div>
      <div className=" carousel max-md:h-96 max-md:carousel-vertical max-md:items-center max-md:gap-10 carousel-center max-lg:w-5/6 max-w-6xl p-4 space-x-4 bg-base-100 rounded-box pb-10">
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={avalanche} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={bnb} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={ethereum} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={solana} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={polygon_pos} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={polygon_zvevm} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={optimisim} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={peaq} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={fantom} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={arbitrum} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={blast} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={meld} height={30} />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src={base} height={30} />
        </div>
      </div>
    </section>
  );
}
