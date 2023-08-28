import React from 'react'
import Navbar from '../components/Navbar'
import WalletBalance from '../components/WalletBalance'
import Operations from '../components/Operations'
import TopNavBar from '../components/TopNavBar'
import TransactionList from '../components/TransactionList'


const Home = () => {
  return (
    <div>
        <div>
            <div className='flex center'> 
                <TopNavBar />
                
            </div>
            <div className="mt-16"/> 
            
            <div className='mt-10'> 
                 <WalletBalance />
            </div>
           
            <div>
                <Operations />
            </div>

            <div>
                <TransactionList />
            </div>
            

            <Navbar />

            
        </div>
        
    </div>
  )
}

export default Home


