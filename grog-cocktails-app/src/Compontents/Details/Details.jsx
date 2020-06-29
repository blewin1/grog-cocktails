import React from 'react'
import Ingredients from '../Ingredients/Ingredients'
import './details.scss'


const Details = ({ drink }) => {


    return (
        <div className="details">
            <img src={drink.image} alt=""/>
            <div className="info">
                <h1>{drink.name}</h1>
                <Ingredients ingredients={drink.ingredients}/>
                <p>{drink.instructions}</p>
            </div>
        </div>
    )
}

export default Details
