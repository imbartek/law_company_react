import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/utils';

const Nav = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.light};
    height: 10vh;
    padding: 0 5vw;
    color: ${colors.dark};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 2;
`
const Hamburger = styled.div`
    width: 50px;
    height: 40px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

    & .line{
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: ${colors.main};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    }
    & .line:nth-child(1) {
    top: 0px;
    }

    & .line:nth-child(2),
    & .line:nth-child(3) {
    top: 18px;
    }

    & .line:nth-child(4) {
    top: 36px;
    }

    &.open .line:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
    }

    &.open .line:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    }

    &.open .line:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    }

    &.open .line:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
    }
`

const Navigation = () => {

    const handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
    return (
        <Nav>
            <h1>Logo</h1>
            <Hamburger className="hamburger" onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </Hamburger>
        </Nav>
    );
}

export default Navigation;
