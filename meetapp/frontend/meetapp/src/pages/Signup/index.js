import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import signUpActions from "~/store/ducks/SignUp";

import {
  PLHNOME,
  PLHLOGIN,
  PLHPWD,
  SIGNUP,
  CONTAEXISTENTE
} from "react-native-dotenv";

import { ActivityIndicator } from "react-native";

import {
  View,
  Image,
  ViewLogin,
  ButtonLogin,
  TextLogin,
  ButtonSignup,
  ViewInputs,
  TextSignup,
  InputTextNome,
  InputTextLogin,
  InputTextSenha,
  LoginMessage
} from "./styles";

import Logo from "~/assets/logos/logo.png";

class Signup extends Component {
  state = {
    name: "",
    user: "",
    pwd: ""
  };

  signUp = async () => {
    const { user, devops, name, pwd } = this.state;
    const { signupRequest, navigation } = this.props;

    await signupRequest(user, devops, name, pwd, navigation);
  };

  clearLoginErrorMessage = () => {
    const { signupFailure } = this.props;
    signupFailure(false);
  };

  render() {
    const { user, name, pwd } = this.state;
    const { loading, error } = this.props.signups;
    return (
      <View>
        <Image source={Logo} />
        <LoginMessage>{!!error && error}</LoginMessage>
        <ViewLogin>
          <ViewInputs>
            <InputTextNome
              autoCapitalize="none"
              autoCorrect={false}
              label={PLHNOME}
              value={name}
              onFocus={this.clearLoginErrorMessage}
              onChangeText={e => this.setState({ name: e })}
            />
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
          </ViewInputs>
          <ButtonLogin onPress={this.signUp}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <TextLogin>{SIGNUP}</TextLogin>
            )}
          </ButtonLogin>
          <ButtonSignup
            onPress={() => this.props.navigation.navigate("Signin")}
          >
            <TextSignup>{CONTAEXISTENTE}</TextSignup>
          </ButtonSignup>
        </ViewLogin>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  signups: state.signups
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(signUpActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
