import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      {/* Icono de completar tarea */}
      <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        aria-label={`Marcar como ${completed ? 'incompleta' : 'completa'} la tarea "${text}"`}
      />

      {/* Texto de la tarea */}
      <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>
        {text}
      </p>

      {/* Icono de eliminar tarea */}
      <DeleteIcon
        onDelete={onDelete}
        aria-label={`Eliminar la tarea "${text}"`}
      />
    </li>
  );
}

export { TodoItem };
