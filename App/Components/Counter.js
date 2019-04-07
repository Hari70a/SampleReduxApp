import { connect } from "react-redux";

import { incCounter, decCounter, changeMessage } from "../Actions/";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions
} from "react-native";

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    message: state.messenger.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incCounter()),
    decrement: () => dispatch(decCounter()),
    changeMessage: message => dispatch(changeMessage(message))
  };
};

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginHorizontal: 15 }}>{this.props.message}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            numberOfLines={2}
            placeholder={"Type a message"}
            placeholderColor={"#ccc"}
            value={this.props.message}
            onChangeText={text => this.props.changeMessage(text)}
            underlineColorAndroid={"transparent"}
          />
        </View>

        <Button
          onPress={this.props.increment}
          title="Increase Count"
          color="#841584"
          accessibilityLabel="Increase Count"
        />

        <Text>{this.props.count}</Text>

        <Button
          onPress={this.props.decrement}
          title="Decrease Count"
          color="#841584"
          accessibilityLabel="Decrease Count"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    margin: 15,
    width: Dimensions.get("window").width / 2
  },
  input: {
    paddingHorizontal: 15,
    height: 50
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
