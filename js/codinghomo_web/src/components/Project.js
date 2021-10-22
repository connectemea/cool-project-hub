import React from 'react';
import styled from 'styled-components';

function Project({tittle,content,imageUrl}) {
    return (
            <Container>
                <ContentSection>
                    <h1>{tittle}</h1>
                    <p>{content}</p>
                </ContentSection>
                <ImageSection>
                    <img src={imageUrl} alt={tittle}/>
                </ImageSection>

            </Container>
        )
}
const Container = styled.div`
    display:flex;
    z-index:1;
    justify-content:center;
    padding:2rem 6rem;
    flex-direction:row-reverse;
    flex-wrap:wrap;
    @media screen and (max-width:750px){
        padding:2rem;
        flex-direction:column-reverse;
    }
`
const ContentSection = styled.div`
    text-align:left;
    padding:1rem 2rem;
    flex:.7;
    h1{
        font-size:3rem;
        font-weight:500;
        margin-bottom:1rem;
        text-transform:capitalize;
    }
    p{
        font-size:2rem;
        line-height:2.5rem;    
    }
    @media screen and (max-width:750px){
        text-align:center;
        p{
            text-align:justify;
        }
    }
`
const ImageSection = styled.div`
    flex:.3;
    display:grid;
    place-items:center;
    img{
        max-width:25rem;
        max-height:25rem; 
        object-fit: contain;
    }
`

export default Project;
