import {leaderboardReducer} from './leaderboardReducer';
import {SET_LEADERBOARD} from '../../constants/actionTypes';
import {LeaderboardState} from '../../interfaces';

jest.mock('../../database', () => ({
  leaderboard: {},
}));

describe('leaderboardReducer', () => {
  const initialState: LeaderboardState = {
    leaderboard: {},
  };
  beforeEach(() => {
    jest.resetModules();
  });

  it('should return the initial state when no action is passed', () => {
    expect(leaderboardReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should handle SET_LEADERBOARD with empty leaderboard from the database', () => {
    jest.mock('../../database', () => ({
      leaderboard: {},
    }));
    const action = {type: SET_LEADERBOARD};
    const newState = leaderboardReducer(initialState, action);
    expect(newState.leaderboard).toEqual({});
  });

  it('should return the current state for unrecognized action types', () => {
    const action = {type: 'UNKNOWN_ACTION'};
    const currentState = {
      leaderboard: {
        user1: {score: 100, rank: 1},
      },
    };
    
    const newState = leaderboardReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });
});
