import { baseApi } from "./baseApi";

export const projectApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllProject: build.query({
            query: () => {
                return {
                    url: '/project',
                    method: 'GET',
                };
            },
            providesTags: ["getAllProject"],
        }),
        getSingleProject: build.query({
            query: (id) => {
                return {
                    url: `/project/${id}`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const {
    useGetAllProjectQuery,
    useGetSingleProjectQuery
} = projectApi;