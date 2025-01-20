import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        console.log('Button clicked');
        setOpenModal(state => !state);
      }}
      aria-label="Abrir formulario para agregar un nuevo todo"  // Mejora de accesibilidad
    >
      +
    </button>
  );
}

export { CreateTodoButton };
