import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TreeModal } from './TreeModal';
const MODAL_COMPONENTS = {
    'TreeModal': TreeModal
}

const ModalRoot = ({hideModal}) => {
    const dispatch = useDispatch();
    const { modalProps, modalType } = useSelector(state => state.modal, []);

    if (!modalType) {
        return null
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    let styles = (modalProps.open) ? { display: "block" } : { display: "none" };

    if ((document && document.body) && (modalProps.open)) {
        const orig = document.body.className;
        document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
    }
    //const closeModal = () => dispatch(modalProps.hideModal);

    return (
        <Fragment>
            <div
                id="myModal"
                className="modal fade in show"
                role="dialog"
                style={styles}
            >
                <SpecificModal hideModal={() => dispatch(hideModal())} {...modalProps} />
            </div>
            <div className="modal-backdrop fade show"></div>
        </Fragment>
    );

}

export { ModalRoot };