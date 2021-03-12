import React from 'react';
import styled from 'styled-components';
import { colors, shadows } from '../../utils/utils';

const MenuContainer = styled.div`
    height: 50vh;
    width: 100vw;
    background-color: black;
    position: fixed;
    top: -50vh;
    left: 0;
    z-index:1;
    transition: 1s;
    display: flex;
    align-items: center;
    box-shadow: ${shadows.main_shadow};

    & ul{
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        background-color: ${colors.main};

        li{
            color: white;
            list-style: none;
            font-size: 2em;
            text-align: center;
        } 
    }
`

const Menu = () => {
    return (
        <MenuContainer className="menu">
            <ul>
                <li>O KANCELARII</li>
                <li>AKTUALNOŚCI</li>
                <li>ZESPÓŁ</li>
                <li>KONTAKT</li>
            </ul>
        </MenuContainer>
    );
}

export default Menu;
