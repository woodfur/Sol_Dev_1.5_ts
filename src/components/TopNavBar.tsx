import React from "react";

import { useState, useEffect, useContext } from "react";
import Web3AuthContext from "../Web3AuthContext";
import { Connection, PublicKey } from "@solana/web3.js";
import SolanaRpc from "../solanaRPC";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { ParsedInstruction } from "@solana/web3.js";

const TopNavBar = () => {
  return (
    <div>
      <header className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center mb-16">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/1nG23t1/HandyPay.png"
            alt="Logo"
            className="h-6 w-6 mr-2"
          />
        </div>
        <div>
          <p className="text-center text-sm font-semibold">Welcome!</p>
        </div>
        <div className="w-6"></div>
      </header>
    </div>
  );
};

export default TopNavBar;
