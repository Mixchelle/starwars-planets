// src/components/RemoveAllFilters.js
import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function RemoveAllFilters() {
  const { removeAllFilters } = useContext(PlanetContext);

  return (
    <button
      data-testid="button-remove-filters"
      onClick={ removeAllFilters }
    >
      Remover Todos os Filtros
    </button>
  );
}

export default RemoveAllFilters;
