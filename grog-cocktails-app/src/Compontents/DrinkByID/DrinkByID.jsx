import React, { useState, useEffect } from 'react'
import Details from '../Details/Details'
import { getDrink } from '../../theCocktailDB'


const DrinkByID = ({ match }) => {

    const [selectedDrink, setSelectedDrink] = useState({});

    useEffect( () => {
        const setDrink = async () => {
            setSelectedDrink(await getDrink( match.params.id))
        }
        setDrink();
    },[])

    return (
        <div className="random-drink">
            <Details drink={selectedDrink} />
        </div>
    )
}

export default DrinkByID
