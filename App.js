import React, { Component } from "react";
import { Provider } from "react-redux";

import Counter from "./App/Components/Counter";
import store from "./App/Store/";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
