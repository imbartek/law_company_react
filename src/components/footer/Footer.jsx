import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { colors, shadows } from '../../utils/utils';
import { GoLocation } from 'react-icons/go';
import { AiFillPhone, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';

const FooterContainer = styled.footer`
    position: relative;
    bottom: 0;
    min-height: 10vh;
    padding: 10%;
    background-color: ${colors.darker};
    box-shadow: ${shadows.main_shadow};
    display: grid;
    gap: 30px;
    align-items: center;

    & a{
        text-decoration: none;
        color: white;
        display: flex;
        flex-flow: column;
        align-items: center;

        p{
            font-size: 0.75em;
        }
    }
    & span{
        text-align: center;
        color: ${colors.light}
    }
    & .socialMedia{
        display: flex;
        justify-content: space-evenly;
    }
    @media (min-width: 768px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
        ". . . .";
        padding: 3%;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <IconContext.Provider value={{ color: "#fff", size: "2em" }}>
                <a href="/location">
                    <GoLocation />
                    <p>Środa Śląska, ul. Malczycka 12-16 lok. 15</p>
                </a>
                <a href="tel:578 975 795">
                    <AiFillPhone />
                    578 975 795
                </a>
                <div className="socialMedia">
                    <ImFacebook />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                </div>
                <span class="hero">Made by im.bartek@tlen.pl</span>
            </IconContext.Provider>
        </FooterContainer>
    );
}

export default Footer;
