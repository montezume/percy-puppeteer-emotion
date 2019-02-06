import React from "react";
import styled from "@emotion/styled";

const Block = styled.section`
  min-height: 300px;
  width: 80%;
  padding: 16px;
  margin: 32px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const P = styled.p`
  color: black;
  font-size: 2em;
`;

const App = () => (
  <Wrapper>
    <Block>
      <P>Block 1</P>
    </Block>
    <Block>
      <P>Block 2</P>
    </Block>
  </Wrapper>
);

export default App;
