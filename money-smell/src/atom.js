import { atom } from "recoil";

export const keyWordState = atom({
  key: "keyWordState",
  default: [
    {
      date: "2023-08-24",
      wingRatio1p: 0,
      wingCount1p: 8,
      rocketCount1p: 0,
      growthCount1p: 0,
      adsRatio: 0,
      adsCount: 0,
      adsPositionCount: 0,
      rocketRatio: 0,
      rocketCount: 0,
      totalCount: 0,
      averageReviewCount1p: 0,
      maxReviewCount1p: 0,
      midReviewCount1p: 0,
      minReviewCount1p: 0,
      averagePrice1p: 0,
      maxPrice1p: 0,
      midPrice1p: 0,
      minPrice1p: 0,
    },
    {
      date: "2023-08-26",
      wingRatio1p: 0,
      wingCount1p: 4,
      rocketCount1p: 0,
      growthCount1p: 0,
      adsRatio: 0,
      adsCount: 0,
      adsPositionCount: 0,
      rocketRatio: 0,
      rocketCount: 0,
      totalCount: 0,
      averageReviewCount1p: 0,
      maxReviewCount1p: 0,
      midReviewCount1p: 0,
      minReviewCount1p: 0,
      averagePrice1p: 0,
      maxPrice1p: 0,
      midPrice1p: 0,
      minPrice1p: 0,
    },
  ],
});

export const TrendAnalyticsState = atom({
  key: "TrendAnalyticsState",
  default: true,
});
