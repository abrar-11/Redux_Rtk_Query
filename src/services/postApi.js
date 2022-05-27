import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),

    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => {
                return "users?_limit=10";
            },
        }),
        getUserbyid: builder.query({
            query: (id) => ({
                url: `users/${id}`,
                method: "GET",
            }),
        }),
        deleteUserById: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE",
            }),
        }),

        createUser: builder.mutation({
            query: () => ({
                url: "users",
                method: "POST",
                body: {
                    id: 20,
                    name: "John Cena",
                    username: "Bret",
                    email: "Sincere@april.biz",
                   
                   
                },

                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
        }),
    }),
});

export const {
    useGetUserQuery,
    useGetUserbyidQuery,
    useDeleteUserByIdMutation,
    useCreateUserMutation,
} = postApi;
