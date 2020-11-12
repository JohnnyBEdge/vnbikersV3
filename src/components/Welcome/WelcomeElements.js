import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: center;
    padding: 0 30px;
    /* height: 800px; */
    height: 100vh;
    position: relative;
    z-index: 1;
    flex-direction: column;
    padding-top: 100px;

    :before{
       content: '';
       position: absolute;
       top: 0;
       right: 0;
       bottom: 0;
       left: 0;
       background: linear-gradient(
           180deg,
           rgba(0,0,0,0.2) 0%,
           rgba(0,0,0,0.2) 100%
       ), linear-gradient(
           180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
       z-index: 2;
    }
`


export const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0; 
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const Video = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a34;
    opacity: .2;
`
export const TitleOverlay = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: 15vw;
    z-index: 2;
    color: #fff;
    opacity: .3;
    margin-top: 100px;
`
export const SubTitleOverlay = styled.p`
    font-family: 'Indie Flower', cursive;
    font-size: 4.5vw;
    color: rgb(14, 214, 14);
    z-index: 2;
    opacity: .7;

    @media screen and (max-width: 480px){
        font-size: 8vw;
        white-space: nowrap;
    }
`