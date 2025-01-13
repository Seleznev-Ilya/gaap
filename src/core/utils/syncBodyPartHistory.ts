import syncLocalStore, { StorageKeys } from "./syncLocalStore";
import { getWeekNumber } from "./getWeekNumber";
import { WEEK_DAY } from "../constants/common";
import { getDataForWeek, WeekOffset } from "./getDataFromWeek";

const syncBodyPartHistory = (): {
  setDataForWeekDay: (data: any) => void;
  history: {
    currentWeekData: number[];
    lastWeekData: number[];
    twoWeeksAgoData: number[];
  };
} => {
  function setDataForWeekDay(data: any) {
    const weekNumber = getWeekNumber(); // You'll define getWeekNumber
    const { store, setStore } = syncLocalStore(
      `${StorageKeys.bodyPartHistory}_${weekNumber}`
    );
    const storedData = store ?? {};
    storedData[WEEK_DAY] = data;
    setStore(storedData);
    // localStorage.setItem(
    //   `${StorageKeys.bodyPartHistory}_${weekNumber}`,
    //   JSON.stringify(storedData)
    // );
  }

  console.log({ getWeekNumber: getWeekNumber() });

  const currentWeekData = getDataForWeek();
  const lastWeekData = getDataForWeek(WeekOffset.LastWeek);
  const twoWeeksAgoData = getDataForWeek(WeekOffset.TwoWeeksAgo);

  // Implement your comparison logic here
  console.log({ currentWeekData, lastWeekData, twoWeeksAgoData });

  return {
    setDataForWeekDay,
    history: { currentWeekData, lastWeekData, twoWeeksAgoData },
  };
};
export default syncBodyPartHistory;
