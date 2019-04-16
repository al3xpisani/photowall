import styled from "styled-components/native";

import { colors, metrics } from "~/styles";

export const Content = styled.View`
  flex: 1;
  background: #22202b;
  justify-content: center;
  padding: ${metrics.basePadding}px;
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

export const WelcomeText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 24px;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const ContentText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: ${colors.white};
  line-height: 28px;
  text-align: left;
  opacity: 0.8;
`;

export const PrefText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: ${colors.white};
  text-align: left;
  margin-top: ${metrics.baseMargin * 4}px;
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

export const ErrorText = styled.Text`
  color: ${colors.danger};
  font-size: 14px;
  font-family: Helvetica;
  margin: ${metrics.baseMargin * 2}px;
  text-align: center;
`;
