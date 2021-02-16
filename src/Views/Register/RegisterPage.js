import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../_actions';


function RegisterPage() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { dispatch(authActions.logout()) }, []);

    function handleChanges(event) {
        const { name, value } = event.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(authActions.register(user));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 p-3">
            <div className="col-lg-6 card p-5">
                <h2>Register</h2>
                <div className="form-center">
                    <form name="register-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={user.firstName}
                                onChange={handleChanges}
                                className={'form-control ' + (submitted && !user.firstName ? 'is-invalid' : "")}
                            />
                            {submitted && !user.firstName && <div className="invalid-feedback">First name is required</div>}
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleChanges}
                                className={'form-control ' + (submitted && !user.lastName ? 'is-invalid' : "")}
                            />
                            {submitted && !user.lastName && <div className="invalid-feedback">Last name is required</div>}
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChanges}
                                className={'form-control ' + (submitted && !user.username ? 'is-invalid' : "")}
                            />
                            {submitted && !user.username && <div className="invalid-feedback">Username is required</div>}
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChanges}
                                className={'form-control ' + (submitted && !user.password ? 'is-invalid' : "")}
                            />
                            {submitted && !user.password && <div className="invalid-feedback">Password is required</div>}
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { RegisterPage };