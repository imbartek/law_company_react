import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { colors, shadows } from '../../utils/utils';
import Content from "../content";
import News from '../news/News';
import Team from '../team/Team';

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
            height: 25%;
            line-height: 12vh;
            box-shadow: ${shadows.main_shadow};
        }
    }
`

const Menu = () => {

    const closeMenu = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }

    return (
        <Router>
            <MenuContainer className="menu">
                <ul>
                    <li><Link to="/" onClick={closeMenu}>O KANCELARII</Link></li>
                    <li><Link to="/news" onClick={closeMenu}>AKTUALNOŚCI</Link></li>
                    <li><Link to="/team" onClick={closeMenu}>ZESPÓŁ</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>KONTAKT</Link></li>
                </ul>
            </MenuContainer>
            <Switch>
                <Route exact path="/" component={Content}/>
                <Route path="/news" component={News}/>
                <Route path="/team" component={Team}/>
                <Route path="/contact"/>
            </Switch>
        </Router>
    );
}

export default Menu;
