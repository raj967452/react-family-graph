import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initState = user ? { loggedin: true, user } : { loggedin: true, user: null };

export function authentication(state = initState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}
