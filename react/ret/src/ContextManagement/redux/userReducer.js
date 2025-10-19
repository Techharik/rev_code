import { data } from "react-router";

const initialState = {
    data: [],
    loading: false,
    error: false
}

//ActionTypes
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_USER = "ADD_USER";

//reducers
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };
        case ADD_USER:
            return { ...state, data: [...state.data, action.payload] };
        default:
            return state;
    }
};

//Actions
export const fetchStart = () => ({ type: FETCH_START });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchError = (err) => ({ type: FETCH_ERROR, payload: err });
// export const addUser = (user) => ({ type: ADD_USER, payload: user });

//When we use thunk we can use the action and thunk with dispatch outside the componnet:


// --- Async Actions using Thunk ---

export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: FETCH_START });
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err.message });
    }
};

export const addUser = (newUser) => async (dispatch) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });
        const data = await res.json();
        dispatch({ type: ADD_USER, payload: data });
    } catch (err) {
        console.error("POST Error:", err);
    }
};
