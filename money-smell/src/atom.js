import { atom } from "recoil";

export const keyWordState = atom({
  key: "keyWordState",
  default: [],
});

export const TrendAnalyticsState = atom({
  key: "TrendAnalyticsState",
  default: true,
});
