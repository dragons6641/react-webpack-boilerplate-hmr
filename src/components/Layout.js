import React from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Icon } from "semantic-ui-react";

import PullRight from "./pullRight";
import Header1 from "./Header1";

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header1 as="h1">webpack-for-react</Header1>
      </Link>
      {children}
      <Divider />
      <PullRight>
        Made with <Icon name="heart" color="red" /> by jade.kjo
      </PullRight>
    </Container>
  );
};

export default Layout;
