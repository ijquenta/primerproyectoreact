import React from "react";
import { useLocalStore } from "./useLocalStorage";

// Al crear el contexto también podemos pasarla un valor inicial entre los paréntesis
const TodoContext = React.createContext();

function TodoProvider(props) {
  // uso de Hook LocalStore
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos, globales
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStore("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState('');


  // configuration Modal 
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length; // Cantidad de TODO's completado
  const totalTodos = todos.length; // Total de TODO's completados e incompletos.

  let searchedTodos = []; // creando un Array

  if (!searchValue.length >= 1) {
    // verificando no tiene algun elemento.
    searchedTodos = todos;
  } else {
    // Retornamos todos los todos que esten incluidos según lo que escribimos en el buscador
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos]; // Crear un nueva lista de TODO's sprite-operation
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // Buscamos la posición del Todo con el texto.
    const newTodos = [...todos]; // Crear un nueva lista de TODO's sprite-operation
    newTodos[todoIndex].completed = true; // Guardar todos los TODO's que esten completed
    // setTodos(newTodos); // Actulizamos el estado
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); // Eliminar un elemento (sacar un tajada de torta)
    // setTodos(newTodos);
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  // console.log('Render (antes del use effect)');

  // // Manejo de Efectos en React
  // React.useEffect(() => {
  //  console.log('use effect');
  // }, [totalTodos]);

  // console.log('Render (despues del use effect)');

  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestr aplicación, por eso necessitamos la prop children
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}
// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };