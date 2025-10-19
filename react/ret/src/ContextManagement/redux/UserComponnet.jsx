import React, { useEffect, useState } from "react";
// import { fetchError, fetchSuccess, fetchStart, addUser, fetchUsers } from "./userReducer";

import { useDispatch, useSelector } from 'react-redux'
import { useGetUserQuery, useGetUsersQuery, useUpdateUserMutation } from "../RTKquery/Slice";
// import { fetchUsers } from "../reduxtoolkit/userSlice";


const UserComponnet = () => {
    const dispatch = useDispatch();
    // const state = useSelector((state) => state.user) //useSelector will run every time the store updates means even though the other state update it do a check prev === current if yes it not update the state, 
    //but when we use some filtering or maping thing then it will return new obj everytime so that time we need memozie the thing use reselect
    // import { createSelector } from "reselect";
    const datas = useGetUsersQuery();
    console.log(datas)
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

    const [userId, setUserId] = useState(null);

    // hook always declared at top-level
    const { data, isFetching, isSuccess } = useGetUserQuery(userId, {
        skip: !userId, // only run when userId is set
    });

    const [updateUser, { isLoading }] = useUpdateUserMutation()
    useEffect(() => {
        // dispatch(fetchUsers())
    }, [dispatch])

    const onHandleUpdate = async () => {
        await updateUser({ id: 4, name: "Updated Name" });

    }

    // console.log(state)
    return <div>
        <div>
            {datas?.data?.map((n) => <h1>{n.name}</h1>)}
        </div>
        <button onClick={() => setUserId(4)}>Get ID</button>

        {isFetching && <p>Loading...</p>}
        {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}


        <div>
            <button onClick={onHandleUpdate}>Update</button>
        </div>
    </div>;
};

export default UserComponnet;
