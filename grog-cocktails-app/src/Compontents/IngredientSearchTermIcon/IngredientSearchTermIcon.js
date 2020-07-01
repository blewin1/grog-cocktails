import React from 'react'
import { FlexWrapper } from '../Styles/Layout'
import './ingredientSearchTermIcon.scss'

const IngredientSearchTermIcon = ({ first=false, text, handleClick }) => {
    return (
        <FlexWrapper>
            <div className='ingredient-icon' onClick={first ? handleClick : null}>
                {first ? <button>X</button> : ''}
                <span>{text}</span>
            </div>
        </FlexWrapper>
    )
}

export default IngredientSearchTermIcon
