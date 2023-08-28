import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

const Operations = () => {
  return (
    <div>
      <div className="max-w-md mx-4 my-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">

        <div className="grid grid-cols-3 gap-4">
          <button className="bg-buttoncolor  text-white px-4 py-2 rounded-lg">
            Deposit
          </button>
          <button className="bg-buttoncolor  text-white px-4 py-2 rounded-lg">
            Pay
          </button>
          <button className="bg-buttoncolor  text-white px-4 py-2 rounded-lg">
          <Link to="/Land">Send</Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Operations