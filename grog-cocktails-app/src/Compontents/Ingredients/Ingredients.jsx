import React from 'react'
import './ingredients.scss'

const Ingredients = ({ ingredients }) => {

    return (
        <div className="ingredients">
            {ingredients ? ingredients.map((el, i) => {
                return <span key={i}>{el.amount} {el.ingredient}</span>
            }) : ''}
        </div>
    )
}

export default Ingredients
