import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions} from '../../_actions';


function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);

    const dispatch = useDispatch();
    const location = useLocation();
    // reset login status
    useEffect(() => { dispatch(authActions.logout()); }, []);

    function handleChanges(event) {
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        if (username && password) {
            const { from } = location.state || { from: { pathname: '/' } };
            dispatch(authActions.login(username, password, from));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 p-3">
            <div className="col-lg-6 card p-5">
                <h2>Login</h2>
                <div className="form-center">
                    <form name="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username: </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChanges}
                                className={'form-control ' + (submitted && !username ? 'is-invalid' : "")}
                            />
                            {submitted && !username && <div className="invalid-feedback">Username is required</div>}
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChanges}
                                className={'form-control ' + (submitted && !password ? 'is-invalid' : "")}
                            />
                            {submitted && !password && <div className="invalid-feedback">Password is required</div>}
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                            <Link to="/register" className="btn btn-link">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { LoginPage };