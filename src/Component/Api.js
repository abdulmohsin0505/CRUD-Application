import axios from "axios"

export const FetchPostfromLocal = async () => {
    return await axios.get("http://localhost:3003/posts")
}

export const deletePost = async (id) => {
    return await axios.delete(`http://localhost:3003/posts/${id}`)
}


