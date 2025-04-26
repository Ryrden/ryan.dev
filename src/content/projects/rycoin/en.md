---
title: "RyCoin: Learning Blockchain with a Complete Project in Solidity, React, and Besu"
summary: "Practical development of a complete DApp to interact with the RyCoin token. Created with Solidity, deployed on a private Besu network, frontend in React, and MetaMask integration."
date: "Nov 13 2024"
draft: false
tags:
- Blockchain
- Solidity
- ReactJs
- MetaMask
- Besu
- Hardhat
repoUrl: https://github.com/Ryrden/RyCoin
lang: "en"
---


![Cover](https://i.imgur.com/uNAjgSV.png)

## 🌐 About the project

This project marks my first practical immersion in the **blockchain** ecosystem. The goal was to build a **complete DApp** for creating and interacting with the **RyCoin** token, using **Solidity** for the smart contract, **React** in the frontend, **Hardhat** for deployment automation, and a private blockchain network with **Hyperledger Besu**.

RyCoin allows functionalities such as:

- Minting new tokens
- Transferring between accounts
- Viewing balance connected to wallet
- Integration with MetaMask and use of local account

---

## 📊 Architecture and operation

The DApp was divided into two main domains:

- **Frontend**: Developed in React with `ethers.js`, responsible for connecting the user to the blockchain and displaying contract data.
- **Blockchain**: Implemented with Solidity, running on a private network based on **Besu P2P Network** with multiple nodes connected via genesis.json.

The diagram below summarizes the communication architecture between components:

![Project diagram](/image.png)

---

## 🛠️ How it was developed

### 🔹 Smart Contract

The RyCoin contract was built using **OpenZeppelin** as the ERC20 standard base. This ensured security and compatibility with tools like MetaMask and Hardhat. The contract allows controlled minting and transferring of tokens:

```solidity
function mint(address to, uint256 amount) public {
    _mint(to, amount);
}
```

### 🔹 Backend/Deploy

I used Hardhat to compile, test, and deploy the contract on a local Besu network. The deployment was fully scripted with ethers.js, and connecting to the network required manual configuration of the infrastructure (nodes, genesis file, miner, etc.).

### 🔹 Blockchain Network

I implemented three nodes using Hyperledger Besu. The nodes were connected in a peer-to-peer (P2P) network, simulating a decentralized private blockchain. Node1 acted as a bootnode.

### 🔹 Frontend React + ethers.js

The frontend was created with Vite + React + TypeScript. The integration with the contract was done with ethers.js, including connection with MetaMask, balance reading, and calls for mint and transfer.

---

## 🧠 Learnings

This project provided me with valuable learnings about the modern blockchain ecosystem:

- How the client/contract/blockchain architecture works
- Creating ERC20 tokens following best practices with OpenZeppelin
- Deployment and testing with Hardhat + Besu
- Connecting with wallets like MetaMask and interacting with the frontend via ethers.js
- Practical concepts of P2P networks, mining, and persistence with Genesis blocks

---

## 💡 Challenges faced

Some of the main challenges:

- Correctly configuring the Besu network with multiple nodes and maintaining synchronization
- Managing communication between nodes with enode and configuration files
- Debugging connection errors between frontend and contract
- Adjusting the contract and frontend for use with real wallets (MetaMask)