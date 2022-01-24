import React from "react";
import styled from "styled-components";

const StyledPullRight = styled.p`
  display: flex;
  justify-content: flex-end;
`;

function PullRight({ children }) {
  return <StyledPullRight>{children}</StyledPullRight>;
}

export default PullRight;
