import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaulTodos = [ { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Tarea 4', completed: false }, ];


function App() {


  return (
    
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
