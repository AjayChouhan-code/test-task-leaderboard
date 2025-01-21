import {createStore, combineReducers} from 'redux';
import {leaderboardReducer} from './reducers/leaderboardReducer';

const rootReducer = combineReducers({
  leaderboardReducer: leaderboardReducer,
});

export const store = createStore(rootReducer);
