import React from "react";

import { useState, useEffect, useContext } from "react";
import Web3AuthContext from "../Web3AuthContext";
import { Connection, PublicKey } from "@solana/web3.js";

const WalletBalance = () => {
  const { web3auth } = useContext(Web3AuthContext);
  const [balance, setBalance] = useState<number | null>(null);

  return (
    <div>
      <div className="mx-4 my-10 mt-20">
        <div className="bg-white shadow-lg rounded-lg h-40">
          <div className="p-4 text-center">
            <h2 className="text-gray-800 text-sm font-semibold mb-2">
              Wallet Balance
            </h2>
            <div />
            <p className="mt-2 text-xl text-buttoncolor font-bold">$ 30</p>
            <p className="mt-2 text-gray-600">592</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
