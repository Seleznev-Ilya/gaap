/** @jsxImportSource @emotion/react */
import Button from "components/Button/Button";
import theme from "core/constants/theme";
import { css } from "@emotion/react";

interface Types {
  activePicker: number[];
  handleButtonClick: (value: number) => void;
  bodyPartPickerList: { id: number; name: string }[][];
  navigate: (path: string) => void;
}

function BodyPartPicker({
  activePicker,
  handleButtonClick,
  navigate,
  bodyPartPickerList,
}: Types) {
  return (
    <div css={style.wrapper}>
      <div css={style.header}>
        <span css={style.textBackGround}>
          <p css={style.headerText}>Last Friday, you did this area</p>
          {/* <p css={style.headerText}>Select the areas you want to focus on</p> */}
        </span>
        <span css={style.backLine} />
      </div>
      <div css={style.controlsWrapper}>
        {bodyPartPickerList.map((section, idx) => {
          return (
            <div key={idx} css={style.subControlsWrapper}>
              {section.map(({ id, name }) => (
                <Button
                  key={id}
                  isActive={activePicker.includes(id)}
                  styleCss={style.button}
                  onClick={(e: any) => handleButtonClick(id)}
                  text={name}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const style = {
  wrapper: css`
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: calc(45dvh - 71px);
    max-width: 480px;
    min-width: 300px;
    border-radius: ${theme.borderRadius.large} ${theme.borderRadius.large} 0 0;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.grey["100"]};
    z-index: 1;
  `,
  header: css`
    width: 100%;
    text-align: center;
    border-radius: ${theme.borderRadius.large} ${theme.borderRadius.large} 0 0;
    margin-bottom: 25px;
  `,
  textBackGround: css`
    background: ${theme.colors.grey[100]};
    padding: 0 7px;
    width: fit-content;
    margin: 0 auto;
    display: block;
    z-index: 1;
    position: relative;
  `,
  backLine: css`
    border: 1px solid ${theme.colors.white["50"]};
    width: 100%;
    display: block;
    transform: translateY(-10px);
    z-index: 0;
    position: relative;
  `,
  headerText: css`
    color: ${theme.colors.white["50"]};
    font-size: 18px;
    font-weight: 700;
  `,
  counter: css`
    color: ${theme.colors.orange};
    text-align: center;
    margin-bottom: 16px;
  `,
  controlsWrapper: css`
    display: flex;
    flex-direction: column;
    align-item: center;
    gap: 12px;
    justify-content: center;
  `,
  subControlsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  `,
  button: css`
    border: none;
    min-width: 70px;
  `,
};

export default BodyPartPicker;
