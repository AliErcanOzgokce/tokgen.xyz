import React from "react";
import Image from "next/image";

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
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/avalanche.svg" height={150} width={150} alt="avalanche" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/bnb.svg" height={150} width={150} alt="binance" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/ethereum.svg" height={150} width={150} alt="etherum" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/solana.svg" height={150} width={150} alt="solana" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/polygon-pos.svg" height={150} width={150} alt="polygon-pos" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/polygon-zkevm.svg" height={150} width={150} alt="polygon-zkevm"/>
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/optimism.svg" height={150} width={150} alt="optimisim" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/peaq.svg" height={150} width={150} alt="peaq" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/fantom.svg" height={150} width={150} alt="fantom"/>
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/arbitrum.svg" height={150} width={150} alt="arbitrum" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/blast.svg" height={150} width={150} alt="blast" />
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/meld.svg" height={150} width={150} alt="meld"/>
        </div>
        <div className="carousel-item max-md:h-1/6 px-4">
          <Image src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/assets/logos/base.svg" height={150} width={150} alt="base" />
        </div>
      </div>
    </section>
  );
}
