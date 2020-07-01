import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ImgLink = styled(Link)`
    
    height: 150px;
    width: 90%;
    max-width: 350px;
    margin: 10px;
    border-radius: 10px;
    font-size: 20px;
    background-color: darkslateblue;
    color: white;
    text-decoration: none;
    background-image: ${props => props.background};

`
export default ImgLink;
