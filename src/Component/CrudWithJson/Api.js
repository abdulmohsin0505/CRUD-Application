import axios from "axios"
const url = "http://localhost:3003";

export const FetchPostfromLocal = async () => {
    return await axios.get(`${url}/posts`)
}

export const createPost = async (post) => {
    return await axios.post(`${url}/posts`,post)
}
export const deletePost = async (id) => {
    return await axios.delete(`${url}/posts/${id}`)
}

export const editPost = async (id,user) => {
    await axios.put(`${url}/posts/${id}`,user)
}

