import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    margin: 5px;
    height: 60px;
`
export const MobileIcon = styled.div`
    display: none;

    &:hover{
        color: rgb(14, 214, 14);
    }

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
    font-family: 'Permanent Marker', cursive;
    font-size: 2rem;

    &.active{
        border-bottom: 3px solid rgb(14, 214, 14);
        font-size: 2.2rem;
    }
    &:hover{
        color: rgb(14, 214, 14);
        font-size: 2.2rem;
    }
`
export const ContactBtn = styled.button`
    border-radius: 50px;
    background-color: rgb(14, 214, 14);
    //	Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    font-family: 'Permanent Marker', cursive;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    height: 40px;
    margin-top: 20px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`