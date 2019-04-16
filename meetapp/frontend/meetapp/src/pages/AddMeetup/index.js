import PropTypes from "prop-types";
import React, { Component } from "react";
import DatePicker from "react-native-date-picker";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import meetupActions from "~/store/ducks/AddMeetup";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  AppRegistry,
  ActivityIndicator
} from "react-native";
import ImagePicker from "react-native-image-picker";

import Header from "~/components/Header";

import { colors } from "~/styles";

import {
  ScrollView,
  ViewMeetup,
  ViewInputs,
  InputTextTitulo,
  InputTextDescricao,
  InputTextLocalizacao,
  ButtonSalvar,
  PrefText,
  TextSalvar,
  CheckBox,
  ViewCheckBox,
  CheckBoxText,
  ViewImagem,
  SignupMessage
} from "./styles";

import {
  NovaMeetup,
  PHLTitulo,
  PHLDescricao,
  PHLLocalizacao,
  PREFERENCIA,
  SALVAR,
  DEVOPS,
  FRONTEND,
  BACKEND,
  MOBILE,
  GESTAO,
  MARKETING,
  IMAGEM,
  DATAEVENTO,
  MEETUPISRECOMMENDED
} from "react-native-dotenv";

import Icon from "react-native-vector-icons/MaterialIcons";

const tabIcon = ({ tintColor }) => (
  <Icon name="add-box" size={28} color={tintColor} />
);
tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

class AddMeetup extends Component {
  constructor(props) {
    super(props);
    updateColors = [];
    checkBoxIDs = ["CBFE", "CBBE", "CBMB", "CBDO", "CBGT", "CBMK", "CBRC"]; //CBRC Recommended
    this.initializeCheckBoxElements();
  }

  componentDidMount() {
    const date = new Date();
    date.setHours(date.getHours() + 1, date.getMinutes(), 0);
    this.setState({ date });
  }

  state = {
    date: new Date(),
    ImageSource: null,
    title: "",
    description: "",
    local: "",
    meetupLogo: ""
  };

  static navigationOptions = {
    tabBarIcon: tabIcon
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      // console.tron.log("Response = ", response);

      if (response.didCancel) {
        console.tron.log("User cancelled photo picker");
      } else if (response.error) {
        console.tron.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.tron.log("User tapped custom button: ", response.customButton);
      } else {
        //let source = { uri: response.uri };

        // You can also display the image using data:
        let source = { uri: "data:image/jpeg;base64," + response.data };
        //console.tron.log(`response data  ${response.data}`);
        this.setState({
          ImageSource: source,
          meetupLogo: response.data
        });
      }
    });
  }

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

  signUp = async () => {
    const { meetupRequest, meetupFailure, navigation } = this.props;
    const { title, description, local, date, meetupLogo } = this.state;

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
    console.tron.log(`set_CBRC ********** ${updateColors["set_CBRC"]}`);
    await meetupRequest(
      title,
      description,
      local,
      date,
      meetupLogo,
      devops,
      updateColors["set_CBRC"], //manda true ou false se selecionado ou não
      this.state.date,
      navigation
    );
  };

  render() {
    const { title, description, local } = this.state;

    const { error, loading } = this.props.addMeetups;

    return (
      <ScrollView>
        <Header title={NovaMeetup} />

        <ViewMeetup>
          <ViewInputs>
            <InputTextTitulo
              autoCapitalize="none"
              autoCorrect={false}
              label={PHLTitulo}
              value={title}
              onFocus={this.clearLoginErrorMessage}
              onChangeText={e => this.setState({ title: e })}
            />
            <InputTextDescricao
              autoCapitalize="none"
              autoCorrect={false}
              label={PHLDescricao}
              value={description}
              onFocus={this.clearLoginErrorMessage}
              onChangeText={e => this.setState({ description: e })}
            />
            <InputTextLocalizacao
              autoCorrect={false}
              label={PHLLocalizacao}
              value={local}
              onFocus={this.clearLoginErrorMessage}
              onChangeText={e => this.setState({ local: e })}
            />
          </ViewInputs>

          <PrefText>{DATAEVENTO}</PrefText>
          <DatePicker
            style={{
              backgroundColor: colors.whiteTransparent,
              border: 1,
              borderRadius: 1
            }}
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
          />

          <PrefText>{IMAGEM}</PrefText>
          <ViewImagem
            onStartShouldSetResponder={() => true}
            onResponderStart={() => this.selectPhotoTapped()}
          >
            {this.state.ImageSource === null ? (
              <Icon
                name="camera-alt"
                size={28}
                color={colors.whiteTransparent}
              />
            ) : (
              <Image
                source={this.state.ImageSource}
                style={{
                  width: 340,
                  height: 105,
                  borderRadius: 10
                }}
              />
            )}
          </ViewImagem>

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

          <ViewCheckBox
            onStartShouldSetResponder={() => true}
            onResponderStart={e => this.onTouch(checkBoxIDs[6])}
          >
            <CheckBox
              style={{
                backgroundColor: !this.state["set_" + checkBoxIDs[6]]
                  ? colors.whiteTransparent
                  : this.state["color_" + checkBoxIDs[6]]
              }}
            />
            <CheckBoxText>{MEETUPISRECOMMENDED}</CheckBoxText>
          </ViewCheckBox>

          <SignupMessage>{!!error && error}</SignupMessage>
          <ButtonSalvar onPress={this.signUp}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <TextSalvar>{SALVAR}</TextSalvar>
            )}
          </ButtonSalvar>
        </ViewMeetup>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  addMeetups: state.addMeetups
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(meetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMeetup);

//AppRegistry.registerComponent("AddMeetup", () => AddMeetup);
