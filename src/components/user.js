import {useDispatch} from "react-redux";
import {deleteUser} from "../redux/action-creators";
import {useState} from 'react'
import UserInput from "./userInput";

export default function User (props){
    const {item} = props;
    const dispatch = useDispatch();
    const [displayInputWindow, setDisplayInputWindow] = useState(false);

    const deleteBtnHandler = (e) => {
        e.preventDefault();
        dispatch(deleteUser(item.id));
    }

    const editBtnHandler = (e) => {
        e.preventDefault();
        setDisplayInputWindow(true);
    }

    return (
        <div className={'user'}>
            <h2>{item.name}: {item.username} -- {item.email}</h2>
            <button onClick={deleteBtnHandler}>Delete</button>
            <button onClick={editBtnHandler}>Edit</button>
            {displayInputWindow && <UserInput item = {item}/>}
        </div>
    );
}