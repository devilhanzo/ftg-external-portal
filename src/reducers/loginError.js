/*
 * @Author: puck.solo 
 * @Date: 2017-10-11 00:55:23 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-20 01:46:06
 */
const loginError = (state = {
    inputError: '',
    inputErrorMessage: '',
    }, action) => {
    switch (action.type) {
        case 'SET_LOGIN_INPUT_ERROR':
            return action.loginResult;
        case 'CLEAR_LOGIN_INPUT_ERROR':
            return action.loginResult;
        default:
            return state;
    }
};

export default loginError;
