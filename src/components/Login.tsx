import React from 'react'

//importing 









const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div> 
        <img src="src/assets/logo_place.png" alt="Logo" className="w-40 h-40 mt-10 rounded-full shadow-lg" />
        </div>
      
      <div className='gap-6'>
      <button className="mt-8 px-6 py-3 mx-9 bg-buttoncolor text-white rounded-md shadow-md">Login</button>
      <button className="mt-4 px-6 py-3 mx-9 bg-gray-300 text-gray-700 rounded-md shadow-md">Sign Up</button>
      </div>
      
    </div>
  )
}

export default Login;