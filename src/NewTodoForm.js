import React from 'react';
import './NewTodoForm.css';

const newTodoForm = (props) => {
    return(
        <form onSubmit={props.formSubmitted}>
          <label className="label" htmlFor="newTodo">New Todo:</label>
          <input className="newTodo" onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} />
          <button className="add" type="submit">Add Todo</button>
        </form>
    )
}

export default newTodoForm;