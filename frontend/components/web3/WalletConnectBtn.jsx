"use client"
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import walletAddressFormat from "@/helper/walletAddressFormat";
import React from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config, projectId } from "./config";

export default function WalletConnectBtn() {

  const { open } = useWeb3Modal();

  const { address, isDisconnected } = useAccount();

  const connectHandle = () => {
    open({ view: "Networks" });
  };

  const showOptionHandle = () => {
    open({ view: "Account" });
  };

  const BeforeConnecton = () => {
    return <button className="btn btn-primary" onClick={connectHandle}>Connect Wallet</button>;
  };

  const AfterConnection = () => {
    return (
      <button className="btn btn-primary" onClick={showOptionHandle}>{walletAddressFormat(address)}</button>
    );
  };

  return (
    <React.Fragment>
      {isDisconnected ? <BeforeConnecton /> : <AfterConnection />}
    </React.Fragment>
  );
}
