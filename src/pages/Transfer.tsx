import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import SolanaRpc from "../solanaRPC";
import Web3AuthContext from "../Web3AuthContext";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { ParsedInstruction } from "@solana/web3.js";

import { useState, useEffect } from "react";

const Transfer = () => {
  const { provider } = useContext(Web3AuthContext);
  const solanaRPC = new SolanaRpc(provider as SafeEventEmitterProvider);

  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    solanaRPC.getBalance().then((amount) => {
      setBalance(parseInt(amount));
      console.log(amount);
    });
  });

  function SendTransaction(
    event: React.SyntheticEvent<HTMLFormElement>,
    address: string,
    setAddress: (address: string) => void,
    amount: number,
    setAmount: (amount: number) => void
  ) {
    event.preventDefault();

    if (balance / 1000000000 > amount) {
      solanaRPC
        .sendTransaction(amount, address)
        .then((txSig) => {
          console.log(txSig);
          alert("Transfer successful");
        })
        .catch((err) => {
          console.error(err);
          alert("Transaction failed");
        });
    } else {
      alert("Not sufficient balance");
    }
  }
  return (
    <div className="p-4">
      <div className="mb-6">
        To:{" "}
        <form
          onSubmit={(e) =>
            SendTransaction(e, address, setAddress, amount, setAmount)
          }
        >
          <label>
            Address:
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </label>
          <br />
          <div className="h-32"></div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-buttoncolor text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </form>
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
