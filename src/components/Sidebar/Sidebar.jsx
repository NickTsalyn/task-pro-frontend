import { Logo } from "./Logo/Logo";
import { SidebarNav } from "./SidebarNav/SidebarNav";
import {  StyledSidebar } from "./Sidebar.styled";
import { forwardRef } from "react";

export const Sidebar = forwardRef((props, ref) => {
    return (
      
        <StyledSidebar ref={ref}>
       <Logo/>
       <SidebarNav/>
      </StyledSidebar>
     
    
    );
  });