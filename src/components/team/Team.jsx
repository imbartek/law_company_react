import React from 'react'
import Person from '../person/Person';
import styled from 'styled-components';
import { photos } from '../../utils/utils';

const TeamContainer = styled.div`
    position: relative;
    top: 10vh;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: 100vh;
    padding: 3vh 10vw;

    @media(max-width: 786px){
        flex-flow: column;
        padding: 3vh 0;
        gap: 5vh;
        margin-bottom: 10vh;
    }

`

export default function Team() {
    return (
        <TeamContainer>
            <Person
                photo = {photos[5]}
                title = "Tomasz Pawlak"
                subtitle = "Radca prawny"
                first_desc = "Absolwent wydziału Prawa i Administracji Uniwersytetu Adama Mickiewicza w Poznaniu. Od 2014 r. Członek OIRP Poznań, a następnie od 2018 r. OIRP Wrocław. Doświadczenie zawodowe zdobywał już od czasów studenckich w renomowanych kancelariach adwokacko-radcowskich w Poznaniu."
                second_desc = "Współpracuje z Kancelarią od lipca 2018 r. Zajmuje się obsługą podmiotów gospodarczych. Jest mistrzem Polski radców prawnych w Półmaratonie z 2016 r."
                phone =  {<a href="tel:+48721657195">721-657-195</a>}
            />
            <Person
                photo = {photos[6]}
                title = "Karolina Malec-Pawlak"
                subtitle = "Adwokat"
                first_desc = "Absolwentka wydziału Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego. Od 2015 r. członek Okręgowej Rady Adwokackiej we Wrocławiu. Posiada kilkuletnie doświadczenie w obsłudze podmiotów gospodarczych oraz osób fizycznych. W czasie aplikacji zdobyła też cenne doświadczenie procesowe w pracy w kancelarii adwokackiej w Środzie Śląskiej. Od 2018 r. prowadzi indywidualną kancelarię w Środzie Śląskiej."
                second_desc = "W kancelarii zajmuje się głównie prawem karnym, cywilnym oraz rodzinnym. Posługuje się biegle językiem angielskim."
                phone =  {<a href="tel:+48578975795">578-975-795</a>}
            />
        </TeamContainer>
    )
}
