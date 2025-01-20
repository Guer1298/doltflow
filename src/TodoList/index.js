import React from 'react';
import './TodoList.css';

function TodoList({ children, isLoading, isError, emptyState }) {
  return (
    <ul className="TodoList" >
      {isLoading && <p className="TodoList-message">Cargando tareas...</p>}
      {isError && <p className="TodoList-message TodoList-message--error">Ocurrió un error. Por favor, inténtalo de nuevo.</p>}
      {!isLoading && !isError && React.Children.count(children) === 0 && (
        <p className="TodoList-message TodoList-message--empty">{emptyState || 'No hay tareas disponibles.'}</p>
      )}
      {!isLoading && !isError && children}
    </ul>
  );
}

export { TodoList };
