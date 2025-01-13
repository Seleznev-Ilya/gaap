import { MOMENTUM_LOCATION_DATA } from "core/constants/common";

export const getMomentumData = (pathname: string) =>
  MOMENTUM_LOCATION_DATA[
    pathname.slice(1) as keyof typeof MOMENTUM_LOCATION_DATA
  ];
