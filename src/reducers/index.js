/*
 * @Author: puck.solo 
 * @Date: 2017-10-11 00:18:13 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2020-11-02 22:24:21
 */
import { combineReducers } from 'redux';
import loginError from './loginError';
import usernameInput from './usernameInput';
import passwordInput from './passwordInput';
import globalError from './globalError';
import oauthAppName from './oauthAppName';

const AppReducers = combineReducers({
  loginError,
  usernameInput,
  passwordInput,
  globalError,
  oauthAppName,
});

export default AppReducers;
