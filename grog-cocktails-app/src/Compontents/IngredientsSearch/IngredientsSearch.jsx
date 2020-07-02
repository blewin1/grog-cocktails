import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { getDrinksByIngredient, getDrink } from '../../theCocktailDB'
import Results from '../Results/Results';
import IngredientSearchTermIcon from '../IngredientSearchTermIcon/IngredientSearchTermIcon';
import { FlexWrapper } from '../Styles/Layout'

const IngredientsSearch = () => {

    const [drinks, setDrinks] = useState([]);
    const [filteredDrinks, setFilteredDrinks] = useState([])
    const [isFirstSearch, setIsFirstSearch] = useState(true);
    const [searchTerms, setSearchTerms] = useState([]);
    const [filterableIngredients, setFilterableIngredients] = useState([])
    const [searchValidation, setSearchValidation] = useState('');
    const [searchEnabled, setSearchEnabled] = useState(true);

    useEffect(()=> {
        if(filteredDrinks.length[0] === 0 && searchTerms.length !== 0) {
            setIsFirstSearch(true)
            setDrinks([])
        }
    },[filteredDrinks])

    useEffect(()=> {
        setIsFirstSearch(true)
    },[])

    useEffect(() => {
        
        
    },[searchTerms])

    const notFound = () => {
        setSearchValidation(`No drinks with ${searchTerms[0]}.`)
        const temp = searchTerms.slice(1);
        setSearchTerms(temp);
    }

    const getAllDrinks = async (list) => {
        const allDrinks = []
        for(let i = 0; i < list.length; i++) {
            allDrinks.push(await getDrink(list[i].id))
        }
        return allDrinks;
    }

    

    //takes in an array of full drink objects and returns an array the drinks that mach the most recent search term
    const filterDrink = (drinkList, searchTerm) => {
        if(drinkList.length === 0) {
            return drinkList;
        }
        const filtered = drinkList.filter(el => {
            const toReturn = el.ingredients.reduce((isFound, ingr) => {
                return (isFound || searchTerm === ingr.ingredient.toLowerCase());
            }, false)
            return toReturn
        })
        
        return filtered;
    }


    //takes an array of full drink objects and returns the set of all distinct ingredients
    const getAllIngredientsFromList = (list) => {
        const ingredients = [];
        for(let i = 0; i < list.length; i++) {
            ingredients.push(...list[i].ingredients.map(ingr => ingr.ingredient))
        }
        return [...new Set(ingredients)];
    }

    const handleSubmit = async (ingredient) => {
        let temp;
        if(isFirstSearch){
            const drinkList = await getDrinksByIngredient(ingredient)
            setDrinks(drinkList)

            setSearchTerms([ ingredient.toLowerCase(), ...searchTerms])
            setSearchEnabled(false);
            const fullDrinks = await getAllDrinks(drinkList)
            setFilterableIngredients([getAllIngredientsFromList(fullDrinks), ...filterableIngredients])
            setFilteredDrinks([fullDrinks])
            setIsFirstSearch(false)
            setSearchEnabled(true);
        } else {
            setSearchTerms([ ingredient.toLowerCase(), ...searchTerms])
            const tempFiltered = filterDrink(filteredDrinks[0], ingredient);
            setFilteredDrinks([tempFiltered, ...filteredDrinks])
        }
    }

    const removeTerm = () => {
        const tempTerms = searchTerms.slice(1);

        const tempFilteredDrinks = filteredDrinks.slice(1);
        setFilteredDrinks(tempFilteredDrinks)


        if(searchTerms.length === 1) {
            setIsFirstSearch(true);
            setDrinks([]);
        }
        
        setSearchTerms(tempTerms);
    }

    const placeholder = searchEnabled ? 
                            (isFirstSearch ? 
                                'Search by Ingredient' : 
                                "Additional Ingredient")
                            : "Please Wait...";

    return (
        <div className='multi-search'>
            <SearchBar enabled={searchEnabled} 
                      placeholder={placeholder}
                      handleSubmit={handleSubmit} />
            <FlexWrapper>
                {searchTerms.map((el, i) => <IngredientSearchTermIcon removable={i === 0 && searchEnabled}
                                                                      key={i}
                                                                      text={el}
                                                                      handleClick={removeTerm} /> )}
            </FlexWrapper>
            <Results results={filteredDrinks.length || !isFirstSearch  ? filteredDrinks[0] : drinks} />
        </div>
    )
}

export default IngredientsSearch
