import React from 'react';
import video from '../../assets/video/traffic.webm'
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
                <Video muted autoPlay playsinline loop src={video} type="video/webm" />
            </VideoContainer>
        </WelcomeContainer>
    )
}

export default Welcome
