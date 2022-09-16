import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from "reactstrap"
import Forms from './Forms'
import { FetchPostfromLocal ,deletePost} from "./Api"

function FetchPost() {
    const [posts, setPosts] = useState([])



    useEffect(() => {
        loadPost()
    }, [])

    const loadPost = () => FetchPostfromLocal().then(res => setPosts(res.data))

    const removePost = (id) => {
        deletePost(id).then(res => {
            loadPost()
        })
        .catch(err => console.log(err))
    }
    
    return (

        <>

            <h4>CRUD Application</h4>
            <Forms loadPost={loadPost} setPosts={setPosts} handleEdit={handleEdit}/>
            <Table>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        posts.map(post => {
                            return (<tr key={post.id}>
                                <th scope="row">
                                    {post.id}
                                </th>
                                <td>
                                    {post.fname}
                                </td>
                                <td>
                                    {post.lname}
                                </td>
                                <td>
                                    {post.email}
                                </td>
                                <td>
                                    <Button
                                        color='success'
                                        size='sm'
                                        onClick={() => handleEdit(post)}
                                    >
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        color='danger'
                                        size='sm'
                                        onClick={() => removePost(post.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>)
                        }
                        )

                    }



                </tbody>
            </Table>

        </>
    )
}

export default FetchPost