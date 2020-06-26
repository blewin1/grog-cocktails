import React from 'react'
import ImgButton from '../ImgButton/ImgButton'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/byName"><ImgButton text="Find by Name" /></Link>
            <Link to="/byIngredients"><ImgButton text="Find by Ingredients" /></Link>
            <Link to="/random"><ImgButton text="Random Cocktail" /></Link>
            <Link to="/byGlass"><ImgButton text="Find by Glass" /></Link>
        </div>
    )
}

export default Home
