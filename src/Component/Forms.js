import React, { useState } from 'react'
import axios from 'axios'

function Forms({loadPost,handleEdit}) {

    const [id, setId] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3003/posts",{
            id:id,
            fname : fname,
            lname : lname,
            email: email
        })
        .then(resp => console.log(resp.data))
        .catch(error => console.log(error))
        loadPost()
    }
 
    const handleEdit = (post) => {
        console.log(post)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="number"
                    placeholder="Enter id"
                    value={id}
                    onChange={(e) => setId(e.target.value)} />
            </div>

            <div>
                <input type="text"
                    placeholder="Enter First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
            </div>
            <div>
                <input type="text"
                    placeholder="Enter Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit" value="submit">Add</button>
        </form>

    )
}

export default Forms