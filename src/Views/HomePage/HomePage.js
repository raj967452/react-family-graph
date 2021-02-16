import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Tree from 'react-d3-tree';

import logo from '../../logo.svg';
import { authActions, userActions } from '../../_actions';
import { useCenteredTree, renderForeignObjectNode } from '../../_utils';
import { Modal } from '../../_components';

const containerStyles = {
    width: 'calc(100vw - 3rem)',
    height: 'calc(90vh - 3rem)'
};

function HomePage(props) {
    const user = useSelector(state => state.authentication.user, []);
    const [translate, containerRef] = useCenteredTree();

    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 25 };
    const dispatch = useDispatch();
    useEffect(() => { dispatch(userActions.getFamilyTree(user.id)); }, []);
    const userFamilyTree = useSelector(state => state.userFamilyTree);

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <header className="App-header">
                    <Link to="/" className="flex-grow-1"><img src={logo} className="App-logo" alt="logo" /></Link>
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
                                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                                }
                                allowForeignObjects                                
                            />
                        </div>}
                </div>
            </div>
        </Fragment>
    );
}

export { HomePage };