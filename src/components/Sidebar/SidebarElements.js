import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    //sidebar drops down from top
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
    &:hover{
        color: rgb(14, 214, 14);
    }
`
export const SidebarMenuWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`
export const SidebarMenuItem = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: whitesmoke;
    cursor:pointer;

    &:hover{
        color: rgb(14, 214, 14);
        transition: 0.2s ease-in-out;
        font-size: 2.2rem;
    }
`
export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarBtn = styled.button`
    font-family: 'Permanent Marker', cursive;
    font-size: 1rem;
    color: #010606;
    border-radius: 50px;
    background: rgb(14, 214, 14);
    white-space: nowrap;
    padding: 16px 64px;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        color: #010606;
        transition: 0.2s ease-in-out;
        background-color: whitesmoke;
        font-size: 1.2rem;
    }
`
