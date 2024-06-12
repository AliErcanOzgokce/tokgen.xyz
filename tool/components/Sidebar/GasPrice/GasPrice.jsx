"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GasPrice = () => {
    const [gasPrice, setGasPrice] = useState(null);
    const [selectedChain, setSelectedChain] = useState('');

    useEffect(() => {
        fetchGasPrice();
    }, []);

    const fetchGasPrice = async () => {
        try {
            const response = await axios.get('https://api.example.com/gas-price');
            setGasPrice(response.data);
        } catch (error) {
            console.error('Failed to fetch gas price:', error);
        }
    };

    const handleChainChange = (event) => {
        setSelectedChain(event.target.value);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Gas Price</h2>
            <select
                className="border border-gray-300 rounded p-2 mb-4"
                value={selectedChain}
                onChange={handleChainChange}
            >
                <option value="">Choose Chain</option>
                <option value="ethereum">Ethereum</option>
                <option value="bsc">Binance Smart Chain</option>
                <option value="polygon">Polygon</option>
            </select>
            {gasPrice && (
                <div>
                    <p>
                        Current Gas Price for {selectedChain}: {gasPrice}
                    </p>
                </div>
            )}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-500 p-4 rounded">
                    <p className="text-white font-bold">Slow</p>
                    <p>Gas Price: 100</p>
                    <p>Gas Price Trend: <span className="text-red-500">↓</span></p>
                </div>
                <div className="bg-yellow-500 p-4 rounded">
                    <p className="text-white font-bold">Normal</p>
                    <p>Gas Price: 20</p>
                    <p>Gas Price Trend: <span className="text-yellow-500">→</span></p>
                </div>
                <div className="bg-green-500 p-4 rounded">
                    <p className="text-white font-bold">Fast</p>
                    <p>Gas Price: 30</p>
                    <p>Gas Price Trend: <span className="text-green-500">↑</span></p>
                </div>
            </div>
            <div className="absolute top-4 right-4">
                <div className="bg-gray-800 text-white p-4 rounded">
                    <p>Network Status:</p>
                    <p className="text-yellow-500">Normal</p>
                </div>
            </div>
        </div>
    );
};

export default GasPrice;