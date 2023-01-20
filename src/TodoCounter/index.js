import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext); 
    // const {total, completed} = props;
    return (
        <h2 className="TodoCounter"> You Have {completedTodos} of {totalTodos} To-do </h2>
    );
}
export { TodoCounter };