import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    // Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setNewTodoValue] =React.useState('');
    // Desestrucutramos las funciones que necesitamos para añadir un TODO y cerar nuestro modal
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    // Función para cerrar el modal
    const onCancel=()=>{
        setOpenModal(false);
    };
    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        event.preventDefault(); // Prevent default para evitar recargar la página
        addTodo(newTodoValue); // Utilizamos nuestra función para añadir nuestro TODO
        setOpenModal(false); // Cerramos nuestro modal
    };
    return (
        <form onSubmit={onSubmit}>
            <label>
                Write a new To-Do
            </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Write here your To-Do..."
            />
            <div className="TodoForm-buttonContainer"> 
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    );
}

export {TodoForm};