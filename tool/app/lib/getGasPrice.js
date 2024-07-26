const axios = require("axios");

export default async function getGasPrice(chainId) {
    try {
        const { data } = await axios.get(
        `https://gas.api.infura.io/v3/c6f973393b1943528ef758d8a9e877ec/networks/${chainId}/suggestedGasFees`
        );
        return data;
    } catch (error) {
        console.error("Failed to fetch gas price:", error);
    }
}