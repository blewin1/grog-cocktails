import React, { useState, useEffect } from 'react'
import Ingredients from '../Ingredients/Ingredients'
import getDrink from '../../theCocktailDB'



const Details = ({ drink }) => {
    // console.log('props',props)
    // const [selectedDrink, setSelectedDrink] = useState({});

    // useEffect( () => {
    //     const setDrink = async () => {
    //         setSelectedDrink(await getDrink('random'))
    //     }
    //     setDrink();
    //     // props.history.replace({pathname: `/details/${selectedDrink.id}`})
    // },[])

    return (
        <div className="details">
            <img src={drink.thumbnail} alt=""/>
            <h1>{drink.name}</h1>
            <Ingredients ingredients={drink.ingredients}/>
            <p>{drink.instructions}</p>
        </div>
    )
}

export default Details
