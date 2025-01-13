/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "core/constants/theme";
import { ChildrenType } from "core/types";

interface PT {
  children: ChildrenType;
}

function AppContainer({ children }: PT) {
  return <div css={style.AppContainer}>{children}</div>;
}

const style = {
  AppContainer: css`
    background: inherit;
    margin: 0 auto;
    height: 100dvh; // for browser toolbars
    width: 100vw;
    max-width: ${theme.media.configuration.section.maxWidth};
    padding: 0;
    ${theme.media.mobileBreakPoint} {
      padding: 5vh 0 0;
      max-width: calc(${theme.media.configuration.section.maxWidth} + 2%);
    }
  `,
};

export default AppContainer;
