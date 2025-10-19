import React, { useEffect } from "react";
import { fetchError, fetchSuccess, fetchStart, addUser, fetchUsers } from "./userReducer";
import { useDispatch, useSelector } from 'react-redux'


const UserComponnet = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user) //useSelector will run every time the store updates means even though the other state update it do a check prev === current if yes it not update the state, 
    //but when we use some filtering or maping thing then it will return new obj everytime so that time we need memozie the thing use reselect
    // import { createSelector } from "reselect";

    // const selectUsers = state => state.user.users;

    // export const selectActiveUsers = createSelector(
    //     [selectUsers],
    //     (users) => users.filter(u => u.active)
    // );
    // create



    //    withoutasync -thunk
    // useEffect(() => {
    //     const getUsers = async () => {
    //         dispatch(fetchStart());
    //         try {
    //             const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //             const data = await res.json();
    //             dispatch(fetchSuccess(data));
    //         } catch (err) {
    //             dispatch(fetchError(err.message));
    //         }
    //     };
    //     getUsers();
    // }, [dispatch]);

    //with async-thunk



    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    console.log(state)
    return <div>UserComponnet</div>;
};

export default UserComponnet;
