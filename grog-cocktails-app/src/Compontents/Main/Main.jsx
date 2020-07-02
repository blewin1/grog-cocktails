import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import SingleSearch from '../SingleSearch/SingleSearch'
import IngredientsSearch from '../IngredientsSearch/IngredientsSearch'
import DrinkByID from '../DrinkByID/DrinkByID'
import RandomDrink from '../RandomDrink/RandomDrink'
import './main.scss'


const Main = () => {


    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/byName" render={() => <SingleSearch title='Search by Name' type='name' />} />
                <Route path="/byIngredients" component={IngredientsSearch} />
                <Route path="/byGlass" render={() => <SingleSearch title='Search by Glass' type='glass' />} />
                <Route path="/details/:id" component={DrinkByID} />
                <Route path="/random" component={RandomDrink} />
                <Route path="*" render={() => <Redirect to='/' />} />
            </Switch>
        </main>
    )
}

export default Main