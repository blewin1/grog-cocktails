import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Results from '../Results/Results'

const SingleSearch = ({ results, handleSubmit, title='' }) => {


    return (
        <div className='single-search'>
            <SearchBar handleSubmit={handleSubmit} placeholder={title} />
            <Results results={results} />
        </div>
    )
}

export default SingleSearch
