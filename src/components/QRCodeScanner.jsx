import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRCodeScanner = ({ onScanSuccess, onScanError }) => {
  useEffect(() => {
    const config = {
      qrbox: 200, 
    };

    const html5QrcodeScanner = new Html5QrcodeScanner(
      'qr-code-scanner', 
      config
    );

    html5QrcodeScanner.render(onScanSuccess, onScanError);

    return () => {
      html5QrcodeScanner.clear().catch(error => {
        console.error('Failed to clear html5QrcodeScanner:', error);
      });
    };
  }, [onScanSuccess, onScanError]);

  return <div id="qr-code-scanner" className="flex items-center justify-center bg-gray-100 rounded-lg mb-4"></div>;
};

export default QRCodeScanner;
