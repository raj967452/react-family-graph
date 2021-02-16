import { userConstants } from '../_constants';

const initData = {
    data : {},
    loading: false
};
export function userFamilyTree(state = initData, action) {
    switch (action.type) {
        case userConstants.GETUSERTREE_SUCCESS:
            return { 
                loading: false,
                data: action.data.familyData 
            };
        case userConstants.GETUSERTREE_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETUSERTREE_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}