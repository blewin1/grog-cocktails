import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

const SingleSearch = ({ results, handleSubmit, title='Search by Name' }) => {


    return (
        <div className='single-search'>
            <h2>{title}</h2>
            <SearchBar handleSubmit={handleSubmit} />
            <div className="results">
                {results.length ? results.map((el, i) => {
                    return (
                        <Link key={i} className="result" to ={`/details/${el.id}`} >
                            <h3>{el.name}</h3>
                            <img src={el.thumbnail} alt=""/>
                        </Link>)
                }) : ''}
            </div>
        </div>
    )
}

export default SingleSearch
