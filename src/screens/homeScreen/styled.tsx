import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  padding: 5px;
`;

const ButtonRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: ${({theme}) => theme.spacing.medium}px;
`;

const ButtonStyled = styled(TouchableOpacity)<{
  isActive: boolean;
  disabled: boolean;
}>`
  flex: 1;
  padding-vertical: 6px;
  border-radius: 8px;
  background-color: ${({isActive, disabled, theme}) =>
    isActive
      ? theme.colors.skyBlue
      : disabled
      ? theme.colors.lightGray
      : theme.colors.lightBlue};
  align-items: center;
  justify-content: center;
  margin-horizontal: 2px;
  padding-horizontal: 2px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.lightBackground};
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const ButtonText = styled(Text)<{disabled: boolean}>`
  color: ${({disabled, theme}) =>
    disabled ? theme.colors.textMuted : theme.colors.textSecondary};
  font-weight: bold;
`;

export {Container, ButtonRow, ButtonStyled, ButtonText};
