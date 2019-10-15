import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';

const authReducer = combineReducers({
  LoginReducer,
});

export default authReducer;
