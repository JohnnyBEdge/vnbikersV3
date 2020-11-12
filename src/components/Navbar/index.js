import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
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
    };
    const scrollHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo src={logo} onClick={scrollHome}/>
                    <MobileIcon onClick={props.toggleSidebar}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to="gallery"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}    
                            >Gallery</NavLink>
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
