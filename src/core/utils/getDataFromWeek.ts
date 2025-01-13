import { getWeekNumber } from "./getWeekNumber";
import { StorageKeys } from "./syncLocalStore";

export enum WeekOffset {
  CurrentWeek = 0,
  LastWeek = 1,
  TwoWeeksAgo = 2,
}
export function getDataForWeek(
  weekOffset: WeekOffset = WeekOffset.CurrentWeek
) {
  const currentWeekNumber = getWeekNumber();
  const targetWeekNumber = currentWeekNumber - weekOffset;
  const data = localStorage.getItem(
    `${StorageKeys.bodyPartHistory}_${targetWeekNumber}`
  );
  return data ? JSON.parse(data) : null;
}
