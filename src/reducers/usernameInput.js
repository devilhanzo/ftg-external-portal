/*
 * @Author: puck.solo 
 * @Date: 2017-10-11 13:42:54 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2020-11-03 01:26:54
 */
const usernameInput = (state = '', action) => {
    switch (action.type) {
        case 'LOGIN_USERNAME_INPUT_CHANGE':
            return action.inputValue;
        default:
            return state;
    }
};

export default usernameInput;

