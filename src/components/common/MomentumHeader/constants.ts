import { ICONS_MOMENTUM } from "core/icons";
import theme from "core/styles/theme";

export const ONE_THIRD_DAY = 8;
export const WEEK_DAY_INDEX = new Date().getDay();
export const DAYTIME_SEGMENT_INDEX = Math.floor(
  new Date().getHours() / ONE_THIRD_DAY
);
export const WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const DAYTIME_SEGMENT =
  Object.keys(ICONS_MOMENTUM)[DAYTIME_SEGMENT_INDEX];
export const WEEK_DAY = WEEK[WEEK_DAY_INDEX];
export const MOMENTUM_LOCATION_DATA = {
  home: {
    iconName: DAYTIME_SEGMENT,
    emoji: null,
    color: theme.colors.orange,
    text: WEEK_DAY,
  },
  flow: {
    iconName: DAYTIME_SEGMENT,
    color: theme.colors.orange,
    emoji: "🙌",
    text: WEEK_DAY,
  },
};
