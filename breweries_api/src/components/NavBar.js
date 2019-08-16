import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

    return (
        <div className = 'nav-bar'>
            <h1><NavLink to='/'>Open Breweries</NavLink></h1>
            <ul>
                <li><NavLink to ='breweries'>Breweries</NavLink></li>
                <li><NavLink to = 'favorites'>My Favorites</NavLink></li>            
            </ul>        
        </div>
    )
}
export default NavBar