import React, {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addInput, removeInput} from "./redux/action-creators";


export default function App() {
    const userOptions = useSelector((state) => state.userInput);
    const dispatch = useDispatch();

    let myForm = useRef();
    let mySelect = useRef();

    console.log(userOptions);

    // const refreshSelect = () => {
    //     for (const string of userOptions) {
    //         console.log(document.querySelector('mySelect'));
    //     }
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        const currentInput = myForm.current.userText.value;
        console.log(currentInput);
        dispatch(addInput(currentInput));
    }

    const deleteBtnHandler = (e) => {
        e.preventDefault();
        const currentOptionIndex = mySelect.current.options.selectedIndex;
        const stringToDelete = mySelect.current.options[currentOptionIndex].value;
        dispatch(removeInput(stringToDelete));
    }

    return (
        <div className="App">
            <form name={'myForm'} ref={myForm} onSubmit={submitHandler}>
                <input type="text" name={'userText'}/>
                <input type={'submit'}/>
            </form>

            <form name={'userInputsForm'}>
                <select name="strings" ref={mySelect}>
                    {userOptions.map(input => (<option value={input} key={input}>{input}</option>))}
                </select>
                <button onClick={deleteBtnHandler}>Delete</button>
            </form>
        </div>
    );
}
