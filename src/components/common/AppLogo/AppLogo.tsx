/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppLogo from "../../../assets/AppLogo.svg";

function Logo() {
  return <img css={style.appLogo} src={AppLogo} alt="Logo" />;
}

const style = {
  appLogo: css`
    width: 45px;
    height: 45px;
    margin: 0 auto;
    display: block;
    opacity: .3;
  `,
};

export default Logo;
