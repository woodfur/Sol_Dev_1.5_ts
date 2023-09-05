import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import SolanaRpc from "../solanaRPC";
import Web3AuthContext from "../Web3AuthContext";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { ParsedInstruction } from "@solana/web3.js";

const Transfer = () => {
  const { provider } = useContext(Web3AuthContext);
  const solanaRPC = new SolanaRpc(provider as SafeEventEmitterProvider);

  solanaRPC.getTransactionHistory().then((txHistory) => {
    console.log(txHistory);

    console.log(
      (txHistory[0]?.transaction.message.instructions[0] as ParsedInstruction)
        .parsed.info
    );
  });

  solanaRPC.getBalance().then((amount) => {
    console.log(amount);
  });

  solanaRPC
    .sendTransaction(0.05, "5r5xZQRTepo52fJvZGJyRATFZCxynbqhG7GQ4wAWP8c1")
    .then((txSig) => {
      console.log(txSig);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div className="p-4">
      <div className="mb-6">
        To:{" "}
        <input
          type="text"
          placeholder="Enter Email Address/Phone no."
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="h-32"></div>

      <div className="text-center">
        <button className="bg-buttoncolor text-white px-4 py-2 rounded-md">
          Next
        </button>
      </div>
      <hr className="border-t border-gray-300 my-4 shadow-inner" />
      <div className="bg-white shadow-md rounded-md p-4 mt-10 mx-4 flex items-center">
        <div className="bg-indigo-100 text-buttoncolor rounded-full p-3 mr-3">
          <i className="fas fa-link text-lg"></i>
        </div>
        <div>
          <h4 className="text-gray-800 font-semibold">Send Via Link</h4>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Transfer;
