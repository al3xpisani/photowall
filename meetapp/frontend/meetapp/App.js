import React, { Component } from "react";
import { Provider } from "react-redux";
import { Platform, StyleSheet, Text, View, AsyncStorage } from "react-native";

import { ASYNCSTORAGE_USERS } from "react-native-dotenv";
import store from "~/store";

import createNavigatorRule from "./Routes";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    //await AsyncStorage.setItem("@meetapp:users", "teste");
    //await AsyncStorage.clear();
    const user = await AsyncStorage.getItem(ASYNCSTORAGE_USERS);

    this.setState({
      userChecked: true,
      userLogged: !!user
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigatorRule(userLogged);
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
