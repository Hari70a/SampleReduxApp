import { CHANGE_MESSAGE } from "../Actions/ActionTypes";
import { initialState } from "../Store/initialState";

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
export default messageReducer;
