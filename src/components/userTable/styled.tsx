import {Text, View} from 'react-native';
import styled from 'styled-components';

const Table = styled(View)`
  margin-top: ${({theme}) => theme.spacing.medium}px;
  width: 100%;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.textSecondary};
`;

const Row = styled(View)<{isHighlighted: boolean}>`
  flex-direction: row;
  justify-content: space-around;
  padding-vertical: ${({theme}) => theme.spacing.small}px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  background-color: ${({isHighlighted, theme}) =>
    isHighlighted ? theme.colors.primary : 'transparent'};
`;

const HeaderRow = styled(Row)`
  background-color: ${({theme}) => theme.colors.secondary};
`;

const Cell = styled(Text)`
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textPrimary};
`;

const HeaderCell = styled(Cell)`
  font-weight: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

export {Table, Row, HeaderRow, Cell, HeaderCell};
