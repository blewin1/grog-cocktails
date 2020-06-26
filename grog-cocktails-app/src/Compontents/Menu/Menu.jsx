import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/byName">Find by Name</Link>
            <Link to="/byIngredients">Find by Ingredients</Link>
            <Link to="/random">Random Cocktail</Link>
            <Link to="/byGlass">Find by Glass</Link>
        </div>
    )
}

export default Menu
