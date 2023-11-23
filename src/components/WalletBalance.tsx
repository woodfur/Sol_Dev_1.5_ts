import React from "react";

import { useState, useEffect, useContext } from "react";
import Web3AuthContext from "../Web3AuthContext";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import SolanaRpc from "../solanaRPC";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { ParsedInstruction } from "@solana/web3.js";

const WalletBalance = () => {
  const { web3auth } = useContext(Web3AuthContext);
  const [balance, setBalance] = useState<number>(0);
  const { provider } = useContext(Web3AuthContext);
  const solanaRPC = new SolanaRpc(provider as SafeEventEmitterProvider);

  const [exchangeRate, setExchangeRate] = useState<number>(0);

  fetch("https://api.exchangerate.host/latest?base=SLL&symbols=USD")
    .then((response) => response.json())
    .then((data) => {
      setExchangeRate(data.rates.USD);
      console.log(exchangeRate);
    })
    .catch((error) => {
      console.error(error);
    });

  useEffect(() => {
    solanaRPC.getBalance().then((amount) => {
      setBalance(parseInt(amount));
      console.log(amount);
    });
  });

  const formatedbalance = balance / LAMPORTS_PER_SOL;
  return (
    <div>
      <div className="mx-4 my-10 mt-20">
        <div className="bg-white shadow-lg rounded-lg h-40">
          <div className="p-4 text-center">
            <h2 className="text-gray-800 text-sm font-semibold mb-2">
              Wallet Balance
            </h2>
            <div />
            <p className="mt-2 text-xl text-buttoncolor font-bold">
              $ {formatedbalance}
            </p>
            <p className="mt-2 text-gray-600">
              {" "}
              Le {(formatedbalance * exchangeRate).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
