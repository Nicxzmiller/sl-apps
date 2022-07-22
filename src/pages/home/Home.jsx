import React from 'react'
import Games from '../../components/games/Games'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <div className='gameType'>
            <Games/>
        </div>
        <div className='container'>Description</div>
        <div className='right'>Right</div>
    </div>
  )
}

export default Home