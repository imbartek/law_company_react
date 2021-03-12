import React from 'react'
import styled from 'styled-components';
import { colors, shadows, testing, posts } from '../../utils/utils';


const Container = styled.div`
    background-color: ${colors.background};
    position: relative;
    top: 10vh;
    min-height: 100vh;
    margin-bottom: 20vh;
    padding: 5% 10% 10% 10%;
    display: flex;
    flex-flow: column;
    align-items: center;

    .posts{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }

    @media (min-width: 768px){
        .posts{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 2% 5%;
            grid-template-areas: ". .";
        }
    }
`

const Post = styled.div`
    min-height: 70vh;
    width: 100%;
    box-shadow: ${shadows.main_shadow};
    margin: 10% 0;
    padding: 3%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    img{
        width: 100%;
    }

    h1{
        font-size: 1.5em;
        color: ${colors.main}
    }
    .details{
        height: 90px;
        overflow: hidden;
    }
    .date{
        color: ${colors.dates};
        margin: 5% 0;
    }
    @media (min-width: 768px){
        min-height: 60vh;
    }
`

export default function News() {

    return (
        <Container>
            <h1>Najnowsze posty</h1>
            <div className="posts">
                {
                    posts.map((post) =>
                    <Post>
                        <img src={post.thumbnail} alt="test" />
                        <p className="date">{post.date}</p>
                        <h1>{post.name}</h1>
                        <p className="details">{post.details}</p>
                        <a href="http://">Read more</a>
                    </Post>)
                }
            </div>
        </Container>
    )
}
