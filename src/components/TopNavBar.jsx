import React from 'react'

const TopNavBar = () => {
  return (

    <div>
      <header className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center mb-16">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-6 w-6 mr-2" /> {/* Replace with your logo */}
        
      </div>
      <div>
        <p className="text-center text-sm font-semibold">Wallet Address</p>
      </div>
      <div className="w-6"></div> {/* Empty space for balance or other content */}
    </header>
    </div>

  )
}

export default TopNavBar