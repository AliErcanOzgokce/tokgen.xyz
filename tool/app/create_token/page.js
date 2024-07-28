"use client";
import React, { useState } from "react";

function page() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [mintAmount, setMintAmount] = useState(0);
  const [mintable, setMintable] = useState(false);
  const [burnable, setBurnable] = useState(false);
  const [pausable, setPausable] = useState(false);
  const [permit, setPermit] = useState(true);
  const [flashMinting, setFlashMinting] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/deploy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          symbol,
          mintAmount,
          mintable,
          burnable,
          pausable,
          permit,
          flashMinting,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Token created successfully:", data);
    } catch (error) {
      console.error("Error creating token:", error);
    }
  };
  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-3">Create Token in Ethereum</h1>
      <form
        onSubmit={handleCreate}
        className="flex flex-col w-2/3 items-center gap-4"
      >
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
        <label className="input input-bordered w-full flex items-center gap-2">
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
        <h1 className="text-2xl font-bold">Features</h1>
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
            className="tooltip tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
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
            className="tooltip tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
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
            className="tooltip tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
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
            className="tooltip tooltip-bottom bg-gradient-to-tl from-base-100 to-base-300 shadow-lg rounded p-4 flex flex-row gap-3"
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
        <button type="submit" className="btn btn-lg btn-primary">
          Create Token
        </button>
      </form>
    </div>
  );
}

export default page;
