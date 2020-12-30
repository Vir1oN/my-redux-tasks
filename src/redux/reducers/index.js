import {SET_USERS, DELETE_USER, CHANGE_USER} from '../action-types/index'

const initialState = {
    usersArray: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SET_USERS: {
            return {...state, usersArray: action.payload};
        }
        case DELETE_USER: {
            let currentArr = state.usersArray;
            currentArr.splice(currentArr.findIndex(user => user.id === action.payload), 1);

            return {...state, usersArray: [...currentArr]}
        }

        case CHANGE_USER: {
            let {id, name, username, email} = action.payload;
            let currentArr = state.usersArray;

            let userToChange =  currentArr.find(user => user.id === id);
            [userToChange.name, userToChange.username, userToChange.email] = [name, username, email];

            return {...state, usersArray: [...currentArr]};
        }

        default: {
            return {...state};
        }
    }
}