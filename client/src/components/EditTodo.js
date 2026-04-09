import React, { Fragment, useState } from "react";


const EditTodo = ({ todo }) =>{

    const [description, setDescription] = useState(todo.description);
    
    const updateDescription = async (event) =>{
        event.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:4000/todo/${todo.todo_id}`,
                {
                    method:"PUT",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(body)
                })
                console.log(response);
                window.location = "/";
            
        } catch (error) {
            console.error(error.message);
        }
    };

    console.log(todo);
    return(
        <Fragment>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setDescription(todo.description)}> 
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Todo Edit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}></button> {/* used for no changes until we press edit button at bottom */}
      </div>
      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={event => setDescription(event.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={updateDescription}>Edit</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
    )
}

export default EditTodo;