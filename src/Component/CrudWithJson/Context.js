import React, { useContext, useState, useEffect } from "react";
import { createPost, FetchPostfromLocal, deletePost, editPost } from './Api'

const Context = React.createContext()

let initialValue = {
    id: "",
    fname: "",
    lname: "",
    email: ""
}

export const AppProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(initialValue)

    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState()

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const loadPost = () => FetchPostfromLocal().then(res => setPosts(res.data))


    useEffect(() => {
        loadPost()
    }, [posts])



    const removePost = (id) => {
        deletePost(id).then(res => {
            loadPost()
        })
            .catch(err => console.log(err))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit === false) {
            createPost({ ...post })
                .then(resp => {
                    console.log(resp.data)
                    loadPost()
                    setPost(initialValue)
                })
                .catch(err => console.log(err))
        }

        if (edit === true) {
            editPost(editId, { ...post })
                .then(res => {
                    console.log(res.data)
                    loadPost()
                    setPost(initialValue)
                })
                .catch(er => console.log(er))
        }
    }

    const handleEdit = (user) => {

        const { id, fname, lname, email } = user

        setEdit(true)
        setEditId(id)
        setPost({
            id: id,
            fname: fname,
            lname: lname,
            email: email
        })

    }
    return (
        <Context.Provider
            value={{
                handleEdit,
                posts,
                handleChange,
                handleSubmit,
                post,
                setPost,
                edit,
                removePost,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Context)
}