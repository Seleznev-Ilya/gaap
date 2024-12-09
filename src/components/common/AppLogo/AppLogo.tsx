/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppLogo from "../../../assets/AppLogo.svg";

function Logo() {
  return <img css={style.appLogo} src={AppLogo} alt="Logo" />;
}

const style = {
  appLogo: css`
    width: 35px;
    height: 35px;
    margin: 0 auto 5%;
    display: block;
  `,
};

export default Logo;
