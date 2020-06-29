import React, { useState, useEffect } from 'react'
import Details from '../Details/Details'
import { getDrink } from '../../theCocktailDB'


const RandomDrink = () => {

    const [selectedDrink, setSelectedDrink] = useState({});

    useEffect( () => {
        const setDrink = async () => {
            setSelectedDrink(await getDrink('random'))
        }
        setDrink();
    },[])

    return (
        <div className="random-drink">
            <Details drink={selectedDrink} />
        </div>
    )
}

export default RandomDrink
