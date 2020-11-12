import React from 'react'
import { 
    FooterLinksContainer, FooterWrap, FooterContainer, 
    SectionTitle, FooterLink, Signature, ContactBtn } from './FooterElements'

const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <SectionTitle>About Us</SectionTitle>
                    <FooterLink
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>About</FooterLink>
                    <FooterLink
                        to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Services</FooterLink>
                    <FooterLink
                        to='gallery'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Gallery</FooterLink>
                    <ContactBtn onClick={props.toggleModal}>Contact Us</ContactBtn>
                </FooterLinksContainer>
                <FooterLinksContainer>
                    <SectionTitle>Social Media</SectionTitle>
                    <FooterLink  to="/">Facebook</FooterLink>
                    <FooterLink to="/">InstaGram</FooterLink>
                    <FooterLink to="/">The New Hanoian</FooterLink>
                </FooterLinksContainer>
            </FooterWrap>
            <Signature>VN Bikers &#xA9; 2020</Signature>
        </FooterContainer>
    )
}

export default Footer
