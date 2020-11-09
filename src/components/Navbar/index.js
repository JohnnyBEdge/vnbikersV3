import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    ContactBtn,
    ContactBtnLink
} from './NavbarElements';
import logo from '../../assets/images/logo.png'

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo src={logo} />
                    <MobileIcon onClick={props.toggleSidebar}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="gallery">Gallery</NavLink>
                        </NavItem>
                    </NavMenu>
                    <ContactBtn>
                        <ContactBtnLink to="/contact">Contact Us</ContactBtnLink>
                    </ContactBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
