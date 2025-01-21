import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex-direction: row;
  padding-top: ${({theme}) => theme.spacing.medium}px;
  align-items: center;
`;

const InputContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.textSecondary};
`;

const Icon = styled(Image)`
  margin-left: 10px;
  height: 20px;
  width: 20px;
`;

const Input = styled(TextInput)`
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.info};
  border-radius: 8px;
  padding-vertical: 10px;
  padding-horizontal: 16px;
  margin-left: 10px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.lightBlue};
`;

const ButtonText = styled(Text)`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: 16px;
  font-weight: regular;
`;

export {Container, InputContainer, Icon, Input, Button, ButtonText};
