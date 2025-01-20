import React from 'react';
import { TodoProvider } from '../TodoContext';  // Asegúrate de que la ruta sea correcta
import { AppUI } from './AppUI';

/**
 * Componente principal de la aplicación.
 * 
 * Este componente envuelve toda la aplicación dentro de un `TodoProvider`, 
 * que proporciona el contexto necesario para gestionar las tareas y el estado global.
 */
function App() {
  return (
    /**
     * `TodoProvider` envuelve toda la app para proporcionar el contexto de tareas
     * y gestionar su estado global, haciendo que el acceso a los datos y 
     * funciones necesarias esté disponible para cualquier componente que lo requiera.
     */
    <TodoProvider>
      {/* `AppUI` es el componente que maneja la interfaz de usuario */}
      <AppUI />
    </TodoProvider>
  );
}

export default App;
