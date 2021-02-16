import { authHeader, handleResponse } from '../_utils';
export const userService = { getUserFamilyById };


async function getUserFamilyById(id) {
    const requestBody = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch('/user', requestBody);
    const treeData = await handleResponse(response);
    return JSON.parse(treeData);
}
