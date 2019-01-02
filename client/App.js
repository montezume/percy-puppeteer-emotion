import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.section`
  min-height: 800px;
  width: 100%;
  background: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  color: white;
  font-size: 2em;
`;

const App = () => (
  <Wrapper>
    <P>Lorem ipsum</P>
  </Wrapper>
);

export default App;
