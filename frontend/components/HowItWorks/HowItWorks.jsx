import React from "react";
import Image from "next/image";
import wallet from "@/assets/icons/wallet.png";
import token from "@/assets/icons/token.png";
import choice from "@/assets/icons/choice.png";
import deploy from "@/assets/icons/deploy.png";

export default function HowItWorks() {
  return (
    <section className="flex flex-col items-center pt-20 gap-10" id="HowItWorks">
      <h1 className="text-5xl font-bold max-md:text-3xl">How It Works?</h1>
      <p className="text-base-content/80 text-md max-w-2xl text-center max-md:text-sm max-md:w-4/5">
        Create Your Token in One Click. The fastest and most secure way to
        generate your own token, without any compromises!
      </p>
      <ul className="timeline max-xl:hidden">
        <li>
          <div className="timeline-start mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={wallet} height={80} />
            </div>
            <div className="text-lg font-black">Connect Your Wallet</div>
            Easily connect any supported wallet to our platform to start
            creating your token in minutes.
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={token} height={80} />
            </div>
            <div className="text-lg font-black">Enter Token Details</div>
            Provide essential details for your token, including its name,
            symbol, decimals, and total supply.
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={choice} height={80} />
            </div>
            <div className="text-lg font-black">Choose Additional Features</div>
            Customize your token by selecting from a wide range of features like
            minting, burning, taxes, and more.
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={deploy} height={80} />
            </div>
            <div className="text-lg font-black">Deploy Your Token</div>
            Deploy your token to the blockchain ecosystem, making it instantly
            available for use across the network.
          </div>
        </li>
      </ul>
      <ul className="steps steps-vertical xl:hidden ">
        <li className="step step-primary">
          <div className=" mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={wallet} height={80} />
            </div>
            <div className="text-lg font-black">Connect Your Wallet</div>
            Easily connect any supported wallet to our platform to start
            creating your token in minutes.
          </div>
        </li>
        <li className="step step-primary">
          <div className=" mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={token} height={80} />
            </div>
            <div className="text-lg font-black">Enter Token Details</div>
            Provide essential details for your token, including its name,
            symbol, decimals, and total supply.
          </div>
        </li>
        <li className="step"><div className="mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={choice} height={80} />
            </div>
            <div className="text-lg font-black">Choose Additional Features</div>
            Customize your token by selecting from a wide range of features like
            minting, burning, taxes, and more.
          </div></li>
        <li className="step"><div className="mb-10 max-w-xs timeline-box border-primary flex flex-col gap-5 py-10 px-5 justify-center text-center">
            <div className="w-full flex justify-center">
              <Image src={deploy} height={80} />
            </div>
            <div className="text-lg font-black">Deploy Your Token</div>
            Deploy your token to the blockchain ecosystem, making it instantly
            available for use across the network.
          </div></li>
      </ul>
    </section>
  );
}
