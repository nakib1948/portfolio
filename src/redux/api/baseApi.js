import { createApi } from "@reduxjs/toolkit/query/react";
import { allTagList } from "../tagTypes";
import { axiosBaseQuery } from "../../axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://portfolio-admin-server.vercel.app/api" }),
  endpoints: () => ({}),
  tagTypes:allTagList
});