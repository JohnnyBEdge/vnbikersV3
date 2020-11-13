import React from 'react';
import video from '../../assets/video/traffic.mp4'
import {
    WelcomeContainer,
    VideoContainer,
    Video,
    TitleOverlay,
    SubTitleOverlay
} from './WelcomeElements';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <TitleOverlay>VN Bikers</TitleOverlay>
            <SubTitleOverlay>Custom . Quality . Reliable</SubTitleOverlay>
            <VideoContainer>
                <Video 
                    src={video} 
                    muted 
                    autoPlay 
                    loop 
                    playsinline="true" 
                    disablePictureInPicture="true"
                    type="video/mp4" />
            </VideoContainer>
        </WelcomeContainer>
    )
}

export default Welcome
