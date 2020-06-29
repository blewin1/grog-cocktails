import React from 'react'
import './hamburger.scss'

const Hamburger = ({ handleClick }) => {
    return (
        <div className="hamburger-icon" onClick={handleClick} >
            <div className="patty"></div>
            <div className="patty"></div>
            <div className="patty"></div>
        </div>
    )
}

export default Hamburger
