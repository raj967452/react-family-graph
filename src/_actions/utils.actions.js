import { utilsConstant } from '../_constants';
import { alertActions } from './';

const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
        type: utilsConstant.SHOW_MODAL,
        modalProps,
        modalType
    })
}

const hideModal = () => dispatch => {
    dispatch({
        type: utilsConstant.HIDE_MODAL
    })
}

export const utilsActions = { showModal, hideModal };