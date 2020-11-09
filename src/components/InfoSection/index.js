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
    BtnWrap,
    ModalBtn,
    Col2,
    ImgWrap,
    Img
} from './InfoElements';


const InfoSection = ({id, lightBg, imgStart, topLine, lightText, headline, darkText, desc, img, alt, displayBtn, toggleModal}) => {
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
                                <BtnWrap displayBtn={displayBtn}>
                                    <ModalBtn displayBtn={displayBtn} onClick={toggleModal}>Contact us</ModalBtn>
                                </BtnWrap>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Col2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
