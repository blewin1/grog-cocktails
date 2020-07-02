import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

const Menu = ({ horizontal=false, menuItems, handleClick }) => {
    return (
        <div className={`menu ${ horizontal ? 'horizontal' : 'vertical'}`}  onClick={handleClick}>
            {menuItems.map((el, i) => {
                return <Link key={i} to={el.path}>{el.text}</Link>
            })}
        </div>
    )
}

export default Menu
