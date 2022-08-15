import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ListJobsReducer from './ListJobsReducer';

export default combineReducers({
  AuthReducer,
  ListJobsReducer,
});
