import React, { useCallback } from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  const handleClick = useCallback((event) => {
    if (onClick) onClick(event);
  }, [onClick]);

  // Validación de tipo de ícono
  if (!iconTypes[type]) {
    console.error(`Icon type "${type}" is not valid.`);
    return null; // Si el tipo no es válido, no renderizamos nada.
  }

  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={handleClick}
      role="button"
      aria-label={type === 'check' ? 'Marcar tarea como completada' : 'Eliminar tarea'}
      tabIndex="0"
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
