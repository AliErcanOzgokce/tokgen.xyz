// page.jsx
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useChain } from "@/lib/ChainContext"; // Import the custom hook
import capitalizeFirstLetter from "../helper/capitalizeFirstLetter";
import {
  sendTransaction,
  connect,
  getChainId,
  switchChain,
  getAccount,
} from "@wagmi/core";
import { sepolia } from "@wagmi/core/chains";
import { parseEther } from "viem";
import { config } from "./config";
import { injected } from "@wagmi/connectors";
import { toast } from "react-hot-toast";
import Image from "next/image";
import getExplorerLink from "../helper/getExplorerLink";
import Link from "next/link";
import icon from "@/app/icon.svg";

function Page() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [mintable, setMintable] = useState(false);
  const [burnable, setBurnable] = useState(false);
  const [pausable, setPausable] = useState(false);
  const [permit, setPermit] = useState(true);
  const [flashMinting, setFlashMinting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenExplorerLink, setTokenExplorerLink] = useState("");

  const { selectedChain } = useChain(); // Use the context

  const handleCreate = async (e) => {
    e.preventDefault();
    toast.loading("Creating Token ...");
    setLoading(true);

    try {
      await connect(config, { connector: injected() });

      const chainId = getChainId(config);

      if (chainId !== selectedChain.id) {
        await switchChain(config, { chainId: Number(selectedChain.id) });
      }

      const result = await sendTransaction(config, {
        // FOR TESTING PURPOSES
        // chainId: sepolia.id,
        // to: "0xB04C2478aA1A246F75413fBcBdEa1fd7bd0804D3",
        // value: parseEther("0.00001"),
        //
        chainId: Number(selectedChain.id),
        to: "0xf1bb52640B43c157Bb429EB4d1F0F7Ae4e58f427",
        value: parseEther("0.1"),
      });

      toast.dismiss();
      toast.loading("Deposit Successfull ...");
      console.log("Transaction sent:", result);

      const address = getAccount(config);
      console.log(address);

      const features = [];
      if (mintable) features.push("Mintable");
      if (burnable) features.push("Burnable");
      if (pausable) features.push("Pausable");
      if (permit) features.push("Permit");
      if (flashMinting) features.push("FlashMint");

      console.log("Sending request with payload:", {
        features,
        address: address.address,
        name,
        symbol,
        premint: Number(mintAmount),
        chain: selectedChain.name, // Use the selected chain
        chainId: selectedChain.id,
      });

      toast.dismiss();
      toast.loading("Deploying Contract, It Can Take a While, Please Wait ...");

      const response = await axios.post("http://localhost:3001/api/deploy", {
        features,
        address: address.address,
        name,
        symbol,
        premint: Number(mintAmount),
        chain: selectedChain.name,
        chainId: selectedChain.id,
      });

      toast.dismiss();
      toast.success("Token Created Successfully: ");
      setTokenAddress(response.data.address);
      setIsCreated(true);
      setLoading(false);
      setName("");
      setSymbol("");
      setMintAmount("");
      setMintable(false);
      setBurnable(false);
      setPausable(false);
      setPermit(true);
      setFlashMinting(false);
      setTokenExplorerLink(
        getExplorerLink(selectedChain.name, response.data.address)
      );

      console.log("Contract deployed:", response.data);
    } catch (error) {
      toast.dismiss();
      setName("");
      setSymbol("");
      setMintAmount("");
      setMintable(false);
      setBurnable(false);
      setPausable(false);
      setPermit(true);
      setFlashMinting(false);
      setLoading(false);
      toast.error("Error deploying contract: ", error);
      console.error("Error deploying contract:", error);
    }
  };

  // If the token is created, show the success page
  if (isCreated) {
    return (
      <div className="p-20 flex flex-col items-center ">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/verified.png"
          width={100}
          height={100}
          className="mb-10"
        />
        <h1 className="text-3xl font-bold">Token Created Successfully!</h1>
        <p className="text-xl font-semibold mt-4">
          Token Address:{" "}
          <Link href={tokenExplorerLink} className="link link-primary">
            {tokenAddress}
          </Link>
        </p>
        <button className="btn btn-primary mt-20">
          <Link href="/manage_token">Create Another Token</Link>
        </button>
      </div>
    );
  }

  // For Mobile Devices
  if (window.innerWidth < 768) {
    // Mobil cihazlar için özel return
    return (
      <div className="p-10 flex flex-col gap-10 items-center justify-center text-center min-h-[calc(100svh-110px)]">
        <p className="text-3xl font-bold text-primary">
          Please Use a Computer To Create Tokens!
        </p>
        <div>
          <p className="text-md font-semibold  text-base-content/80">
            Token Generator App
          </p>
          <p className="text-md font-semibold mb-4 text-base-content/80">
            Create Token with One Click
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://x.com/aeoWeb3"
            className="btn btn-ghost text-sm flex flex-row  items-center justify-start"
          >
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/x.png"
              height={30}
              width={30}
              alt="twitter_aeoWeb3"
            />
          </a>
          <a
            href="https://github.com/aliercanozgokce"
            className="btn btn-ghost text-sm flex flex-row  items-center justify-start"
          >
            <Image
              src="https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/github.png"
              height={30}
              width={30}
              alt="github_AliErcanOzgokce"
            />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-12 flex flex-col items-center ">
      <form
        onSubmit={handleCreate}
        className="flex flex-col w-2/3 items-left gap-4 max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-4">
          Create Token in {capitalizeFirstLetter(selectedChain.name)}
        </h1>
        <label className="input input-bordered flex w-full items-center gap-2 ">
          <p className="text-primary font-semibold">Name</p>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="grow"
            placeholder="MyToken"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <p className="text-primary font-semibold">Symbol</p>
          <input
            type="text"
            onChange={(e) => {
              setSymbol(e.target.value);
            }}
            value={symbol}
            className="grow"
            placeholder="MTK"
          />
        </label>
        <label className="input input-bordered w-full flex items-center justify-between gap-2">
          <p className="text-primary font-semibold">Mint Amount</p>
          <input
            type="number"
            onChange={(e) => {
              setMintAmount(Number(e.target.value));
            }}
            value={mintAmount}
            className="grow"
            placeholder="1,000,000 MTK"
          />
        </label>
        <h1 className="text-2xl font-bold text-left mt-4">Features</h1>
        <div className="flex flex-row gap-3 items-center justify-center ">
          <div
            data-tip="Privileged accounts will be able to create more supply."
            className="tooltip w-full tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
          >
            <input
              type="checkbox"
              onChange={() => {
                setMintable(!mintable);
              }}
              value={mintable}
              className="checkbox checkbox-primary"
            />
            Mintable
          </div>
          <div
            data-tip="Token holders will be able to destroy their tokens."
            className="tooltip w-full tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
          >
            <input
              type="checkbox"
              onChange={() => {
                setBurnable(!burnable);
              }}
              value={burnable}
              className="checkbox checkbox-primary"
            />
            Burnable
          </div>
          <div
            data-tip="Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response."
            className="tooltip w-full tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
          >
            <input
              type="checkbox"
              onChange={() => {
                setPausable(!pausable);
              }}
              value={pausable}
              className="checkbox checkbox-primary"
            />
            Pausable
          </div>
          <div
            data-tip="Without paying gas, token holders will be able to allow third parties to transfer from their account."
            className="tooltip w-full tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
          >
            <input
              type="checkbox"
              defaultChecked
              onChange={() => {
                setPermit(!permit);
              }}
              value={permit}
              className="checkbox checkbox-primary"
            />
            Permit
          </div>
          <div
            data-tip="Built-in flash loans. Lend tokens without requiring collateral as long as they're returned in the same transaction."
            className="tooltip w-full tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
          >
            <input
              type="checkbox"
              onChange={() => {
                setFlashMinting(!flashMinting);
              }}
              value={flashMinting}
              className="checkbox checkbox-primary"
            />
            <p className=" whitespace-nowrap">Flash Minting</p>
          </div>
        </div>
        {loading ? (
          <button className="btn btn-lg btn-primary mt-12">
            <span className="loading loading-spinner"></span>
            Please Wait
          </button>
        ) : (
          <button type="submit" className="btn btn-lg btn-primary mt-12">
            Create Token
          </button>
        )}
      </form>
    </div>
  );
}

export default Page;
