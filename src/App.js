import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./redux/action-creators";
import User from "./components/user";


export default function App() {
    const usersArray = useSelector((state) => state.usersArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log(usersArray);

    return (
        <div className="App">
            {usersArray.map((value) => <User item={value} key = {value.id}/>)}
        </div>
    );
}
