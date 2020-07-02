import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ImgLink = styled(Link)`
    
    height: 150px;
    width: 90%;
    max-width: 350px;
    margin: 10px;
    border-radius: 10px;
    font-size: 24px;
    font-weight: bold;
    background-color: #27033a;
    color: #CCD0B2;
    text-decoration: none;
    background-image: url(${props => props.background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        background-color: rgba(13, 1, 19, .6);
        padding: .3em;
        border-radius: 5px;
    }
`
export default ImgLink;
