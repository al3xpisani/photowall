import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import userActions from "~/store/ducks/Users";

import {
  ENTRAR,
  PLHLOGIN,
  PLHPWD,
  SIGNUP,
  LOGIN_INVALIDO
} from "react-native-dotenv";

import { ActivityIndicator } from "react-native";

import {
  View,
  Image,
  ViewLogin,
  ButtonLogin,
  TextLogin,
  ButtonSignup,
  TextSignup,
  InputTextLogin,
  InputTextSenha,
  LoginMessage
} from "./styles";

import Logo from "~/assets/logos/logo.png";

class Signin extends Component {
  state = {
    user: "",
    pwd: ""
  };

  signIn = async () => {
    const { user, pwd } = this.state;
    const { userRequest, navigation } = this.props;

    await userRequest(user, pwd, navigation);
  };

  signUp = async () => {
    const { navigation } = this.props;

    navigation.navigate("Signup");
  };

  clearLoginErrorMessage = () => {
    const { userFailure } = this.props;
    userFailure(false);
  };

  render() {
    const { user, pwd } = this.state;
    const { loading, error } = this.props.users;

    return (
      <View>
        <Image source={Logo} />
        <LoginMessage>{!!error && LOGIN_INVALIDO}</LoginMessage>
        <ViewLogin>
          <InputTextLogin
            autoCapitalize="none"
            autoCorrect={false}
            label={PLHLOGIN}
            value={user}
            onFocus={this.clearLoginErrorMessage}
            onChangeText={e => this.setState({ user: e })}
          />
          <InputTextSenha
            autoCorrect={false}
            label={PLHPWD}
            value={pwd}
            onFocus={this.clearLoginErrorMessage}
            onChangeText={e => this.setState({ pwd: e })}
          />
          <ButtonLogin onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <TextLogin>{ENTRAR}</TextLogin>
            )}
          </ButtonLogin>
          <ButtonSignup onPress={this.signUp}>
            <TextSignup>{SIGNUP}</TextSignup>
          </ButtonSignup>
        </ViewLogin>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
