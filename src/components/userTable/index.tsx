import React from 'react';
import {ScrollView} from 'react-native';

import {appText} from '../../constants/appText';
import {UserTableProps} from '../../interfaces';
import {Cell, HeaderCell, HeaderRow, Row, Table} from './styled';

export const UserTable: React.FC<UserTableProps> = ({
  users = [],
  searchedUser,
}) => {
  return (
    <Table>
      <HeaderRow isHighlighted={false}>
        <HeaderCell>{appText.name}</HeaderCell>
        <HeaderCell>{appText.rank}</HeaderCell>
        <HeaderCell>{appText.bananas}</HeaderCell>
      </HeaderRow>
      <ScrollView>
        {users
          .filter(user => user.name)
          .map((user, i) => {
            const isHighlighted =
              user.name.toLowerCase() === searchedUser.toLowerCase();
            return (
              <Row key={i} isHighlighted={isHighlighted}>
                <Cell>{user.name}</Cell>
                <Cell>{user.rank}</Cell>
                <Cell>{user.bananas}</Cell>
              </Row>
            );
          })}
      </ScrollView>
    </Table>
  );
};
