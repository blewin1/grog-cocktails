import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Results from '../Results/Results'

const SingleSearch = ({ results, handleSubmit, title='' }) => {


    return (
        <div className='single-search'>
            <h2>{title}</h2>
            <SearchBar handleSubmit={handleSubmit} />
            <Results results={results} />
        </div>
    )
}

export default SingleSearch
