import {useDispatch} from "react-redux";
import {useRef} from 'react'
import {changeUser} from "../redux/action-creators";
export default function UserInput (props){
    const {item} = props;
    const dispatch = useDispatch();

    const myForm = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        let {name: {value: name}, username: {value: username}, email: {value: email}} = myForm.current;
        dispatch(changeUser({id: item.id, name, username, email}))
    }

    return (
        <div>
            <form name = {'UserInput'} ref={myForm}>
                <div>Name: <input type="text" name={'name'}/></div>
                <div>Nickname: <input type="text" name={'username'}/></div>
                <div>Email: <input type="text" name={'email'}/></div>
                <input type="submit" onClick={submitHandler}/>
            </form>
        </div>
    );
}