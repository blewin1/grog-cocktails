import React from 'react'
import ImgLink from '../ImgLink/ImgLink'
import { FlexWrapper } from '../Styles/Layout'

const Home = () => {
    return (
        <FlexWrapper column>
            <ImgLink to="/byName">Find by Name</ImgLink>
            <ImgLink to="/byIngredients">Find by Ingredients</ImgLink>
            <ImgLink to="/random">Random Cocktail</ImgLink>
            <ImgLink to="/byGlass">Find by Glass</ImgLink>
        </FlexWrapper>
    )
}

export default Home
