/** @jsxImportSource @emotion/react */
import { Fragment, useState } from "react";

import AppLogo from "../../components/common/AppLogo/AppLogo";
import MomentumHeader from "components/common/MomentumHeader/MomentumHeader";

import "./HomeStyle.css";
import BodyPartPicker from "components/common/BodyPartPicker/BodyPartPicker";
import Button from "components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import theme from "core/styles/theme";

function Home() {
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
    <Fragment>
      <AppLogo />
      <MomentumHeader />
      <BodyPartPicker
        activePicker={activePicker}
        setActivePicker={setActivePicker}
        bodyPartPickerList={bodyPartPickerList}
        navigate={navigate}
      />
      {Boolean(activePicker.length) && (
        <Button
          isActive={Boolean(activePicker.length)}
          styleCss={style.button}
          onClick={() => navigate("/preview")}
          text={"OK"}
        />
      )}
    </Fragment>
  );
}

const style = {
  button: css`
    width: calc(100% - 20px);
    height: 50px;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    background-color: ${theme.colors.white.default};
    color: ${theme.colors.black.deepDark};
    font-weight: bold;
    padding: 8px 16px;
    transition: transform 0.2s, background-color 0.5s;
    position: absolute;
    bottom: 3%;
  `,
};

export default Home;
