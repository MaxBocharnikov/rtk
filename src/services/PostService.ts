import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../types/post';


export const postAPi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], number>({
            query: (limit = 5) => ({
                url: 'posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: builder.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post'],
        }),
        updatePost: builder.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post'],
        }),
        deletePost: builder.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: `posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Post'],
        })
    }),
})
