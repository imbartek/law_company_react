import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { colors, shadows } from '../../utils/utils';
import Content from "../content";

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
    return (
        <Router>
            <MenuContainer className="menu">
                <ul>
                    <li><Link to="/">O KANCELARII</Link></li>
                    <li><Link to="/news">AKTUALNOŚCI</Link></li>
                    <li><Link to="/team">ZESPÓŁ</Link></li>
                    <li><Link to="/contact">KONTAKT</Link></li>
                </ul>
            </MenuContainer>
            <Switch>
                <Route exact path="/">
                    <Content />
                </Route>
                <Route path="/news">news</Route>
                <Route path="/team">team</Route>
                <Route path="/contact">contact</Route>
            </Switch>
        </Router>
    );
}

export default Menu;
