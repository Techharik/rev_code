import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action (like thunk)
export const fetchUsers = createAsyncThunk("user/fetchUsers", async (_, thunkAPI) => {
    try {
        const res = await fetch("https://fakestoreapi.com/producs");

        // manually check status code
        if (!res.ok) {
            // return a rejected action with custom payload
            return thunkAPI.rejectWithValue({ status: res.status, message: "Failed to fetch users" });
        }

        const data = await res.json();
        return data; // this becomes action.payload in fulfilled
    } catch (err) {
        // network error, etc.
        return thunkAPI.rejectWithValue({ message: err.message + 'done' });
    }
});

const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            users: [],
            loading: false,
            error: null,
        },
        reducers: {
            addUser: (state, action) => {
                state.users.push(action.payload); // Immer handles immutability
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchUsers.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.users = action.payload;
                })
                .addCase(fetchUsers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload ? action.payload : action.error.message;
                });
        },
    });

export const { addUser } = userSlice.actions;
export default userSlice.reducer;


// Summary --
// mutable -- underthe hood immutable --confgure store instead of createStore , createSlice and export as reducer userSlice.reducer
// create a actions -- if you have a mannual reducers userSlice.actions
// create a createAsyncThunk --- for network calls , use thunkAPI.rejectWithValue() for custom payload error .
