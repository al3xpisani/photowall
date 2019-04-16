import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

import { TextField } from "react-native-material-textfield";

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      alignItems: "center"
    };
  }
})`
  flex: 1;
  background: #22202b;
`;

export const ViewMeetup = styled.View`
  width: 100%;
  align-content: flex-start;
  padding-left: ${metrics.baseMargin * 2}px;
  padding-right: ${metrics.baseMargin * 2}px;
`;

export const ViewImagem = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
  border: 2px;
  border-style: dashed;
  border-color: ${colors.whiteTransparent};
  width: 100%;
  height: 100px;
`;

export const IconUploadImage = styled.View``;

export const InputTextTitulo = styled(TextField).attrs({
  textColor: "#fff",
  baseColor: "#fff",

  textColor: "#fff",
  baseColor: "#fff",
  tintColor: "#d55f70",
  labelFontSize: 18,
  fontSize: 16,
  inputContainerPadding: 10
})``;

export const InputTextDescricao = styled(TextField).attrs({
  textColor: "#fff",
  baseColor: "#fff",

  textColor: "#fff",
  baseColor: "#fff",
  tintColor: "#d55f70",
  labelFontSize: 18,
  fontSize: 16,
  inputContainerPadding: 10
})``;

export const InputTextLocalizacao = styled(TextField).attrs({
  secureTextEntry: false,
  textColor: "#fff",
  baseColor: "#fff",
  tintColor: "#d55f70",
  labelFontSize: 18,
  fontSize: 16,
  inputContainerPadding: 10
})``;

export const ViewInputs = styled.View`
  padding-top: ${metrics.basePadding}px;
  padding-bottom: ${metrics.basePadding}px;
`;

export const LoginMessage = styled.Text`
  color: ${colors.danger};
  font-size: 16;
  font-family: Helvetica-Bold;
`;

export const Image = styled.Image`
  width: 48;
  height: 48;
  margin: ${metrics.baseMargin * 4}px;
`;

export const Login = styled.Text`
  color: ${colors.white};
  align-items: flex-start;
  font-size: 16;
  font-family: Helvetica-Bold;
  font-weight: bold;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const LoginInput = styled.TextInput.attrs({
  placeholderTextColor: "#ffffff",
  color: "#ffffff"
})`
  border: 0;
  font-size: 20;
  font-family: Helvetica;
  opacity: 0.5;
  margin-bottom: ${metrics.baseMargin * 4}px;
`;

export const Pwd = styled.Text`
  color: ${colors.white};
  align-items: flex-start;
  font-size: 16;
  font-family: Helvetica-Bold;
  font-weight: bold;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const PwdInput = styled.TextInput.attrs({
  placeholderTextColor: "#ffffff",
  color: "#ffffff"
})`
  border: 0;
  font-size: 20;
  font-family: Helvetica;
  opacity: 0.5;
`;

export const ButtonSalvar = styled.TouchableOpacity`
  border-radius: 35;
  background-color: #d55f70;
  align-items: center;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin * 4}px;
`;

export const TextSalvar = styled.Text`
  color: ${colors.white};
  font-family: Helvetica-Bold;
  font-size: 16;
`;

export const PrefText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: ${colors.white};
  text-align: left;
  margin-top: ${metrics.baseMargin * 3}px;
`;

export const ButtonSignup = styled.TouchableOpacity`
  align-items: center;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin * 4}px;
`;

export const TextSignup = styled.Text`
  color: ${colors.white};
  font-size: 16;
  opacity: 0.6;
  font-family: Helvetica;
`;

export const ViewCheckBox = styled.View`
  margin-top: ${metrics.baseMargin * 2}px;
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled.View.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 190 }
})`
  height: 20px;
  width: 20px;
  border: 0.4px;
  border-color: ${colors.whiteTransparent};
  border-radius: 50px;
`;

export const CheckBoxText = styled.Text`
  margin-left: 10px;
  font-family: Helvetica;
  font-size: 18px;
  color: ${colors.white};
  padding: 0;
`;

export const SignupMessage = styled.Text`
  color: ${colors.danger};
  text-align: center;
  margin-top: ${metrics.baseMargin * 2}px;
  font-size: 16;
  font-family: Helvetica-Bold;
`;
