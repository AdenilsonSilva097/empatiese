import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding-left: 35px;
  padding-right: 25px;
`;

const NavBarUserButton = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  :hover {
    transform: scale(1.06);
  }

  > :first-child {
    width: 22px;
    height: 22px;
  }

`;

export { NavbarContainer, NavBarUserButton };
