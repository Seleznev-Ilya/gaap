/** @jsxImportSource @emotion/react */
import { ChildrenType } from "core/types";
import { css } from "@emotion/react";

import theme from "core/constants/theme";

interface PT {
  children: ChildrenType;
  isScrollable?: boolean;
}

function PageContainer({ children, isScrollable = false }: PT) {
  return <div css={style.container(isScrollable)}>{children}</div>;
}

const style = {
  container: (isScrollable: boolean) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: ${isScrollable ? "block" : "flex"};
    justify-content: space-between;
    flex-direction: column;
    overflow: ${isScrollable ? "scroll" : "hidden"};
    background-color: ${theme.colors.grey[100]};
    border-radius: 0;

    ${theme.media.mobileBreakPoint} {
      border-radius: ${theme.borderRadius.large} ${theme.borderRadius.large} 0 0;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default PageContainer;
