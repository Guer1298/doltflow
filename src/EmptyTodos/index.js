import React from 'react';
import './EmptyTodos.css'; // Para agregar estilos personalizados si es necesario

function EmptyTodos() {
  return (
    <div className="EmptyTodos-container">
      <p className="EmptyTodos-message">¡Crea tu primer TO-DO!</p>
      <p className="EmptyTodos-description">Añadir tareas para organizar mejor tu día. ¡Comienza ahora!</p>
    </div>
  );
}

export { EmptyTodos };
