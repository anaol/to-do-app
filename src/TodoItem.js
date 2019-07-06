import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    const { todo, index } = props;
    return(
        <li>
            <input className="checkbox" onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
            <span className={todo.done ? 'done' : ''}>{todo.title}</span>
            <button className="remove" onClick={() => props.removeTodo(index)}>Remove</button>
        </li>
    );
};

export default TodoItem;