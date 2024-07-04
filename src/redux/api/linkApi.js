import { baseApi } from "./baseApi";

export const linkApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAlllink: build.query({
            query: () => {
                return {
                    url: `/link`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const {
 useGetAlllinkQuery
} = linkApi;