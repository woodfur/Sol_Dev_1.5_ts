import React from "react";
import SolanaRpc from "../solanaRPC";
import Web3AuthContext from "../Web3AuthContext";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { ParsedInstruction } from "@solana/web3.js";
import { useContext } from "react";

import { useState, useEffect } from "react";

const TransactionList: React.FC = () => {
  const { provider } = useContext(Web3AuthContext);
  const solanaRPC = new SolanaRpc(provider as SafeEventEmitterProvider);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [loading, setLoading] = useState(true);
  interface Transaction {
    sender: string;
    receiver: string;
    amount: string;
  }
  useEffect(() => {
    const fetchData = async () => {
      solanaRPC
        .getTransactionHistory()
        .then((txHistory) => {
          console.log(txHistory);
          if (txHistory) {
            const simplifiedTransactions = txHistory
              .filter((tx) => !!tx)
              .map((tx) => ({
                sender: (tx?.transaction.message.accountKeys[0]?.pubkey
                  .toBase58 || "N/A") as string,
                receiver: (tx?.transaction.message.accountKeys[1]?.pubkey
                  .toBase58 || "N/A") as string,
                amount: ((
                  tx?.transaction.message.instructions[0] as ParsedInstruction
                )?.parsed?.data?.amount || "N/A") as string,
              }));
            setTransactions([...simplifiedTransactions]);
            setLoading(false);
          }
          console.log(
            (
              txHistory[0]?.transaction.message
                .instructions[0] as ParsedInstruction
            ).parsed
          );
        })
        .catch((error) => {
          console.error("Error fetching transaction history:", error);
        });
    };
    fetchData();
  }, [provider]);

  const transactionItems = transactions?.map((tx, index) => (
    <li key={index} className="flex items-center">
      <i className="fas fa-exchange-alt text-gray-500 text-lg"></i>
      <div className="ml-3">
        <p className="text-gray-800 font-semibold">{tx.sender}</p>
        <p className="text-gray-800 font-semibold">{tx.receiver}</p>
        <p className="text-gray-600">Transfer</p>
      </div>
      <p className="ml-auto text-gray-600">{`-${tx.amount} USDC`}</p>
    </li>
  ));

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-4 my-10 mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 text-xl font-semibold">Transactions</h2>
          <a href="#" className="text-indigo-600 hover:underline">
            Show All
          </a>
        </div>
        <ul className="space-y-4">
          {" "}
          {loading ? <p>Loading...</p> : transactionItems}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
