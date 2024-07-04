import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllblog: build.query({
            query: () => {
                return {
                    url: '/blog',
                    method: 'GET',
                };
            },
            providesTags: ["getAllblog"],
        }),

    }),
});

export const {
    useGetAllblogQuery,
} = blogApi;