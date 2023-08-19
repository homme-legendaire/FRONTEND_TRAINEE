import { atom } from "recoil";

export const customizationState = atom({
  key: "customizationState",
  default: {
    isOpen: [],
    defaultId: "default",
    fontFamily: "Roboto",
    borderRadius: 8,
    opened: true,
  },
});
