import { COUNTER_INCREMENT } from "./ActionTypes";

export const incCounter = data => {
  return {
    type: COUNTER_INCREMENT,
    payload: data
  };
};
