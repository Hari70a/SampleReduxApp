import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { listRepos } from "../Actions/ListRepos";

class Repos extends Component {
  componentDidMount() {
    this.props.getRepos("hari70a");
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.gitRepos.repos.map(repo => ({
    key: repo.id,
    ...repo
  }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepos: user => dispatch(listRepos(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
