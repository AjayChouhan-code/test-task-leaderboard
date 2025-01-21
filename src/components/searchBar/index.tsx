import React, {useState} from 'react';

import {appText} from '../../constants/appText';
import {Images} from '../../assets/images';
import {SearchBarProps} from '../../interfaces';
import {
  Button,
  ButtonText,
  Container,
  Icon,
  Input,
  InputContainer,
} from './styled';

export const SearchBar: React.FC<SearchBarProps> = ({
  onChangeText,
  onSearch,
}) => {
  const [username, setUsername] = useState<string>('');

  const handleInputChange = (text: string) => {
    setUsername(text);
    onChangeText?.(text);
  };

  const handleSearchClick = () => {
    onSearch?.(username);
  };

  return (
    <Container>
      <InputContainer>
        <Icon source={Images.searchImg} />
        <Input
          placeholder={appText.enterUsername}
          value={username}
          onChangeText={handleInputChange}
        />
      </InputContainer>
      <Button onPress={handleSearchClick}>
        <ButtonText>{appText.search}</ButtonText>
      </Button>
    </Container>
  );
};
