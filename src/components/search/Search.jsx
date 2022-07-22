import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './Search.css'

const Search = () => {
  return (
    <div className='searchLogo'>
        <img src={Logo} alt="sl Logo" />
        <div className='search'>
            <input type="text" placeholder='#SearchGames or #BetType' />
            <div className='s-icon'>
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default Search