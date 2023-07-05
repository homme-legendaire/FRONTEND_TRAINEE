import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const colorState = atom({
  key: "colorState",
  default: {
    color1: "#000000",
    color2: "#000000",
    color3: "#000000",
  },
});
