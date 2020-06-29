import React, { useState } from 'react'
import Menu from '../Menu/Menu'

import { Link } from 'react-router-dom'
import './nav.scss'
import Hamburger from '../Hamburger/Hamburger'

const Nav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const menuItems = [
        { path: "/byName", text: "Find by Name"},
        { path: "/byIngredients", text: "Find by Ingredients"},
        { path: "/random", text: "Random Coctail"},
        { path: "/byGlass", text: "Find by Glass"}
    ]

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    return (
        <header>
            <nav>
                <Link to="/"><h1 id='site-title'>Grog</h1></Link>
                <Hamburger handleClick={toggleMenu} />
            </nav>
            {menuIsOpen ? <Menu menuItems={menuItems} handleClick={closeMenu}/> : ''}
        </header>
    )
}

export default Nav
