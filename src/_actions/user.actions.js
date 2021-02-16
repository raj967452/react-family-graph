import { userConstants } from '../_constants';
import { userService } from "../_services";
import { alertActions } from './';


export const userActions = { getFamilyTree };

function getFamilyTree(id) {
    return dispatch => {
        dispatch(request());
        userService.getUserFamilyById(id).then(
            data => { 
                dispatch(success(data)) 
            }, error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            });
    };
    function request() { return { type: userConstants.GETUSERTREE_REQUEST } }
    function success(data) { return { type: userConstants.GETUSERTREE_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GETUSERTREE_FAILURE, error } }
}