import React, { useState, useEffect } from 'react';
import './TodosLoading.css';

function TodosLoading({ loadingText = 'Cargando...', onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simula el fin de la carga después de 3 segundos
      if (onComplete) onComplete(); // Llama a la función de "completado"
    }, 3000);

    return () => clearTimeout(timer); // Limpieza al desmontar el componente
  }, [onComplete]);

  return (
    <div className="LoadingTodo-container" aria-live="polite">
      <span
        className={`LoadingTodo-completeIcon ${!isLoading ? 'visible' : ''}`}
        role="status"
        aria-hidden={isLoading}
      ></span>
      <p className="LoadingTodo-text">{isLoading ? loadingText : 'Carga completa!'}</p>
      <span
        className={`LoadingTodo-deleteIcon ${!isLoading ? 'visible' : ''}`}
        role="status"
        aria-hidden={isLoading}
      ></span>
    </div>
  );
}

export { TodosLoading };
