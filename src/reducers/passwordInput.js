/*
 * @Author: puck.solo 
 * @Date: 2017-10-11 13:42:57 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-20 00:21:59
 */
const passwordInput = (state = '', action) => {
    switch (action.type) {
        case 'LOGIN_PASSWORD_INPUT_CHANGE':
            return action.inputValue;
        default:
            return state;
    }
};

export default passwordInput;
