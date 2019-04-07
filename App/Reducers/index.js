import { combineReducers } from "redux";

import counterReducer from "./CounterReducer";
import messageReducer from "./MessageReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  messenger: messageReducer
});

export default rootReducer;
