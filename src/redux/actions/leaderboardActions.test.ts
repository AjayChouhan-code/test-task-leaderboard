import {SET_LEADERBOARD} from '../../constants/actionTypes';
import {setLeaderboard} from './leaderboardActions';

describe('setLeaderboard action creator', () => {
  it('should create an action with type SET_LEADERBOARD', () => {
    const action = setLeaderboard();
    expect(action).toEqual({
      type: SET_LEADERBOARD,
    });
  });
});
