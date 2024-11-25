import chest from "./JSON/chest.json";
import arms from "./JSON/arms.json";
import warmup from "./JSON/warmup.json";
import cooldown from "./JSON/cooldown.json";

export const BODY_GROUP_TYPES = ["CHEST", "ARMS"];
export const WARMUP = warmup;
export const BODY_GROUPS = {
  CHEST: chest,
  ARMS: arms,
};
export const COOLDOWN = cooldown;
