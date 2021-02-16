import { handleResponse } from '../_utils';
export const authenticationService = { login, logout, register };

async function login(username, password) {
    const requestBody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    const response = await fetch(`/users/authenticate`, requestBody);
    const user = await handleResponse(response);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function logout() {
    localStorage.removeItem('user');
}

async function register(user) {
    const requestBody = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    const response = await fetch(`/users/register`, requestBody);
    return handleResponse(response);
}