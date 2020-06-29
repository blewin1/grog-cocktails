import React, { useState } from 'react'
import Home from '../Home/Home'
import SingleSearch from '../SingleSearch/SingleSearch'
import MultiSearch from '../MultiSearch/MultiSearch'
import Details from '../Details/Details'
import { Route, Switch, Redirect } from 'react-router-dom'
import './main.scss'

const apiBase = 'https://www.thecocktaildb.com/api/json/v1/1/';

const Main = () => {
    const [selectedDrink, setSelectedDrink] = useState({});

    //getDrink takes an id or the keywork 'random' and returns a drink object from the api
    const getDrink = async (id) => {
        let url = apiBase;
        if(id === 'random') {
            url += 'random.php';
        } else {
            url += 'lookup.php?i=' + id;
        }
        const res = await fetch(url);
        const data = await res.json();
        setSelectedDrink(data);
        console.log(data);
    }

    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/byName" component={SingleSearch} />
                <Route path="/byIngredients" component={MultiSearch} />
                <Route path="/byGlass" component={SingleSearch} />
                <Route path="/details/:cocktail" component={Details} />
                <Route path="/random" component={Details} />
                <Route path="*" render={() => <Redirect to='/' />} />
            </Switch>
        </main>
    )
}

export default Main