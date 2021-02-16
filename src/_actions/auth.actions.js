import { userConstants } from '../_constants';
import { authenticationService } from "../_services";
import { alertActions } from './';
import { history } from '../_utils';

export const authActions = { login, logout, register };

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));
        authenticationService.login(username, password)
            .then(user => {
                dispatch(success(user));
                history.push(from);
            }, error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}

function logout() {
    authenticationService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        authenticationService.register(user)
            .then(user => {
                dispatch(success());
                history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            }, error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            });
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}