import React, {  useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";



export default function App() {
    const [counter, setCounter] = useState(1);
    const todo = useSelector(todo => todo);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: "SET_TODO", payload: json });
            });
    }, [counter]);

    const onClickHandler = () => setCounter((prev) => prev + 1);
    const onStatusChange = () => dispatch({ type: "CHANGE_TODO_STATUS" });
    const onTitleChange = () => dispatch({ type: "CHANGE_TODO_TITLE", payload: Math.random() });

    return (
        <div className="App">
            <button onClick={onClickHandler}>inc</button>
            <button onClick={onStatusChange}>change todo status</button>
            <button onClick={onTitleChange}>change todo title</button>

            <h1>Counter value: {counter}</h1>
            {!!todo && (
                <>
                    <h2>{todo.id}</h2>
                    <h2>{todo.title}</h2>
                    <h2>{todo.completed.toString()}</h2>
                </>
            )}
        </div>
    );
}
