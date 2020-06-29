import React from 'react'
import { Link } from 'react-router-dom'
import './results.scss'


const Results = ({ results }) => {
    return (
        <div className="results">
            {results.length ? results.map((el, i) => {
                return (
                    <Link key={i} className="result" to ={`/details/${el.id}`} >
                        <img src={el.thumbnail} alt=""/>
                        <h3>{el.name}</h3>
                    </Link>)
            }) : ''}
        </div>
    )
}

export default Results
