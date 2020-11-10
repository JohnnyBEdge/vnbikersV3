import React, {useState, useEffect} from 'react';
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

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
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
