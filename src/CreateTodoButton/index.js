import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, openModal }) {
     const onClickButton = () => {
      if (openModal) {
        setOpenModal(false);
      } else {
        setOpenModal(true);
      }
    };

  return (
    <button
      className="CreateTodoButton fa fa-plus-square-o"
      // Aqui van los eventos..
      onClick={() => onClickButton()} // envolverlo en una función
    ></button>
  );
}
export { CreateTodoButton };
