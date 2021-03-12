import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { colors, images } from '../../utils/utils';
import Home from '../homepage';
import ContactForm from '../form';

const Container = styled.div`
    background-color: ${colors.background};
    position: relative;
    top: 10vh;
    padding: 5% 10% 10% 10%;
    display: flex;
    flex-flow: column;
    align-items: center;

    .alice-carousel__wrapper{
        text-align: center;
        
        img{
            width: 100%;
        }
    }
    @media (min-width: 768px){
        .alice-carousel__wrapper{
        text-align: center;
        
        img{
            width: 30%;
        }
    }
    }
`

const responsive = {
    0: { items: 1 },
};
const items = images.map((item, index) => {
    return <img src={item} alt="img" />;
});
const Content = () => {
    return (
        <Container>
            <AliceCarousel
                autoPlay
                animationDuration={1000}
                autoPlayInterval={1000}
                animationType='fadeout'
                autoHeight
                infinite
                mouseTracking
                items={items}
                responsive={responsive}
            />
            <Home />
            <ContactForm/>
        </Container>
    );
}

export default Content;
