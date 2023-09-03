import React from "react";

//importing
import Web3AuthContext from "../Web3AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import handpayimage from "../assets/HandyPay.png";

const Login = () => {
  const { login, web3auth, setLoggedIn } = useContext(Web3AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
      navigate("/home");
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src={handpayimage}
        alt="Logo"
        className="w-40 h-40 mt-10 rounded-full shadow-lg"
      />

      <div className="gap-6">
        <button
          onClick={handleLogin}
          className="mt-8 px-6 py-3 mx-9 bg-buttoncolor text-white rounded-md shadow-md"
        >
          Login
        </button>
        <button className="mt-4 px-6 py-3 mx-9 bg-gray-300 text-gray-700 rounded-md shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
