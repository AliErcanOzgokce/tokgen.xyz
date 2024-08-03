// GasPrice.jsx
"use client";

import React, { useState, useEffect, useContext } from "react";
import getGasPrice from "@/lib/getGasPrice";
import Image from "next/image";
import { useChain } from "@/lib/ChainContext"; // Ensure this import is correct

// Define network names
const networkNames = [
  { name: "Ethereum", value: "ethereum", id: "1" },
  { name: "Binance Smart Chain", value: "binance", id: "56" },
  { name: "Polygon", value: "polygon", id: "137" },
  { name: "Arbitrum", value: "arbitrum", id: "42161" },
  { name: "Avalanche", value: "avalanche", id: "43114" },
  { name: "Fantom", value: "fantom", id: "250" },
  { name: "Optimism", value: "optimism", id: "10" },
  { name: "Base", value: "base", id: "8453" },
  { name: "Blast", value: "blast", id: "81457" },
  { name: "Celo", value: "celo", id: "42220" },
  { name: "Linea", value: "linea", id: "59144" },
  { name: "ZetaChain", value: "zetachain", id: "7000" },
];

const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(null);
  const [lowGasPrice, setLowGasPrice] = useState(null);
  const [normalGasPrice, setNormalGasPrice] = useState(null);
  const [highGasPrice, setHighGasPrice] = useState(null);
  const [networkStatus, setNetworkStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const { selectedChain, setSelectedChain } = useChain(); // Use the context

  const getGas = async () => {
    return getGasPrice(selectedChain.id);
  };

  useEffect(() => {
    if (selectedChain.id === "") {
      return;
    }
    if (selectedChain.id === "42220") {
      setLowGasPrice("X");
      setNormalGasPrice("X");
      setHighGasPrice("X");
      setLoading(false);
      return;
    }
    const interval = setInterval(async () => {
      const gasPrice = await getGas();
      console.log(gasPrice);
      const lowGas = parseFloat(gasPrice.low.suggestedMaxFeePerGas).toFixed(2);
      const normalGas = parseFloat(
        gasPrice.medium.suggestedMaxFeePerGas
      ).toFixed(2);
      const highGas = parseFloat(gasPrice.high.suggestedMaxFeePerGas).toFixed(
        2
      );

      setLowGasPrice(lowGas < 0.01 ? ">0.01" : lowGas);
      setNormalGasPrice(normalGas < 0.01 ? ">0.01" : normalGas);
      setHighGasPrice(highGas < 0.01 ? ">0.01" : highGas);
      setNetworkStatus(gasPrice.networkCongestion);
      setGasPrice(gasPrice);
      setLoading(false);
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedChain.id]);

  const handleChainChange = (event) => {
    setLoading(true);
    const selectedNetwork = networkNames.find(
      (net) => net.value === event.target.value
    );
    if (selectedNetwork) {
      setSelectedChain({
        id: selectedNetwork.id,
        name: selectedNetwork.value,
      });
    }
  };

  const getNetworkStatusColor = () => {
    if (networkStatus === "") {
      return "text-gray-500 font-bold";
    } else if (networkStatus < 0.3) {
      return "text-green-500 font-bold";
    } else if (networkStatus < 0.65) {
      return "text-yellow-500 font-bold";
    } else {
      return "text-red-500 font-bold";
    }
  };

  if (window.innerWidth < 768) {
    // Mobil cihazlar için özel return
    return ;
  }

  return (
    <div className="p-3 flex justify-between gap-4 text-base-content">
      <div className="flex gap-3">
        <Image
          src={`https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/${selectedChain.name}.svg`}
          height={30}
          width={30}
          alt={`${selectedChain.name}_logo`}
        />
        <select
          data-theme="halloween"
          className="bg-gradient-to-tl from-secondary to-primary border-gray-300 rounded py-2 px-4 text-white appearance-none font-bold shadow-lg"
          value={selectedChain.name}
          onChange={handleChainChange}
        >
          {networkNames.map((network) => (
            <option key={network.id} value={network.value}>
              {network.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded text-center flex flex-row gap-3 bg-gradient-to-tl from-base-100 to-base-300 shadow-lg">
            <p className="text-base-content font-semibold">🐢 Standart</p>
            <p className="text-green-500 font-bold">
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                `${lowGasPrice} Gwei`
              )}
            </p>
          </div>
          <div className="p-4 rounded text-center flex flex-row gap-3 bg-gradient-to-tl from-base-100 to-base-300 shadow-lg">
            <p className="text-base-content font-semibold">🐇 Average</p>
            <p className="text-yellow-500 font-bold">
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                `${normalGasPrice} Gwei`
              )}
            </p>
          </div>
          <div className="p-4 rounded text-center flex flex-row gap-3 bg-gradient-to-tl from-base-100 to-base-300 shadow-lg">
            <p className="text-base-content font-semibold">🐆 Rapid</p>
            <p className="text-red-500 font-bold">
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                `${highGasPrice} Gwei`
              )}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-tl from-base-100 to-base-300 shadow-lg text-base-content p-4 rounded flex gap-2">
          <p className="font-semibold">Network Status:</p>
          <p className={getNetworkStatusColor()}>
            {loading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : selectedChain.id === "42220" ? ( // Assuming "42220" is the chain ID for Celo
              "Can't Get Gas Price"
            ) : networkStatus == 0 &&
              selectedChain.id !== "56" &&
              selectedChain.id !== "42161" &&
              selectedChain.id !== "43114" &&
              selectedChain.id !== "250" &&
              selectedChain.id !== "8453" &&
              selectedChain.id !== "59144" &&
              selectedChain.id !== "7000" ? (
              "Pending"
            ) : networkStatus < 0.3 ? (
              "Low"
            ) : networkStatus < 0.65 ? (
              "Mid"
            ) : (
              "Busy"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GasPrice;

// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import getGasPrice from "@/app/lib/getGasPrice";
// import Image from "next/image";

// const GasPrice = () => {
//   const [gasPrice, setGasPrice] = useState(null);
//   const [lowGasPrice, setLowGasPrice] = useState(null);
//   const [normalGasPrice, setNormalGasPrice] = useState(null);
//   const [highGasPrice, setHighGasPrice] = useState(null);
//   const [selectedChain, setSelectedChain] = useState("1");
//   const [selectedChainName, setSelectedChainName] = useState("ethereum");
//   const [networkStatus, setNetworkStatus] = useState("");
//   const [loading, setLoading] = useState(true);

//   const getGas = async () => {
//     return getGasPrice(selectedChain);
//   };

//   useEffect(() => {
//     if (selectedChain === "") {
//       return;
//     }
//     const interval = setInterval(async () => {
//       const gasPrice = await getGas();
//       console.log(gasPrice);
//       const lowGas = parseFloat(gasPrice.low.suggestedMaxFeePerGas).toFixed(2);
//       const normalGas = parseFloat(
//         gasPrice.medium.suggestedMaxFeePerGas
//       ).toFixed(2);
//       const highGas = parseFloat(gasPrice.high.suggestedMaxFeePerGas).toFixed(
//         2
//       );

//       setLowGasPrice(lowGas < 0.01 ? ">0.01" : lowGas);
//       setNormalGasPrice(normalGas < 0.01 ? ">0.01" : normalGas);
//       setHighGasPrice(highGas < 0.01 ? ">0.01" : highGas);
//       setNetworkStatus(gasPrice.networkCongestion);
//       setGasPrice(gasPrice);
//       setLoading(false);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [selectedChain]);

//   const handleChainChange = (event) => {
//     setLoading(true);
//     switch (event.target.value) {
//       case "ethereum":
//         setSelectedChain("1");
//         break;
//       case "binance":
//         setSelectedChain("56");
//         break;
//       case "polygon":
//         setSelectedChain("137");
//         break;
//       case "arbitrum":
//         setSelectedChain("42161");
//         break;
//       case "avalanche":
//         setSelectedChain("43114");
//         break;
//       case "fantom":
//         setSelectedChain("250");
//         break;
//       case "optimism":
//         setSelectedChain("10");
//         break;
//       case "base":
//         setSelectedChain("8453");
//         break;
//       case "blast":
//         setSelectedChain("81457");
//         break;
//       default:
//         setSelectedChain("");
//         break;
//     }
//     setSelectedChainName(event.target.value);
//     console.log(selectedChain);
//     console.log(selectedChainName);
//   };

//   const getNetworkStatusColor = () => {
//     if (networkStatus === "") {
//       return "text-gray-500 font-bold";
//     } else if (networkStatus < 0.3) {
//       return "text-green-500 font-bold";
//     } else if (networkStatus < 0.65) {
//       return "text-yellow-500 font-bold";
//     } else {
//       return "text-red-500 font-bold";
//     }
//   };

//   return (
//     <div className="p-3 flex justify-between gap-4 text-base-content">
//       <div className=" flex gap-3">
//         <Image
//           src={`https://s3.eu-north-1.amazonaws.com/tokgen.xyz/app.tokgen.xyz/${selectedChainName}.svg`}
//           height={30}
//           width={30}
//           alt={`${selectedChainName}_logo`}
//         />
//         <select
//         data-theme="halloween"
//           className="bg-gradient-to-tl from-secondary to-primary border-gray-300 rounded py-2 px-4 text-white appearance-none font-bold shadow-lg"
//           value={selectedChainName}
//           onChange={handleChainChange}
//         >
//           <option value="ethereum">Ethereum</option>
//           <option value="binance">Binance Smart Chain</option>
//           <option value="polygon">Polygon</option>
//           <option value="arbitrum">Arbitrum</option>
//           <option value="avalanche">Avalanche</option>
//           <option value="fantom">Fantom</option>
//           <option value="optimism">Optimism</option>
//           <option value="base">Base</option>
//           <option value="blast">Blast</option>
//         </select>
//       </div>

//       <div className="flex gap-4">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="p-4 rounded text-center flex flex-row gap-3 bg-gradient-to-tl from-base-100 to-base-300 shadow-lg">
//             <p className="text-base-content font-semibold">🐢 Standart</p>
//             <p className="text-green-500 font-bold">
//               {loading ? (
//                 <span className="loading loading-dots loading-sm"></span>
//               ) : (
//                 `${lowGasPrice} Gwei`
//               )}
//             </p>
//           </div>
//           <div className="p-4 rounded text-center flex flex-row gap-3 bg-gradient-to-tl from-base-100 to-base-300 shadow-lg">
//             <p className="text-base-content font-semibold">🐇 Average</p>
//             <p className="text-yellow-500 font-bold">
//               {loading ? (
//                 <span className="loading loading-dots loading-sm"></span>
//               ) : (
//                 `${normalGasPrice} Gwei`
//               )}
//             </p>
//           </div>
//           <div className="p-4 rounded text-center flex flex-row gap-3 bg-gradient-to-tl from-base-100 to-base-300 shadow-lg">
//             <p className="text-base-content font-semibold">🐆 Rapid</p>
//             <p className="text-red-500 font-bold">
//               {loading ? (
//                 <span className="loading loading-dots loading-sm"></span>
//               ) : (
//                 `${highGasPrice} Gwei`
//               )}
//             </p>
//           </div>
//         </div>
//         <div className="bg-gradient-to-tl from-base-100 to-base-300 shadow-lg text-base-content p-4 rounded flex gap-2">
//           <p className="font-semibold">Network Status:</p>
//           <p className={getNetworkStatusColor()}>
//             {loading ? (
//               <span className="loading loading-dots loading-sm"></span>
//             ) : networkStatus == 0 &&
//               selectedChain !== "56" &&
//               selectedChain !== "42161" &&
//               selectedChain !== "43114" &&
//               selectedChain !== "250" ? (
//               "Pending"
//             ) : networkStatus < 0.3 ? (
//               "Low"
//             ) : networkStatus < 0.65 ? (
//               "Mid"
//             ) : (
//               "Busy"
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GasPrice;
