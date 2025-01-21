import {SET_LEADERBOARD} from '../../constants/actionTypes';
import {leaderboard} from '../../database';
import {LeaderboardState} from '../../interfaces';

const initialState: LeaderboardState = {
  leaderboard: {},
};

export const leaderboardReducer = (
  state = initialState,
  action: {type: string},
): LeaderboardState => {
  switch (action.type) {
    case SET_LEADERBOARD:
      return {
        ...state,
        leaderboard: leaderboard || {},
      };
    default:
      return state;
  }
};
