import React from 'react'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
    return (
        <nav>
            
            <Link to="/"><h1 id='site-title'>Grog</h1></Link>
            <Menu />
        </nav>
    )
}

export default Nav
