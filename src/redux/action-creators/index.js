import {CHANGE_USER, DELETE_USER, SET_USERS} from "../action-types";

export const setUsers = (users) => ({type: SET_USERS, payload: users})
export const deleteUser = (id) => ({type: DELETE_USER, payload: id})
export const changeUser = (userData) => ({type: CHANGE_USER, payload: userData})

export const fetchUsers = () => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    dispatch(setUsers(users));
}

