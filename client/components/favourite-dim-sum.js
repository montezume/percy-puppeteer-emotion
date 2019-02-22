import React, { useState } from 'react';
import { css } from '@emotion/core';
import Select from './select';
import vars from '../theme';

const FavouriteDimSum = props => {
  const [value, setValue] = useState({});
  return (
    <div
      css={css`
        padding: 16px 0;
        max-width: 600px;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          display: flex;
          padding-bottom: 16px;
          align-items: flex-start;
        `}
      >
        <p
          css={css`
            margin: 0;
          `}
        >
          Favourite dim sum
        </p>
        <span
          css={css`
            line-height: 0.7rem;
            font-size: 0.7rem;
          `}
        >
          *
        </span>
        <p
          css={css`
            margin: 0;
          `}
        >
          : {value.value}
        </p>
      </div>
      <Select
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
      />

      <p
        css={css`
          margin-top: 1rem;
          font-size: 0.3rem;
        `}
      >
        This is the correct spelling of favourite
      </p>
    </div>
  );
};

export default FavouriteDimSum;
