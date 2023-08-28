import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import QRCodeScanner from './QRCodeScanner';



const Payscan = () => {

  const handleScanResult = (decodedText, decodedResult) => {
    console.log('Scanned QR Code:', decodedText);
    // Handle the scanned QR code result as needed
  };

  return (

<div className='flex flex-col h-screen overflow-y-scroll'>

  <div className="p-4 flex flex-col h-screen overflow-y-scroll">
     
      
          

     
      <div className="flex items-center justify-center bg-gray-100 h-64 rounded-lg mb-4">
      <QRCodeScanner fps={10}
                qrbox={250}
                disableFlip={false} onScanResult={handleScanResult} />
      </div>

      
      

     
      <div className="flex justify-center">
        <button
          className="bg-buttoncolor text-white px-4 py-2 rounded-lg shadow-md">
          Pay
        </button>
      </div>

  
      
      <hr className="border-t border-gray-300 my-4 shadow-inner" />


    <div className="bg-white shadow-md rounded-md p-4 mt-10 mx-4 flex items-center">
        
         
          <div className="bg-indigo-100 text-buttoncolor rounded-full p-3 mr-3">
            <i className="fas fa-hashtag text-lg"></i>
          </div>
          <div>
          
            <h4 className="text-gray-800 font-semibold">Enter Merchant Code</h4>
            
         
        </div>
      </div>


      
      

      <div className="bg-white shadow-md rounded-md p-4 mt-4 mx-4 my-10">
        <div className="flex items-center">
          
          <div className="bg-indigo-100 text-buttoncolor rounded-full p-3 mr-3">
            <i className="fas fa-plug text-lg"></i>
          </div>
          <div>
           
            <h4 className="text-gray-800 font-semibold">Essential Services</h4>
           
          </div>
        </div>  
      </div>

        
    </div></div>
  )
}

export default Payscan;