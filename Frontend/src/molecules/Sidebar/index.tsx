import React from "react";

import DashboardIcon from "../../assets/dashboardIcon.svg";
import IssuanceIcon from "../../assets/issuanceIcon.svg";
import MessengerIcon from "../../assets/messengerIcon.svg";
import RegisterIcon from "../../assets/registerIcon.svg";
import ReportsIcon from "../../assets/reportsIcon.svg";

import SidebarMenu from "../../atoms/SidebarMenu";
import EmpatieseLogotipo from "../../atoms/EmpatieseLogotipo";

import { SidebarContainer, SidebarMenusContainer } from "./styles";

const Sidebar: React.FC = () => (
  <SidebarContainer id="sidebar">
    <EmpatieseLogotipo color="secondary" />
    <SidebarMenusContainer>
      <SidebarMenu srcIcon={DashboardIcon} title="Início" link="dashboard" />
      <SidebarMenu srcIcon={RegisterIcon} title="Cadastros" link="registers" />
      <SidebarMenu srcIcon={IssuanceIcon} title="Emissão" link="issue" />
      <SidebarMenu srcIcon={ReportsIcon} title="Relatórios" link="reports" />
      <SidebarMenu srcIcon={MessengerIcon} title="Mensageiro" link="messenger" />
    </SidebarMenusContainer>
  </SidebarContainer>
);

export default Sidebar;
