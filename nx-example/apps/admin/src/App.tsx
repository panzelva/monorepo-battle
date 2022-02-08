import { add, pow, sub } from '@nx-example/utils';
import { Button, HelloWorld } from '@nx-example/components';
import { Box } from '@nx-example/components-emotion';
import { css } from '@emotion/react';

function App() {
  return (
    <div>
      <p>add is: {add(1, 2)}</p>
      <p>sub is: {sub(3, 1)}</p>
      <p>pow is: {pow(4, 2)}</p>

      <HelloWorld name="world" />

      <Button />

      <Box />

      <div
        css={css`
          background-color: green;
          width: 100px;
          height: 100px;
        `}
      />
    </div>
  );
}

export default App;
