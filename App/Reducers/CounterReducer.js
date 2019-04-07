import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../Actions/ActionTypes";
import { initialState } from "../Store/initialState";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        count: state.count + 1
      };
    case COUNTER_DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};
export default counterReducer;
