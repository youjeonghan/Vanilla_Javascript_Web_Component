import { createStore } from "./core/Store.js";

const initState = {
  // 초기 상태 입력
  header: 10,
  app: 1
};

export const SET_A = "SET_A";
export const SET_B = "SET_B";

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case "SET_header":
      return { ...state, header: action.payload };
    case "SET_app":
      return { ...state, app: action.payload };
    default:
      return state;
  }
});

export const setHeader = payload => ({ type: "SET_header", payload });
export const setApp = payload => ({ type: "SET_app", payload });
