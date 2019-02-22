import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Heading from './components/heading';
import Subheading from './components/subheading';
import FavouriteDimsum from './components/favourite-dim-sum';
import DimSumImage from './assets/images/dim-sum.jpg';
import Select from './components/select';
import reset from './reset';
import vars from './theme';

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    padding: 32px;
  }
`;

const Column = styled.div`
  width: 100%;
  @media only screen and (min-width: 767px) {
    width: 50%;
  }
`;

const App = () => (
  <React.Fragment>
    <Global styles={reset()} />
    <Wrapper>
      <Heading>Dim sum</Heading>
      <Grid>
        <Column>
          <p
            css={css`
              margin-top: 0;
            `}
          >
            <span
              css={css`
                color: ${vars.brand};
              `}
            >
              Dim sum
            </span>
            {` `}literally translates to “touch” and “heart”, or can be
            translated simply as “heart’s delight”.
          </p>
          <p
            css={css`
              margin-bottom: 0;
            `}
          >
            It is a style of Chinese cuisine (particularly Cantonese but also
            other varieties) prepared as small bite-sized portions of food
            served in small steamer baskets or on small plate.
          </p>
        </Column>
        <Column>
          <div
            css={css`
              padding-top: 16px;
              @media (min-width: 786px) {
                padding-top: 0;
                padding-left: 32px;
              }
            `}
          >
            <img
              css={css`
                max-width: 100%;
              `}
              src={DimSumImage}
              alt="delicious dim sum"
            />
          </div>
        </Column>
      </Grid>
      <Subheading>Select your favorite dim sum dishes</Subheading>
      <FavouriteDimsum />
    </Wrapper>
  </React.Fragment>
);

export default App;
