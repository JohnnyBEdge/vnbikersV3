import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenuWrapper,
    SidebarMenu,
    SidebarMenuItem,
    SidebarBtnWrapper,
    SidebarBtn
} from './SidebarElements'

const Sidebar = (props) => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggleIsOpen}>
            <Icon onClick={props.toggleIsOpen}>
                <CloseIcon/>
            </Icon>
            <SidebarMenuWrapper>
                <SidebarMenu>
                    <SidebarMenuItem 
                        to="about"
                        onClick={props.toggleIsOpen}>
                            About
                    </SidebarMenuItem>
                    <SidebarMenuItem 
                        to="services"
                        onClick={props.toggleIsOpen}>
                            Services
                    </SidebarMenuItem>
                    <SidebarMenuItem 
                        to="gallery"
                        onClick={props.toggleIsOpen}>
                            Gallery
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarBtn 
                        to="/contact"
                        onClick={props.toggleIsOpen}>
                            Contact
                    </SidebarBtn>
                </SidebarBtnWrapper>
            </SidebarMenuWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
