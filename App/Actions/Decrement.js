import { COUNTER_DECREMENT } from "./ActionTypes";

export const decCounter = () => {
  return {
    type: COUNTER_DECREMENT
  };
};
