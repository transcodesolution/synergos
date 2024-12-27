import { IGetPostsResponse } from "@/lib/api-types/post";
import axiosInstance from "../http-common";

export const getPosts = async (): Promise<IGetPostsResponse[]> => {
    try {
        const response = await axiosInstance.get<IGetPostsResponse[]>('/posts')
        return response.data;
    }
    catch (error) {
        throw new Error('error while fetching blogs')
    }
}