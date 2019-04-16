import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import signUpActions from "~/store/ducks/SignUp";
import {
  CONTINUAR,
  TEXTOPROFILE,
  PREFERENCIA,
  DEVOPS,
  FRONTEND,
  BACKEND,
  MOBILE,
  GESTAO,
  MARKETING
} from "react-native-dotenv";

import {
  Content,
  ButtonLogin,
  TextLogin,
  WelcomeText,
  ContentText,
  PrefText,
  CheckBox,
  ViewCheckBox,
  CheckBoxText,
  ErrorText
} from "./styles";

import { colors } from "~/styles";

class Preferences extends Component {
  state = { loading: false, error: "" };

  constructor(props) {
    super(props);
    updateColors = [];
    checkBoxIDs = ["CBFE", "CBBE", "CBMB", "CBDO", "CBGT", "CBMK"];
    this.initializeCheckBoxElements();
  }

  goDash = async () => {
    let devops = "";
    this.setState({ error: false });
    //validate. at least one element must be setted up as true
    checkBoxIDs.forEach(element => {
      if (updateColors["set_" + element] === true) {
        devops += element;
        //console.tron.log(`element is true ${elementsValidated}`);
      } else {
        //console.tron.log(`element is false ${element}`);
      }
    });
    if (!devops) {
      //console.tron.log("pelo menos uma preferencia deve ser selecionada");
      this.setState({ error: true, loading: false });
      return false;
    }
    //Proceed with preferences update on User table
    const { signupRequest, navigation } = this.props;

    await signupRequest(
      navigation.getParam("signupId"),
      devops,
      "",
      "",
      navigation
    );
  };

  initializeCheckBoxElements() {
    checkBoxIDs.forEach(element => {
      updateColors["color_" + element] = colors.whiteTransparent;
      updateColors["set_" + element] = false;
    });
  }

  checkBoxValidation = ID => {
    if (updateColors["set_" + ID] === false) {
      updateColors["set_" + ID] = true;
      updateColors["color_" + ID] = "#d55f70";
    } else {
      updateColors["set_" + ID] = false;
      updateColors["color_" + ID] = colors.whiteTransparent;
    }
  };

  onTouch = ID => {
    this.checkBoxValidation(ID);
    this.setState(updateColors);
  };

  render() {
    const { loading, error } = this.state;
    const { navigation } = this.props;
    return (
      <Content>
        <WelcomeText>Olá {navigation.getParam("signupName")}</WelcomeText>
        <ContentText>{TEXTOPROFILE}</ContentText>
        <PrefText>{PREFERENCIA}</PrefText>

        <ViewCheckBox
          onStartShouldSetResponder={() => true}
          onResponderStart={e => this.onTouch(checkBoxIDs[0])}
        >
          <CheckBox
            style={{
              backgroundColor: !this.state["set_" + checkBoxIDs[0]]
                ? colors.whiteTransparent
                : this.state["color_" + checkBoxIDs[0]]
            }}
          />
          <CheckBoxText>{FRONTEND}</CheckBoxText>
        </ViewCheckBox>

        <ViewCheckBox
          onStartShouldSetResponder={() => true}
          onResponderStart={e => this.onTouch(checkBoxIDs[1])}
        >
          <CheckBox
            style={{
              backgroundColor: !this.state["set_" + checkBoxIDs[1]]
                ? colors.whiteTransparent
                : this.state["color_" + checkBoxIDs[1]]
            }}
          />
          <CheckBoxText>{BACKEND}</CheckBoxText>
        </ViewCheckBox>

        <ViewCheckBox
          onStartShouldSetResponder={() => true}
          onResponderStart={e => this.onTouch(checkBoxIDs[2])}
        >
          <CheckBox
            style={{
              backgroundColor: !this.state["set_" + checkBoxIDs[2]]
                ? colors.whiteTransparent
                : this.state["color_" + checkBoxIDs[2]]
            }}
          />
          <CheckBoxText>{MOBILE}</CheckBoxText>
        </ViewCheckBox>

        <ViewCheckBox
          onStartShouldSetResponder={() => true}
          onResponderStart={e => this.onTouch(checkBoxIDs[3])}
        >
          <CheckBox
            style={{
              backgroundColor: !this.state["set_" + checkBoxIDs[3]]
                ? colors.whiteTransparent
                : this.state["color_" + checkBoxIDs[3]]
            }}
          />
          <CheckBoxText>{DEVOPS}</CheckBoxText>
        </ViewCheckBox>

        <ViewCheckBox
          onStartShouldSetResponder={() => true}
          onResponderStart={e => this.onTouch(checkBoxIDs[4])}
        >
          <CheckBox
            style={{
              backgroundColor: !this.state["set_" + checkBoxIDs[4]]
                ? colors.whiteTransparent
                : this.state["color_" + checkBoxIDs[4]]
            }}
          />
          <CheckBoxText>{GESTAO}</CheckBoxText>
        </ViewCheckBox>

        <ViewCheckBox
          onStartShouldSetResponder={() => true}
          onResponderStart={e => this.onTouch(checkBoxIDs[5])}
        >
          <CheckBox
            style={{
              backgroundColor: !this.state["set_" + checkBoxIDs[5]]
                ? colors.whiteTransparent
                : this.state["color_" + checkBoxIDs[5]]
            }}
          />
          <CheckBoxText>{MARKETING}</CheckBoxText>
        </ViewCheckBox>

        <ButtonLogin onPress={this.goDash}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <TextLogin>{CONTINUAR}</TextLogin>
          )}
        </ButtonLogin>

        <ErrorText>
          {error && "Ops... Escolha pelo menos uma preferência"}
        </ErrorText>
      </Content>
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
)(Preferences);
