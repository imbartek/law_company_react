import React from 'react';
import styled from 'styled-components';
import {shadows} from '../../utils/utils';

const PersonContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 40%;
    height: 685px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${shadows.main_shadow};

    & > p, & > h1, & > h3{
        margin: 6px;
    }

    @media(max-width: 786px){
        width: 90%;
        height: 100%;
    }

`

export default function Person(props) {
    return (
        <PersonContainer>
            <img src={props.photo} alt="third_photo" />
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.first_desc}</p>
            <p>{props.second_desc}</p>
            <p>poczta@maleckancelaria.pl</p>
            <p>{props.phone}</p>
        </PersonContainer>
    )
}
