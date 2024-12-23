/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface PT {
  children: React.ReactNode | React.ReactNode[];
}
function AppContainer({ children }: PT) {
  return <div css={style.appContainer}>{children}</div>;
}

const style = {
  appContainer: css`
    background: inherit;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    height: 100dvh;
    width: 100vw;
    max-width: 700px;
    padding: 5% 10px 0;
  `,
};

export default AppContainer;
