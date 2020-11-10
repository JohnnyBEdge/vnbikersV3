import styled from 'styled-components';

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #010606;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    width: 80%;
    margin: 0 auto;

`
export const ImgContainer = styled.div`
    width: 1fr;
    height: 200px;
    border: solid black 2px;
    &:hover{
        transition: 0.2s ease-in-out;
        transform: scale(2, 2);
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const SectionTitle = styled.h2`
    color: whitesmoke;
    font-size: 4rem;
    font-family: 'Permanent Marker', cursive;
    margin-bottom: 20px;
`