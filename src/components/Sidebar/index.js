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
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggleSidebar}>
            <Icon onClick={props.toggleSidebar}>
                <CloseIcon/>
            </Icon>
            <SidebarMenuWrapper>
                <SidebarMenu>
                    <SidebarMenuItem 
                        to="about"
                        offset={-80}
                        onClick={props.toggleSidebar}>
                            About
                    </SidebarMenuItem>
                    <SidebarMenuItem 
                        to="services"
                        offset={-80}
                        onClick={props.toggleSidebar}>
                            Services
                    </SidebarMenuItem>
                    <SidebarMenuItem 
                        to="gallery"
                        offset={-80}
                        onClick={props.toggleSidebar}>
                            Gallery
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarBtn 
                        to="/contact"
                        onClick={props.toggleSidebar}>
                            Contact
                    </SidebarBtn>
                </SidebarBtnWrapper>
            </SidebarMenuWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
