import { atom } from "recoil";

export const customizationState = atom({
  key: "customizationState",
  default: {
    isOpen: [],
    defaultId: "default",
    fontFamily: "Roboto",
    borderRadius: 8,
    opened: true,
    logoutModalOpened: false,
  },
});

export const noticeModalState = atom({
  key: "noticeModalState",
  default: {
    opened: false,
    id: 0,
  },
});
