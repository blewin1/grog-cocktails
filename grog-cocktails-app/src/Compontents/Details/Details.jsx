import React, { useState, useEffect } from 'react'
import Ingredients from '../Ingredients/Ingredients'
import getDrink from '../../theCocktailDB'



const Details = (props) => {
    console.log('props',props)
    const [selectedDrink, setSelectedDrink] = useState({});

    useEffect( async () => {
        setSelectedDrink(await getDrink('random'))
        // props.history.replace({pathname: `/details/${selectedDrink.id}`})
    },[])

    return (
        <div className="details">
            <img src={selectedDrink.thumbnail} alt=""/>
            <h1>{selectedDrink.name}</h1>
            <Ingredients ingredients={selectedDrink.ingredients}/>
            <p>{selectedDrink.instructions}</p>
        </div>
    )
}

export default Details
