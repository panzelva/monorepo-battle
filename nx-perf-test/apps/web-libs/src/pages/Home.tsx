import React from 'react';
import Navbar from '../components/Navbar';
import { Component0001 } from '@nx-perf-test/component0001';
import { css } from '@emotion/react';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>

      <Component0001 />

      <div
        css={css`
          width: 200px;
          height: 200px;

          background-color: #ff0000;
        `}
      >
        component 0001
      </div>
    </div>
  );
}

export default Home;
