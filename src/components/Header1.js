import React from "react";
import styled from "styled-components";

const StyledHeader1 = styled.h1`
  margin-top: 10px !important;
  margin-bottom: 20px !important;
`;

function Header1({ children }) {
  return <StyledHeader1>{children}</StyledHeader1>;
}

export default Header1;
