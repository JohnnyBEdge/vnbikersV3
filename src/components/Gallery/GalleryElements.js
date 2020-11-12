import styled from 'styled-components';

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: #010606;
    /* @media screen and (max-width: 1000px){
        height: 100vh;
    } */

`
export const GridContainer = styled.div`
    display: grid;
    /* background-color: #010606; */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    width: 80%;
    margin-bottom: 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`
export const ImgContainer = styled.div`
    width: 1fr;
    border: solid black 2px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
`
export const SectionTitle = styled.h2`
    color: whitesmoke;
    font-size: 4rem;
    font-family: 'Permanent Marker', cursive;
    margin-bottom: 20px;
`