import {} from "../action-types";

export const fetchUsers = () => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}