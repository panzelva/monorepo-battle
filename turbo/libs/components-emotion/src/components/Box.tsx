import { css } from '@emotion/react';

type Props = {};

export function Box(props: Props) {
  const {} = props;

  return (
    <div
      css={css`
        background-color: #d14848;
        width: 100px;
        height: 100px;
      `}
    />
  );
}
