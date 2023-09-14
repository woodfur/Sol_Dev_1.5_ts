import React from "react";
import Web3AuthContext from "../Web3AuthContext";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Connection, PublicKey } from "@solana/web3.js";
import SolanaRpc from "../solanaRPC";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { ParsedInstruction } from "@solana/web3.js";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const { web3auth } = useContext(Web3AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (web3auth) {
      await web3auth.logout();
      navigate("/login", { replace: true });
    }
  };

  const [address, setAddress] = useState<string>("");
  const { provider } = useContext(Web3AuthContext);
  const solanaRPC = new SolanaRpc(provider as SafeEventEmitterProvider);

  useEffect(() => {
    solanaRPC.getAccounts().then((PublicKey) => {
      const Pubaddress = PublicKey.join(", ");
      setAddress(Pubaddress);
      console.log(PublicKey);
    });
  });

  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center mb-4">
          <i className="fas fa-user text-sm text-buttoncolor mr-3"></i>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">UserName</h3>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope text-sm text-gray-600 mr-2"></i>
            <div>
              <p className="text-gray-800 font-semibold text-sm">
                EmailPlaceHolder
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone-alt text-sm text-gray-600 mr-2"></i>
            <div>
              <p className="text-gray-800 font-semibold text-sm">
                PhoneNo. Placeholder
              </p>
            </div>
          </div>
          <br />
          <div className="flex items-center max-w-screen">
            <i className="fa-solid fa-file-powerpoint text-sm text-gray-600 mr-2"></i>
            <div>
              <div />{" "}
              <div>
                <button
                  className="bg-buttoncolor text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                    alert("Public key copied");
                  }}
                >
                  Public Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 mt-10 mx-4">
        <div className="flex items-center">
          <div className="bg-indigo-100 text-buttoncolor rounded-full p-3 mr-3">
            <i className="fas fa-suitcase text-lg"></i>
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold">Wallet Management</h4>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 mt-4 mx-4 my-10">
        <div className="flex items-center">
          <div className="bg-indigo-100 text-buttoncolor rounded-full p-3 mr-3">
            <i className="fas fa-shield text-lg"></i>
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold">Change Password</h4>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-inner rounded-md p-4 mt-1" />
      <h4 className="text-gray-800 font-semibold mx-3">Help & Support</h4>
      <div className="mt-3">
        <div className="flex items-center mb-2">
          <div className=" text-buttoncolor  p-2 mr-0 mx-2">
            <i className="fas fa-phone-alt text-sm"></i>
          </div>
          <div>
            <h5 className="text-gray-700 font-semibold text-sm">Contact Us</h5>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="text-buttoncolor  p-2 mx-2">
            <i className="fas fa-share-alt text-sm"></i>
          </div>
          <div>
            <h5 className="text-gray-700 font-semibold">Share</h5>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="text-buttoncolor p-2  mx-2">
            <i className="fas fa-info-circle text-sm"></i>
          </div>
          <div>
            <h5 className="text-gray-700 font-semibold">About</h5>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="mx-auto">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Logout!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
