import React from 'react';
import './TodosError.css'; // Añadimos un archivo de estilos para mejorar la UI

function TodosError({ errorMessage = 'Ocurrió un error, por favor intente nuevamente.' }) {
  return (
    <div className="Error-container" role="alert" aria-live="assertive">
      <p className="Error-message">{errorMessage}</p>
    </div>
  );
}

export { TodosError };
