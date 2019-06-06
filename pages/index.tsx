import * as React from "react";
import Page from "../layouts/Main";
import styled from "styled-components";

const Index: React.SFC<{}> = () => (
  <Page>
    <Container>
      <Hand>👋</Hand>
    </Container>
  </Page>
);

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`;

const Hand = styled.p`
  font-size: 50px;
`;

export default Index;
