/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import theme from "core/styles/theme";

interface T {
  onClick: (e: any) => void;
  isActive?: boolean;
  text: string;
  styleCss?: SerializedStyles;
}
function Button({ onClick, isActive = false, text, styleCss }: T) {
  return (
    <button css={[style.button(isActive), styleCss]} onClick={onClick}>
      {text}
    </button>
  );
}

const style = {
  button: (isActive: boolean) => css`
    min-width: 70px;
    border: 1px solid ${theme.colors.grey.default};
    border-radius: ${theme.borderRadius.large};
    background-color: ${isActive
      ? theme.colors.orange
      : theme.colors.grey["75"]};
    color: ${isActive ? theme.colors.grey["100"] : theme.colors.white.default};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    transition: transform 0.2s, background-color 0.5s;
  `,
};

export default Button;
