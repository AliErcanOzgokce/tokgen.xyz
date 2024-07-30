// ChainContext.js
"use client";

import React, { createContext, useContext, useState } from "react";

// Create a Context for the selected chain
const ChainContext = createContext();

// Create a provider component
export const ChainProvider = ({ children }) => {
  const [selectedChain, setSelectedChain] = useState({
    id: "1",
    name: "ethereum",
  });

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      {children}
    </ChainContext.Provider>
  );
};

// Custom hook to use the ChainContext
export const useChain = () => {
  return useContext(ChainContext);
};
