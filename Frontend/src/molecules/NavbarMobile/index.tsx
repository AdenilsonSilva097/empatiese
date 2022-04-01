import React, { useState } from "react";

import MenuButton from "../../atoms/MenuButton";
import EmpatieseLogotipo from "../../atoms/EmpatieseLogotipo";

import SidebarMobile from "../SidebarMobile";

import { NavbarMobileContainer } from "./styles";

const NavbarMobile: React.FC = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar((state) => !state);
  };

  return (
    <NavbarMobileContainer>
      <MenuButton onClick={handleClick} />
      {openSidebar ? <SidebarMobile onClose={handleClick} /> : null}
      <EmpatieseLogotipo color="secondary" />
    </NavbarMobileContainer>
  );
};

export default NavbarMobile;
