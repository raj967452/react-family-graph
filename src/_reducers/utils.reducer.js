import { utilsConstant } from '../_constants';

const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}


export function modal(state = initialState, action) {
    switch (action.type) {
        case utilsConstant.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            };
        case utilsConstant.HIDE_MODAL:
            return initialState;
        default:
            return state
    }
}