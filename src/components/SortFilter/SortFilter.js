// src/components/SortFilter/SortFilter.js
import React, { useState, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import './SortFilter.css';

function SortFilter() {
  const { setOrder } = useContext(PlanetContext);
  const [column, setColumn] = useState('population');
  const [sortOrder, setSortOrder] = useState('ASC');

  const handleSort = () => {
    setOrder({ column, sort: sortOrder });
  };

  return (
    <div className="sort-filter">
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>

      <div className="sortOrder">
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="ASC"
            checked={ sortOrder === 'ASC' }
            onChange={ () => setSortOrder('ASC') }
          />
          Ascendente
        </label>
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="DESC"
            checked={ sortOrder === 'DESC' }
            onChange={ () => setSortOrder('DESC') }
          />
          Descendente
        </label>
      </div>

      <button
        data-testid="column-sort-button"
        onClick={ handleSort }
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortFilter;
