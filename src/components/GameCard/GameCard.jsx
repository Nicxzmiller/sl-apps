import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './GameCard.css'

const GameCard = () => {
  return (
    <div className='gameCard'>
        <div className='gameImages'>
          <img src={Cover} alt="" />
          <img src={Profile} alt="" />
        </div>

        <div className='gameName'>
          <span>BLACKJACK</span>
          <span>American BlackJack</span>
        </div>

        <div className='gameStatus'>
          <hr />
          <div>
            <div className='bets'>
              <span>10</span>
              <span>Bet Types</span>
            </div>
            <div className='vl'></div>
            <div className='bets'>
              <span>12</span>
              <span>Side Bets</span>
            </div>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default GameCard