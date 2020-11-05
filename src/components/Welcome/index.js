import React from 'react';
import video from '../../assets/video/traffic.mp4'
import {
    WelcomeContainer,
    VideoContainer,
    Video
} from './WelcomeElements';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <VideoContainer>
                <Video autoplay loop muted src={video} type="video/mp4" />
            </VideoContainer>
        </WelcomeContainer>
    )
}

export default Welcome
