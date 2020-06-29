import React from 'react'
import './ingredients.scss'

const Ingredients = ({ ingredients }) => {
    console.log('ingredients',ingredients)
    return (
        <div className="ingredients">
            {ingredients ? ingredients.map((el, i) => {
                return <span>{el.amount} {el.ingredient}</span>
            }) : ''}
        </div>
    )
}

export default Ingredients
