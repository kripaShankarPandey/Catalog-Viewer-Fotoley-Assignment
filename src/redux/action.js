import { START, STOP } from "./actionType";
//for stop button
export const stopButtonAction = () => {
  return { type: STOP };
};
//for start button
export const startButtonAction = () => {
  return { type: START };
};
