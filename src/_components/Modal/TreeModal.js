import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { utilsActions } from '../../_actions';
import { CardView } from '../../_components';

export const TreeModal = ({ hideModal, ...props }) => {
    const nodeDatum = { ...props.nodeDatum };
    console.log(document );
    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-body">
                    <CardView {...nodeDatum} />
                </div>
                <div className="modal-footer">
                    <button
                        onClick={hideModal}
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal">
                        Close
                        </button>
                </div>
            </div>
        </div>
    )
}