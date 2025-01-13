/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import theme from "core/constants/theme";

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
    border: none;
    border-radius: ${theme.borderRadius.large};
    background-color: ${isActive
      ? theme.colors.orange
      : theme.colors.grey["50"]};
    color: ${isActive ? theme.colors.grey["100"] : theme.colors.white[50]};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 7px 14px;
    transition: transform 0.2s, background-color 0.5s, width 0.5s ease;
  `,
};

export default Button;
