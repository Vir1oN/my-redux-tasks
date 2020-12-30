import {ADD_INPUT, REMOVE_INPUT }   from '../action-types/index'

const initialState = {
    usersArray: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        default: {
            return {...state};
        }
    }
}