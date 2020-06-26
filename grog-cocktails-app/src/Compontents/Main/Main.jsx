import React from 'react'
import Home from '../Home/Home'
import SingleSearch from '../SingleSearch/SingleSearch'
import MultiSearch from '../MultiSearch/MultiSearch'
import Details from '../Details/Details'
import { Route, Switch, Redirect } from 'react-router-dom'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/byName" component={SingleSearch} />
                <Route path="/byIngredients" component={MultiSearch} />
                <Route path="/byGlass" component={SingleSearch} />
                <Route path="/details/:cocktail" component={Details} />
                <Route path="/random" render={() => <Redirect to='/details/randomName' />} />
                <Route path="*" render={() => <Redirect to='/' />} />
            </Switch>
        </main>
    )
}

export default Main