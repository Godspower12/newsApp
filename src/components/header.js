import React from 'react';
import Cnn from "../images/cnn.jpg" 
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderImg>
            <Link to ='/'><img src={Cnn} alt="cnnLogo" /></Link>
        </HeaderImg>
    )
};


const HeaderImg = styled.div`
background: purple;
img {
    width: 100%;
    height: 20vh;
    max-width: 20%;
    overflow: hidden;
    
    /* Ipad screen */
    @media(max-width: 820px) {
        
        height: 10vh;
            max-width: 30%;
        }
    
        /* mobile screen */
        @media(max-width: 390px) {
        height: 10vh;
            max-width: 30%;
        }
        @media(max-width: 414px) {
        height: 7vh;
            max-width: 30%;
        }
}
`; 

export default Header
