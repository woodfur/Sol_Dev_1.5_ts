import React from 'react'
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  return (
    <div>
      
        <h2 className="my-2 flex flex-col text-center text-gray-800 text-sm font-semibold">My Account</h2>

        <UserProfile />

        <Navbar />
    </div>
  )
}

export default Profile;