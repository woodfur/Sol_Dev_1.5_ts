import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex flex-col h-screen overflow-y-scroll'>
        
        <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center mb-4">
         
          <i className="fas fa-user text-sm text-buttoncolor mr-3"></i>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Tim.io</h3>
    
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
          
            <i className="fas fa-envelope text-sm text-gray-600 mr-2"></i>
            <div>
              <p className="text-gray-800 font-semibold text-sm">williamstimothy016@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            
            <i className="fas fa-phone-alt text-sm text-gray-600 mr-2"></i>
            <div>
              <p className="text-gray-800 font-semibold text-sm">+232 79 359 655</p>
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
        

      <div className="bg-white shadow-inner rounded-md p-4 mt-1"/>
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
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">
            Logout!
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default UserProfile