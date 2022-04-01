import React, { useState } from "react";

import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import edit from "../../assets/edit.svg";
import Person from "../../assets/person.svg";
import userLogout from "../../assets/userLogout.svg";
import permissions from "../../assets/permissions.svg";

import UserMenuItem from "../../atoms/UserMenuItem";

import { Modal } from "../../libraries/mui/components";

import SearchInput from "../SearchInput";
import UserMenu from "../UserMenu";

import { NavbarContainer, NavBarUserButton } from "./styles";

const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const handleUserButtonClick = () => {
    setOpenUserMenu(true);
  };

  const onCloseUserButtonClick = () => {
    setOpenUserMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("@user");
    setOpenUserMenu(false);
    navigate("/");
  };

  const handlePermissions = () => {
    setOpenUserMenu(false);
    navigate("permissions");
  };

  return (
    <NavbarContainer>
      <SearchInput />
      <NavBarUserButton onClick={handleUserButtonClick}>
        <ReactSVG src={Person} />
      </NavBarUserButton>
      <Modal
        open={openUserMenu}
        onClose={onCloseUserButtonClick}
        disableEnforceFocus
        disableAutoFocus
      >
        <div>
          <UserMenu>
            <UserMenuItem iconPath={edit} title="Editar" />
            <UserMenuItem iconPath={permissions} title="Permissões" onClick={handlePermissions} />
            <UserMenuItem iconPath={userLogout} title="Sair" onClick={handleLogout} />
          </UserMenu>
        </div>
      </Modal>
    </NavbarContainer>
  );
};

export default Navbar;
