import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
const Home = () => {
  const loggedIn={firstName:'Jayadip',lastName:'Sahoo',email:'jayadip360@gmail.com'}  
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and Manage Acccounts and Transaction Efficiently"
                />
                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}/>
            </header>
            RECENT TRANSACTION
        </div>
        <RightSideBar user={loggedIn} transactions={[]}  banks={[{currentBalance:123.50},{currentBalance:500}]}/>
    </section>
  )
}

export default Home