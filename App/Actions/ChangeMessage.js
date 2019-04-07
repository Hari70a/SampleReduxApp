import { CHANGE_MESSAGE } from "./ActionTypes";

export const changeMessage = message => {
  return {
    type: CHANGE_MESSAGE,
    payload: message
  };
};
