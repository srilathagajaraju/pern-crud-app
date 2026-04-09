import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:4000/todo/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todos => todos.todo_id !== id));
            console.log(deleteTodo);
        } catch (error) {
            console.error(error.message);
        }
    }

    

    const getTodos = async() => {
        try {  
            const response = await fetch("http://localhost:4000/todo");
            const jsonData = await response.json();
                        
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);   
        }
    };

    useEffect(() =>{
        getTodos();
    }, []);
    console.log(todos);
    return (
    <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todos => (
        <tr key={todos.todo_id}>
            <td>
                {todos.description}
            </td>
            <td><button className="btn"><EditTodo todo={todos}/></button></td>  
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todos.todo_id)}>Delete</button></td>
        </tr>
      ))

      }
    </tbody>
  </table>
    </Fragment>
    )
};

export default ListTodos;