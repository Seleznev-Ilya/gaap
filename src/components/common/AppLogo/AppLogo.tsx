/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppLogo from "../../../assets/AppLogo.svg";

function Logo() {
  return <img css={style.appLogo} src={AppLogo} alt="Logo" />;
}

const style = {
  appLogo: css`
    width: 40px;
    height: 40px;
    margin: 0 auto 13%;
    display: block;
  `,
};

export default Logo;
