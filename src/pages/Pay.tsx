import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
/*import QRCodeScanner from "../components/QRCodeScanner";*/
import SearchAdress from "../components/SearchAdress";
import Payscan from "../components/Payscan";

const Pay = () => {
  /*
  const handleScanResult = (decodedText, decodedResult) => {
    console.log('Scanned QR Code:', decodedText);
    // Handle the scanned QR code result as needed
  };*/

  return (
    <div>
      <h2 className="my-2 flex flex-col text-center text-gray-800 text-sm font-semibold">
        Pay
      </h2>

      <Payscan />

      <Navbar />
    </div>
  );
};

export default Pay;
