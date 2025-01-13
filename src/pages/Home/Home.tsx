/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import MomentumHeader from "components/MomentumHeader/MomentumHeader";
import BodyPartPicker from "components/BodyPartPicker/BodyPartPicker";
import PageContainer from "components/PageContainer/PageContainer";
import Button from "components/Button/Button";
import theme from "core/constants/theme";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "core/store/store";
import { toggleActiveWorkoutList } from "core/store/features/bodyPartsSlice";
import syncBodyPartHistory from "../../core/utils/syncBodyPartHistory";
import { bodyPartPickerList } from "core/constants/common";

function Home() {
  const navigate = useNavigate();

  const {
    setDataForWeekDay,
    history: { currentWeekData, lastWeekData },
  } = syncBodyPartHistory();

  console.log({ currentWeekData, lastWeekData });
  const activeButtons = useSelector(
    (state: RootState) => state.bodyParts.activeWorkoutList
  );
  const dispatch = useDispatch();
  const handleButtonClick = (id: number) => {
    dispatch(toggleActiveWorkoutList(id));
  };
  const isActive = Boolean(activeButtons.length);
  console.log(activeButtons);
  return (
    <PageContainer>
      <MomentumHeader />
      <BodyPartPicker
        activePicker={activeButtons}
        handleButtonClick={handleButtonClick}
        bodyPartPickerList={bodyPartPickerList}
        navigate={navigate}
      />
      <Button
        text="Ok"
        onClick={() => {
          setDataForWeekDay(activeButtons);
          if (isActive) navigate("/preview");
        }}
        styleCss={style.button(isActive)}
      />
    </PageContainer>
  );
}

const style = {
  button: (isActive: boolean) => css`
    width: ${isActive ? "100%" : "5%"};
    cursor: ${isActive ? "pointer" : "not-allowed"};
    max-width: 90%;
    margin: 0 auto 5%;
    border-radius: 30px;
    border: ${isActive
      ? "1px solid transparent"
      : "1px solid " + theme.colors.grey[75]};
    font-size: 16px;
    background-color: ${isActive
      ? theme.colors.grey[50]
      : theme.colors.grey[100]};
    color: ${isActive ? theme.colors.white[50] : theme.colors.grey[75]};
    font-weight: bold;
    padding: 12px 6px;
    transition: transform 0.2s, background-color 0.5s, width 0.5s ease;
  `,
};

export default Home;
