import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

const Menu = ({ menuItems, handleClick }) => {
    return (
        <div className="menu"  onClick={handleClick}>
            {menuItems.map((el, i) => {
                return <Link key={i} to={el.path}>{el.text}</Link>
            })}
        </div>
    )
}

export default Menu
