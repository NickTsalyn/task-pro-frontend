import { Logo } from "./Logo/Logo";
import { SidebarNav } from "./SidebarNav/SidebarNav";
import { StyledSidebar } from "./Sidebar.styled";

export const Sidebar = () => {
    return (
      <StyledSidebar>
       <Logo/>
       <SidebarNav/>
      </StyledSidebar>
    );
  };