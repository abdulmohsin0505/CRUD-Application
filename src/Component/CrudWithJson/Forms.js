import React from 'react'
import { useGlobalContext } from './Context'
import {Input} from "reactstrap"


function Forms() {
    const { edit,handleChange, handleSubmit, post } = useGlobalContext()

    const { id, fname, lname, email } = post

    return (
        <div className="container">
            <form 
            onSubmit={handleSubmit}
            className=" d-flex justify-content-center flex-column align-item-center my-3"
             >
                <div>
                    <Input
                        type="number"
                        placeholder="Enter Priority"
                        className='mt-2'
                        value={id}
                        name="id"
                        onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <Input type="text"
                        placeholder="Enter First Name"
                        className='mt-2'
                        value={fname}
                        name="fname"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <Input type="text"
                        placeholder="Enter Last Name"
                        className='mt-2'
                        value={lname}
                        name="lname"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        className='mt-2'
                        value={email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button 
                className='btn btn-primary mt-2'
                type="submit" 
                value="submit">{edit ? "Update" : "Add"}
                </button>
            </form> 
        </div>

    )
}

export default Forms