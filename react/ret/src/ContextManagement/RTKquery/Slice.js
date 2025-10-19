// userApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        // GET all users
        getUsers: builder.query({
            query: () => "users",
            // providesTags: (result) =>
            //     result
            //         ? [
            //             ...result.map((user) => ({ type: "User", id: user.id })), // per user
            //             { type: "User", id: "LIST" },                             // list
            //         ]
            //         : [{ type: "User", id: "LIST" }],
            providesTags: ['users']
        }),

        // GET single user
        getUser: builder.query({
            query: (id) => `users/${id}`,
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),

        // ADD user
        addUser: builder.mutation({
            query: (newUser) => ({ url: "users", method: "POST", body: newUser }),
            invalidatesTags: [{ type: "User", id: "LIST" }], // triggers getUsers refetch
        }),

        // UPDATE user
        updateUser: builder.mutation({
            query: ({ id, ...data }) => ({ url: `users/${id}`, method: "PUT", body: data }),
            invalidatesTags: (result, error, { id }) => [{ type: "User", id }], // triggers getUser refetch
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
} = userApi;
