import React, { useState } from 'react';

const History_DynamicTabView = () => {
  const [activeTab, setActiveTab] = useState('transfers'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <div className="p-4">
      <div className="flex flex-col justify-between items-center mb-4">
        <h2 className="text-gray-800 text-sm font-semibold">Wallet History</h2>
      </div>
      
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleTabClick('deposits')}
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'deposits' ? 'bg-buttoncolor text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Deposits
        </button>
        <button
          onClick={() => handleTabClick('transfers')}
          className={`mx-2 px-4 py-2 rounded ${
            activeTab === 'transfers' ? 'bg-buttoncolor text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Transfers
        </button>
        <button
          onClick={() => handleTabClick('payments')}
          className={`ml-2 px-4 py-2 rounded ${
            activeTab === 'payments' ? 'bg-buttoncolor text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Payments
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        
        <button className="mx-2 px-6 py-2 rounded bg-gray-800 text-white">
          Filter
        </button>
        
        <div className="flex-grow">
          <input
            type="text"
            className="w-full max-w-md border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="Search transactions..."
          />
        </div>
      </div>



      <div className="bg-white shadow-lg rounded-lg p-4">
        
        {activeTab === 'deposits' && (
          <div>
            <p>Deposits Placeholder</p>
            
          </div>
        )}
        {activeTab === 'transfers' && (
          <div>
            <p>Transfers Placeholder</p>
            
          </div>
        )}
        {activeTab === 'payments' && (
          <div>
            <p>Payments Placeholder</p>
            
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default History_DynamicTabView;
