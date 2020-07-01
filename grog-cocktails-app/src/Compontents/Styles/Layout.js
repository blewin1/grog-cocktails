import React from 'react'
import styled from 'styled-components'

export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.column ? 'flex-direction: column' : ''}
`
