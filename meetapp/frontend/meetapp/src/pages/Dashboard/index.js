import PropTypes from "prop-types";
import React, { Component } from "react";

import Header from "~/components/Header";

import {
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  StatusBar
} from "react-native";

import { View } from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

const tabIcon = ({ tintColor }) => (
  <Icon name="home" size={28} color={tintColor} />
);
tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default class Dashboard extends Component {
  static navigationOptions = {
    tabBarIcon: tabIcon
  };

  render() {
    return (
      <View>
        <Header title="Início" />
        <Text>Dashboard.....</Text>
      </View>
    );
  }
}
