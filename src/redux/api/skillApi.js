import { baseApi } from "./baseApi";

export const skillApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allSkill: build.query({
            query: () => {
                return {
                    url: '/skill',
                    method: 'GET',
                };
            },
            providesTags: ["allSkill"],
        }),
    }),
});

export const {
    useAllSkillQuery,
} = skillApi;