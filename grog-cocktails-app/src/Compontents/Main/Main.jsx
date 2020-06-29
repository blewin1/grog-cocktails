import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import SingleSearch from '../SingleSearch/SingleSearch'
import MultiSearch from '../MultiSearch/MultiSearch'
import DrinkByID from '../DrinkByID/DrinkByID'
import RandomDrink from '../RandomDrink/RandomDrink'
import { getDrink, getDrinksByName } from '../../theCocktailDB'
import './main.scss'


const Main = () => {

    // const [selectedDrink, setSelectedDrink] = useState({});
    const [drinkList, setDrinkList] = useState([]);






    const handleNameSearch = async (name) => {
        const drinks = await getDrinksByName(name);
        setDrinkList(drinks);
    }


    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/byName" render={() => <SingleSearch title='Search by Name' handleSubmit={handleNameSearch} results={drinkList} />} />
                <Route path="/byIngredients" component={MultiSearch} />
                <Route path="/byGlass" render={() => <SingleSearch title='Search by Glass' handleSubmit={handleNameSearch} results={drinkList} />} />
                <Route path="/details/:id" component={DrinkByID} />
                <Route path="/random" component={RandomDrink} />
                <Route path="*" render={() => <Redirect to='/' />} />
            </Switch>
        </main>
    )
}

export default Main