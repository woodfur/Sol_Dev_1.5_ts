import React from "react";
import Navbar from "../components/Navbar";

const Transfer = () => {
  return (
    <div className="p-4">
      {/* Search Bar */}

      <div className="mb-6">
        To:{" "}
        <input
          type="text"
          placeholder="Enter Email Address/Phone no."
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      {/* Space */}
      <div className="h-32"></div>
      {/* Next Button */}
      <div className="text-center">
        <button className="bg-buttoncolor text-white px-4 py-2 rounded-md">
          Next
        </button>
      </div>
      <hr className="border-t border-gray-300 my-4 shadow-inner" />
      <div className="bg-white shadow-md rounded-md p-4 mt-10 mx-4 flex items-center">
        <div className="bg-indigo-100 text-buttoncolor rounded-full p-3 mr-3">
          <i className="fas fa-link text-lg"></i>
        </div>
        <div>
          <h4 className="text-gray-800 font-semibold">Send Via Link</h4>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Transfer;
