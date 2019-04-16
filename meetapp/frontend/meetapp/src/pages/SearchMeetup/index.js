import PropTypes from "prop-types";
import React, { Component } from "react";

import { View } from "react-native";

import Header from "~/components/Header";

// import { Container } from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";

const tabIcon = ({ tintColor }) => (
  <Icon name="search" size={28} color={tintColor} />
);
tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
export default class SearchMeetup extends Component {
  static navigationOptions = {
    tabBarIcon: tabIcon
  };
  render() {
    return (
      <View>
        <Header title="Buscar" />
      </View>
    );
  }
}
