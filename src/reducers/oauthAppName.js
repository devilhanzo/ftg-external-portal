/*
 * @Author: puck.solo 
 * @Date: 2017-10-12 11:48:33 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-20 02:01:35
 */
const oauthAppName = (state = '', action) => {
    switch (action.type) {
        case 'SET_OAUTH_APP_NAME':
            return action.appName;
        // case 'CLEAR_LOGIN_INPUT_ERROR':
        //     return action.loginResult;
        default:
            return state;
    }
};

export default oauthAppName;
