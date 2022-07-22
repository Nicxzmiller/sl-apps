import React from 'react'
import Blackjack from '../../pages/blackjack/Blackjack'
import Roulette from '../../pages/roulette/Roulette'
import GameCard from '../GameCard/GameCard'
import Search from '../search/Search'

const Games = () => {
  return (
    <div className='games'>
        <Search/>
        <GameCard/>
    </div>
  )
}

export default Games