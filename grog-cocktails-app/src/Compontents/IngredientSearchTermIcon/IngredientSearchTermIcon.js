import React from 'react'
import { FlexWrapper } from '../Styles/Layout'
import './ingredientSearchTermIcon.scss'

const IngredientSearchTermIcon = ({ removable=false, text, handleClick }) => {
    return (
        <FlexWrapper>
            <div className={`ingredient-icon ${removable ? 'removable' : ''}`}
                  onClick={removable ? handleClick : null}
            >
                <span>{text}</span>
                {removable ? <span className="close-icon">x </span> : ''}
                
            </div>
        </FlexWrapper>
    )
}

export default IngredientSearchTermIcon
