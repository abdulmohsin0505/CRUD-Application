import React from "react"
import { Button, Table } from "reactstrap"
import Forms from './Forms'
import { useGlobalContext } from './Context'

function FetchPost() {
    const {posts, handleEdit,removePost,edit } = useGlobalContext()

    return (
        <>
            <h4 className="text-center mt-2">CRUD Application</h4>
            <Forms />
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
                            const {id,fname,lname,email} = post
                            return (<tr key={id}>
                                <th scope="row">
                                    {id}
                                </th>
                                <td>
                                    {fname}
                                </td>
                                <td>
                                    {lname}
                                </td>
                                <td>
                                    {email}
                                </td>
                                <td>
                                    <Button
                                        color='success'
                                        size='sm'
                                        onClick={(e) => handleEdit(post)}
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
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default FetchPost