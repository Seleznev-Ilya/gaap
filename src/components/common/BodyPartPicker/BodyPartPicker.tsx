/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "core/styles/theme";
import Button from "../Button/Button";
import AppLogo from "../AppLogo/AppLogo";

interface Types {
  activePicker: number[];
  setActivePicker: (value: number[]) => void;
  bodyPartPickerList: { id: number; name: string }[][];
  navigate: (path: string) => void;
}
function BodyPartPicker({
  activePicker,
  setActivePicker,
  navigate,
  bodyPartPickerList,
}: Types) {
  return (
    <div css={style.wrapper}>
      <div css={style.header}>
        <p css={style.headerText}>Select the areas you want to focus on</p>
      </div>
      <span css={style.counter}>{activePicker.length}/2</span>
      <div css={style.controlsWrapper}>
        {bodyPartPickerList.map((section, idx) => {
          return (
            <div key={idx} css={style.subControlsWrapper}>
              {section.map(({ id, name }) => (
                <Button
                  key={id}
                  isActive={activePicker.includes(id)}
                  styleCss={style.button}
                  onClick={(e: any) =>
                    activePicker.includes(id)
                      ? setActivePicker(activePicker.filter((n) => n !== id))
                      : activePicker.length < 2 &&
                        setActivePicker([...activePicker, id])
                  }
                  text={name}
                />
              ))}
            </div>
          );
        })}
        <AppLogo />
      </div>
    </div>
  );
}

const style = {
  wrapper: css`
    width: 100%;
    max-width: 480px;
    min-width: 300px;
    border: 2px solid ${theme.colors.grey.default};
    border-radius: ${theme.borderRadius.large};
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px;
    background-color: ${theme.colors.grey["100"]};
  `,
  header: css`
    background-color: ${theme.colors.grey["75"]};
    width: 100%;
    padding: ${theme.borderRadius.default};
    text-align: center;
    border-radius: ${theme.borderRadius.large} ${theme.borderRadius.large} 0 0;
    border-bottom: 2px solid ${theme.colors.grey.default};
    margin-bottom: 25px;
  `,
  headerText: css`
    color: ${theme.colors.white["100"]};
    font-size: 16px;
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
    padding: 5px 0 20px;
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
