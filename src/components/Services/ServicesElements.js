import styled from 'styled-components';

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    background-color: #010606;

    @media screen and (max-width: 768px){
       height: 1100px; 
    }
    @media screen and (max-width: 80px){
       height: 1300px; 
    }
`
export const SectionTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    font-size: 4rem;
    margin-bottom: 60px;
    color: whitesmoke;

    @media screen and (max-width: 480px){
       height: 1100px; 
       margin-bottom: 30px;
    }
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div`
    display: flex;
    background: whitesmoke;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 380px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 480px){
       margin-bottom: 10px;
       height: 400px;
    }
    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServiceIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`
export const ServiceTitle = styled.h3`
    font-family: 'Permanent Marker', cursive;
    font-size: 1.5rem;

    @media screen and (max-width: 480px){
       margin-bottom: 10px;
    }
`
export const ServiceDesc = styled.p`
    font-family: 'Indie Flower', cursive;
    text-align: center;

    @media screen and (max-width: 480px){
       font-size: 1.1rem; 
    }
`