import React , { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Results from '../Results/Results'
import { getDrinksByGlass, getDrinksByName } from '../../theCocktailDB'

const SingleSearch = ({ type, title='' }) => {

    // const [selectedDrink, setSelectedDrink] = useState({});
    const [drinkList, setDrinkList] = useState([]);
    const [searchType, setSearchType] = useState('')


    useEffect(() => {
        if(type !== searchType){
            setDrinkList([])
            setSearchType(type)
        }
    },[type])

    useEffect(() => {
        setSearchType(type)
    },[])


    const handleGlassSearch = async (name) => {
        const drinks = await getDrinksByGlass(name);
        setDrinkList(drinks);
    }

    const handleNameSearch = async (name) => {
        const drinks = await getDrinksByName(name);
        setDrinkList(drinks);
    }
    
    let handleSubmit;
    if(type === 'name') {
        handleSubmit = handleNameSearch;
    } else if(type === 'glass') {
        handleSubmit = handleGlassSearch;
    }

    return (
        <div className='single-search'>
            <SearchBar handleSubmit={handleSubmit} placeholder={title} />
            <Results results={drinkList} />
        </div>
    )
}

export default SingleSearch
