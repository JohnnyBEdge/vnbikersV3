import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Col1,
    TextWrapper,
    TopLine,
    SectionHeading,
    Subtitle,
    Col2,
    ImgWrap,
    Img
} from './InfoElements';
import buds from '../../assets/images/hanoi_buds.png';

const InfoSection = ({id, lightBg, imgStart, topLine, lightText, headline, darkText, desc,img,alt}) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Col1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <SectionHeading lightText={lightText}>{headline}</SectionHeading>
                                <Subtitle darkText={darkText}>{desc}</Subtitle>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrap>
                                <Img src={buds} alt={alt} />
                            </ImgWrap>
                        </Col2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
