import React from "react";

import * as Styled from "./styles";

const UserMenu: React.FC = ({ children }) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);

export default UserMenu;
