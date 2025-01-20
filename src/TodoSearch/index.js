import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-container">
      <label htmlFor="search-input" className="TodoSearch-label">Buscar Tarea</label>
      <input
        id="search-input"
        type="text"
        className="TodoSearch"
        value={searchValue}
        onChange={handleChange}
        placeholder="Buscar..."
        aria-label="Buscar tarea"
        aria-describedby="search-help-text"
      />
      <small id="search-help-text" className="TodoSearch-helperText">
        Escribe el nombre de la tarea para buscar.
      </small>
    </div>
  );
}

export { TodoSearch };
