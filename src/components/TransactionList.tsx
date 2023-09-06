import React from "react";

const TransactionList = () => {
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
          <li className="flex items-center">
            <i className="fas fa-exchange-alt text-gray-500 text-lg"></i>
            <div className="ml-3">
              <p className="text-gray-800 font-semibold">Placeholder</p>
              <p className="text-gray-600">Transfer</p>
            </div>
            <p className="ml-auto text-gray-600">-500 USDC</p>
          </li>
          <li className="flex items-center">
            <i className="fas fa-exchange-alt text-gray-500 text-lg"></i>
            <div className="ml-3">
              <p className="text-gray-800 font-semibold">Placeholder</p>
              <p className="text-gray-600">Deposit</p>
            </div>

            <p className="ml-auto text-gray-600">+300 USDC</p>
          </li>
          {/* Add more transaction items */}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
