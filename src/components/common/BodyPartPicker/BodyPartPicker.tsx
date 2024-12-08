/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "core/styles/theme";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BodyPartPicker() {
  const navigate = useNavigate();
  const bodyPartPickerList = [
    [
      { id: 1, name: "Chest" },
      { id: 2, name: "Hands" },
      { id: 3, name: "Legs" },
      { id: 4, name: "Back" },
    ],
    [
      { id: 5, name: "Shoulders" },
      { id: 6, name: "But" },
      { id: 7, name: "Full body" },
    ],
    [
      { id: 0, name: "Warmup" },
      { id: 9, name: "Cooldown" },
    ],
  ];
  const [activePicker, setActivePicker] = useState<number[]>([]);
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
      </div>
      {Boolean(activePicker.length) && (
        <Button
          isActive={Boolean(activePicker.length)}
          styleCss={style.button}
          onClick={() => navigate("/preview")}
          text={"OK"}
        />
      )}
    </div>
  );
}

const style = {
  wrapper: css`
    max-width: 360px;
    border: 1px solid ${theme.colors.grey.light};
    border-radius: ${theme.borderRadius.large};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: linear-gradient(
      60deg,
      ${theme.colors.grey.dark} 10%,
      #000000 100%
    );
  `,
  header: css`
    background-color: ${theme.colors.grey.dark};
    width: 100%;
    padding: ${theme.borderRadius.default};
    text-align: center;
    border-radius: ${theme.borderRadius.large} ${theme.borderRadius.large} 0 0;
    border-bottom: 1px solid ${theme.colors.grey.light};
    margin-bottom: 25px;
  `,
  headerText: css`
    color: ${theme.colors.white.text};
    font-style: 18px;
  `,
  counter: css`
    color: ${theme.colors.orange};
    text-align: center;
    margin-bottom: 15px;
  `,
  controlsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-item: center;
    gap: 12px;
    justify-content: center;
    padding: 5px 0 20px;
  `,
  subControlsWrapper: css`
    display: flex;
    gap: 10px;
    justify-content: center;
  `,
  button: css`
    min-width: 70px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    transition: transform 0.2s, background-color 0.5s;
  `,
};

export default BodyPartPicker;
