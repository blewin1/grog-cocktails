import React from 'react'
import { FlexWrapper } from '../Styles/Layout'
import './ingredientSearchTermIcon.scss'

const IngredientSearchTermIcon = ({ removable=false, text, handleClick }) => {
    return (
        <FlexWrapper>
            <div className='ingredient-icon' onClick={removable ? handleClick : null}>
                {removable ? <span>X </span> : ''}
                <span>{text}</span>
            </div>
        </FlexWrapper>
    )
}

export default IngredientSearchTermIcon
