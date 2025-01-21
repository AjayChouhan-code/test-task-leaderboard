export interface User {
  name: string;
  bananas?: number;
  lastDayPlayed?: string;
  longestStreak?: number;
  rank?: number;
  stars?: number;
  subscribed?: boolean;
  uid?: string;
}
export interface UsersState {
  users: {[uid: string]: User};
}

export interface UserTableProps {
  users: User[];
  searchedUser: string;
}
export interface SearchBarProps {
  onSearch: (username: string) => void;
  onChangeText: (username: string) => void;
}
export interface LeaderboardState {
  leaderboard: Record<string, User>;
}
export interface RootState {
  leaderboardReducer: LeaderboardState;
}
