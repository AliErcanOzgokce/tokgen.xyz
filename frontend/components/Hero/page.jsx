import React from "react";
import Image from "next/image";
import hero from "@/assets/hero.png";
import richerd from "@/assets/richerd.jpg";
import nft from "@/assets/nft.jpeg";
import ape from "@/assets/ape_yacht.jpg";

export default function page() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
      <div className="hero min-h-4/5 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <Image
            src={hero}
            className="max-w-lg max-md:-m-4 lg:w-full max-md:w-full"
          />
          <div>
            <h1 className="text-5xl font-bold leading-snug max-md:text-4xl max-md:leading-normal max-md:text-center">
              Create Any Token to Any Chain with{" "}
              <span class=" relative whitespace-nowrap">
                <span class="ml-3 max-md:ml-0 absolute bg-neutral-content -left-1 -top-1 -bottom-1 -right-5 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 "></span>
                <span class="relative text-accent-content md:ml-1 ml-3">One Click</span>
              </span>
            </h1>
            <p className="py-6 max-w-xl max-md:text-center">
              Create any type of token on any blockchain with just one click
              using <b>tokgen.xyz</b>. Perfect for launching cryptocurrencies, NFTs, or
              decentralized apps quickly and effortlessly.
            </p>
            <button className="btn btn-primary max-md:w-full">
              Get Started
            </button>
            <div className="flex flex-row gap-5 items-center pt-10">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
                <div className="avatar">
                  <div className="w-12">
                    <Image src={richerd} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <Image src={nft} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <Image src={ape} />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
                <p className="text-md font-bold">
                  4762{" "}
                  <span className="font-medium">People Generated Token!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
