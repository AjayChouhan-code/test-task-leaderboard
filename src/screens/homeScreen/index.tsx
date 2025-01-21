import React, {useState, useEffect} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {setLeaderboard} from '../../redux/actions/leaderboardActions';
import {appText} from '../../constants/appText';
import {SearchBar, UserTable} from '../../components';
import {RootState, User} from '../../interfaces';
import {ButtonRow, ButtonStyled, ButtonText, Container} from './styled';
import {buttons} from '../../constants/appData';

export const HomeScreen: React.FC = () => {
  const leaderboard = useSelector(
    (state: RootState) => state.leaderboardReducer.leaderboard,
  );

  const [searchedUsername, setSearchedUsername] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isActive, setIsActive] = useState<number | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLeaderboard());
  }, [dispatch]);

  useEffect(() => {
    username === '' && setFilteredUsers(allUsers);
    setSearchedUsername(username);
    setIsActive(null);
  }, [username]);

  useEffect(() => {
    setIsActive(null);
    if (!leaderboard) return;

    const users = Object.values(leaderboard) as User[];

    const sortedUsers = [...users].sort((a, b) => {
      if (b.bananas === a.bananas) {
        return a.name.localeCompare(b.name);
      }
      return (b.bananas || 0) - (a.bananas || 0);
    });

    const usersWithRank = users.map(user => ({
      ...user,
      rank:
        sortedUsers.findIndex(
          sortedUser => sortedUser.bananas === user.bananas,
        ) + 1,
    }));

    setAllUsers(usersWithRank);
    setFilteredUsers(usersWithRank);
  }, [leaderboard]);

  const handleSearch = (username: string): void => {
    Keyboard.dismiss();
    const trimmedUsername = username.trim();
    setSearchedUsername(trimmedUsername);

    if (!trimmedUsername) {
      Alert.alert(appText.error, appText.pleasseEnterUsername);
      setFilteredUsers(allUsers);
      return;
    }

    const matchedUser = allUsers.find(
      user => user.name?.toLowerCase() === trimmedUsername.toLowerCase(),
    );

    if (!matchedUser) {
      Alert.alert(
        appText.error,
        `'${username}' ${appText.usernameDoesNotExist}`,
      );
      setFilteredUsers(allUsers);
      return;
    }
    setIsActive(null);
    const topUsers = [...allUsers]
      .sort((a, b) => (b.bananas || 0) - (a.bananas || 0))
      .slice(0, 10);

    const isUserInTop10 = topUsers.some(
      user =>
        user.name?.toLowerCase().trim() ===
        matchedUser.name?.toLowerCase().trim(),
    );

    if (isUserInTop10) {
      setFilteredUsers(topUsers);
    } else {
      const top9Users = topUsers.slice(0, 9);
      const updatedUsers = [...top9Users, matchedUser];
      setFilteredUsers(updatedUsers);
    }
  };

  const toggleRankView = (id: number) => {
    setIsActive(id);
    switch (id) {
      case 0: {
        const sortedUsers = [...allUsers].sort(
          (a, b) => (b.bananas || 0) - (a.bananas || 0),
        );
        setFilteredUsers(sortedUsers);
        break;
      }
      case 1: {
        const sortedUsers = allUsers.sort((a, b) => {
          if (a.bananas !== b.bananas) {
            return (a.bananas || 0) - (b.bananas || 0);
          }
          return a.name.localeCompare(b.name);
        });
        setFilteredUsers(sortedUsers);
        break;
      }
      case 2: {
        const sortedUsers = [...allUsers].sort((a, b) =>
          a.name.localeCompare(b.name),
        );

        setFilteredUsers(sortedUsers);
        break;
      }
      case 3: {
        const sortedUsers = [...allUsers].sort(
          (a, b) => (b.bananas || 0) - (a.bananas || 0),
        );
        setFilteredUsers(sortedUsers);
        break;
      }
    }
  };

  return (
    <Container>
      <SearchBar
        onChangeText={text => setUsername(text)}
        onSearch={handleSearch}
      />
      <ButtonRow>
        {buttons.map(item => {
          let isButtonActive = isActive === item.id;
          let isDisabled = searchedUsername !== '';
          return (
            <ButtonStyled
              key={item.id}
              onPress={() => toggleRankView(item.id)}
              isActive={isButtonActive}
              disabled={isDisabled}>
              <ButtonText disabled={isDisabled}>{item.title}</ButtonText>
            </ButtonStyled>
          );
        })}
      </ButtonRow>
      <UserTable users={filteredUsers} searchedUser={searchedUsername} />
    </Container>
  );
};

export default HomeScreen;
