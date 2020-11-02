/*
 * @Author: puck.solo 
 * @Date: 2017-10-11 00:02:10 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2020-11-02 22:57:56
 */
// Redux Action
export const setGlobalErrorMessage = errorMessage => ({
    type: 'SET_GLOBAL_ERROR_MESSAGE',
    errorMessage,
  });

export const clearGlobalErrorMessage = () => ({
    type: 'CLEAR_GLOBAL_ERROR_MESSAGE',
    errorMessage: '',
  });

export const setLoginInputError = loginResult => ({
    type: 'SET_LOGIN_INPUT_ERROR',
    loginResult,
  });

export const clearLoginInputError = () => ({
    type: 'CLEAR_LOGIN_INPUT_ERROR',
    loginResult: { inputError: '', inputErrorMessage: '' },
  });

export const loginUsernameInputChange = inputValue => ({
    type: 'LOGIN_USERNAME_INPUT_CHANGE',
    inputValue,
  });

export const loginPasswordInputChange = inputValue => ({
    type: 'LOGIN_PASSWORD_INPUT_CHANGE',
    inputValue,
  });

export const setOauthAppName = appName => ({
    type: 'SET_OAUTH_APP_NAME',
    appName,
  });
