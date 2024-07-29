// server.js
const express = require("express");
const deployContract = require("./deploy");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Define API endpoint for deploying contract
app.post("/api/deploy", async (req, res) => {
  const { features, address, name, symbol, premint, chain } = req.body;

  try {
    const contractAddress = await deployContract(
      features,
      address,
      name,
      symbol,
      premint,
      chain
    );
    res.json({ address: contractAddress });
  } catch (error) {
    res.status(500).json({ error: `Error deploying contract: ${error}` });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

