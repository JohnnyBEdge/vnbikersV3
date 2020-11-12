import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    text-align: center;

    @media screen and (max-width: 768px){
        padding-top: 32px;
    }
`

export const SectionTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    color: whitesmoke;
`
export const FooterLink = styled(LinkS)`
    font-family: 'Indie Flower', cursive;
    text-decoration: none;
    color: whitesmoke;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        color: #0ED60E;
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
    }
`
export const Signature = styled.p `
    font-family: 'Indie Flower', cursive;
    color: whitesmoke;
    text-align: center;
    padding: 10px;
`
export const ContactBtn = styled.button`
    border: none;
    background-color: transparent;
    font-family: 'Indie Flower', cursive;
    color: whitesmoke;
    text-align: center;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        color: #0ED60E;
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
    }
`

