import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    userId: null,
    id: null,
    title: "",
    completed: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODO": {
            return action.payload;
        }
        case "CHANGE_TODO_STATUS": {
            return {
                ...state,
                completed: !state.completed
            };
        }
        case "CHANGE_TODO_TITLE": {
            return {
                ...state,
                title: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
