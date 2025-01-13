import chest from "../JSON/chest.json";
import arms from "../JSON/arms.json";
import warmup from "../JSON/warmup.json";
import cooldown from "../JSON/cooldown.json";
import { ICONS_MOMENTUM } from "core/icons";
import theme from "core/constants/theme";

export const BODY_GROUP_TYPES = ["CHEST", "ARMS"];
export const WARMUP = warmup;
export const BODY_GROUPS = {
  CHEST: chest,
  ARMS: arms,
};
export const COOLDOWN = cooldown;
export const bodyPartPickerList = [
  [
    { id: 1, name: "But" },
    { id: 2, name: "Legs" },
    { id: 3, name: "Hands" },
    { id: 4, name: "Warmup" },
  ],
  [
    { id: 5, name: "Shoulders" },
    { id: 6, name: "Chest" },
    { id: 7, name: "Full body" },
  ],
  [
    { id: 8, name: "Back" },
    { id: 9, name: "Cooldown" },
  ],
];

export const ONE_THIRD_DAY = 8;
export const WEEK_DAY_INDEX = new Date().getDay();
export const DAYTIME_SEGMENT_INDEX = Math.floor(
  new Date().getHours() / ONE_THIRD_DAY
);
export const WEEK: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// add routes name, for common and import here
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
