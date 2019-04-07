import { createStore } from "redux";

import RootReducer from "../Reducers/";

let store = createStore(RootReducer);

export default store;
