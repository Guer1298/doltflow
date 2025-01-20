import React from "react";
import PropTypes from "prop-types";
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  const iconColor = completed ? 'green' : 'gray';

  return (
    <TodoIcon
      type="check"
      color={iconColor}
      onClick={onComplete}
      aria-label={completed ? "Marcar tarea como incompleta" : "Marcar tarea como completada"}
    />
  );
}

CompleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired, // Asegura que `completed` siempre sea un booleano
  onComplete: PropTypes.func.isRequired, // Asegura que `onComplete` siempre sea una función
};

CompleteIcon.defaultProps = {
  completed: false, // Definimos un valor predeterminado para `completed`
  onComplete: () => {}, // Definimos un valor por defecto para `onComplete` en caso de que no se pase
};

export { CompleteIcon };
