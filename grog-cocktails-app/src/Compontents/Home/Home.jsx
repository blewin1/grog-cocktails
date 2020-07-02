import React from 'react'
import ImgLink from '../ImgLink/ImgLink'
import { FlexWrapper } from '../Styles/Layout'
import random from '../../random.jpg'
import name from '../../name.jpg'
import ingredients from '../../ingredients.jpg'
import glass from '../../glass.jpg'

const Home = () => {
    return (
        <FlexWrapper column>
            <ImgLink to="/byName" background={name}><h3>Find by Name</h3></ImgLink>
            <ImgLink to="/byIngredients" background={ingredients}><h3>Find by Ingredients</h3></ImgLink>
            <ImgLink to="/random" background={random}><h3>Random Cocktail</h3></ImgLink>
            <ImgLink to="/byGlass" background={glass}><h3>Find by Glass</h3></ImgLink>
        </FlexWrapper>
    )
}

export default Home