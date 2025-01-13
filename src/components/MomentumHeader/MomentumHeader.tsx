/** @jsxImportSource @emotion/react */
import { getMomentumData } from "./utils";
import { useLocation } from "react-router-dom";
import { IconsType } from "components/SVGIcon/types";
import { css } from "@emotion/react";

import SVGIcon from "components/SVGIcon/SVGIcon";
import theme from "core/constants/theme";

function MomentumHeader() {
  const { pathname } = useLocation();
  const { iconName, emoji, color, text } = getMomentumData(pathname);

  return (
    <div css={style.momentumHeader}>
      {Boolean(emoji) ? (
        <span css={style.momentumEmoji} style={{ color: theme.colors.orange }}>
          {emoji}
        </span>
      ) : (
        <SVGIcon iconName={iconName as IconsType} color={color} size={34} />
      )}
      <h2 css={style.h2}>{text}</h2>
    </div>
  );
}

const style = {
  momentumHeader: css`
    flex-grow: 1;
    display: flex;
    position: sticky;
    top: calc(25vh - 35px);
    width: 100%;
    align-items: center;
    flex-direction: column;
  `,
  momentumEmoji: css`
    font-size: 25.47px;
  `,
  h2: css`
    color: ${theme.colors.orange};
    font-size: 32px;
    font-family: sans-serif;
  `,
};

export default MomentumHeader;
