/*
 * @Author: puck.solo 
 * @Date: 2017-10-16 15:10:50 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-19 19:56:55
 */
const globalError = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GLOBAL_ERROR_MESSAGE':
            return action.errorMessage;
        case 'CLEAR_GLOBAL_ERROR_MESSAGE':
            return action.errorMessage;
        default:
            return state;
    }
};

export default globalError;
