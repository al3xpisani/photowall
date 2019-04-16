import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

import { TextField } from "react-native-material-textfield";

export const InputTextLogin = styled(TextField).attrs({
  textColor: "#fff",
  baseColor: "#fff",

  textColor: "#fff",
  baseColor: "#fff",
  tintColor: "#d55f70",
  labelFontSize: 18,
  fontSize: 16,
  inputContainerPadding: 10
})``;

export const InputTextSenha = styled(TextField).attrs({
  secureTextEntry: true,
  textColor: "#fff",
  baseColor: "#fff",
  tintColor: "#d55f70",
  labelFontSize: 18,
  fontSize: 16,
  inputContainerPadding: 10
})``;

export const View = styled.View`
  flex: 1;
  background: #22202b;
  justify-content: center;
  align-items: center;
  padding: ${metrics.basePadding * 2}px;
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

export const ViewLogin = styled.View`
  width: 100%;
  align-content: flex-start;
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

export const ButtonLogin = styled.TouchableOpacity`
  border-radius: 35;
  background-color: #d55f70;
  align-items: center;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin * 4}px;
`;

export const TextLogin = styled.Text`
  color: ${colors.white};
  font-family: Helvetica-Bold;
  font-size: 16;
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
