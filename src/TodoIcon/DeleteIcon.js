import React from 'react';
import PropTypes from 'prop-types';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
      aria-label="Eliminar tarea"
    />
  );
}

DeleteIcon.propTypes = {
  onDelete: PropTypes.func.isRequired, // Aseguramos que onDelete siempre sea una función
};

DeleteIcon.defaultProps = {
  onDelete: () => {}, // Definimos un valor por defecto para onDelete en caso de que no se pase
};

export { DeleteIcon };
