import React, { Fragment } from 'react';
import { useState } from 'react';
import './InputTodo.css';


  

const InputTodo = () =>{
    

    const [description, setDescription] = useState("");
    const submitForm = async (e) =>{
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:4000/todo`,{
                method: "post",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
                });
                // window.location.reload();
                window.location = '/';
                console.log(response);
                } catch (error) {
                    console.error(error.message);
                }
                
    }

    return(
        <Fragment>
           <h1 className='text-center mt-5'>Pern Todo List</h1>
           <form className='d-flex mt-5' onSubmit={submitForm}>
            <input type='text' className='form-control' value={description} onChange={event => setDescription(event.target.value)}/>
            <button className='btn btn-success'>Add</button>
           </form>
        </Fragment>
    )
}

export default InputTodo;