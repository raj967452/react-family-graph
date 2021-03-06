import React, { useEffect, Fragment, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Tree from 'react-d3-tree';

import logo from '../../logo.svg';
import { userActions, utilsActions } from '../../_actions';
import { useCenteredTree, renderForeignObjectNode } from '../../_utils';
import { ModalRoot } from '../../_components';

const containerStyles = {
    width: 'calc(100vw - 3rem)',
    height: 'calc(90vh - 3rem)'
};

function HomePage() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.authentication.user, []);
    const userFamilyTree = useSelector(state => state.userFamilyTree);
    const ismodalOpen = useSelector(state => state.modal.modalProps.open);
    console.log(ismodalOpen);

    const [translate, containerRef] = useCenteredTree();
    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 25, y: -20 };    

    useEffect(() => { dispatch(userActions.getFamilyTree(user.id)); }, []);   

    const hideModal = () => dispatch(utilsActions.hideModal);
    const showModal = (modalProps, modalType) => {
        dispatch(utilsActions.showModal({ modalProps, modalType }))
    }

    const handleNodeClick = (nodeDatum) => {
        showModal({
            open: true,
            title: 'Family Information of ',
            nodeDatum,
            closeModal: hideModal
        }, 'TreeModal');
    };


    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  py-3">
                <header className="App-header justify-content-between">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <Link to="/login" className="btn btn-outline-primary">Logout</Link>
                </header>
            </nav>
            <div className="container-fluid my-5">
                <div className="col-xs-12">
                    <h6>Family of {user.firstName + user.lastName}</h6>
                    {userFamilyTree.loading && <em>Loading users...</em>}
                    {userFamilyTree.error && <span className="text-danger">ERROR: {userFamilyTree.error}</span>}
                    {userFamilyTree.data &&
                        <div id="treeWrapper" style={containerStyles} ref={containerRef}>
                            <Tree
                                data={userFamilyTree.data}
                                translate={translate}
                                nodeSize={nodeSize}
                                orientation="vertical"
                                renderCustomNodeElement={(rd3tProps) =>
                                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, handleNodeClick })
                                }
                                allowForeignObjects
                            />
                        </div>}
                    {ismodalOpen && <ModalRoot hideModal={hideModal} />}
                </div>
            </div>
        </Fragment>
    );
}


export { HomePage };