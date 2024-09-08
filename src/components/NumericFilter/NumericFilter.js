// src/components/NumericFilter/NumericFilter.js
import React, { useState, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import RemoveAllFilters from '../RemoveAllFilters/RemoveAllFilters';
import './NumericFilter.css';

function NumericFilter() {
  const { setNumericFilters, availableColumns } = useContext(PlanetContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const handleFilter = () => {
    setNumericFilters({ column, comparison, value });
    setColumn('population'); // Reset to default
    setComparison('maior que'); // Reset to default
    setValue(''); // Reset value
  };

  return (
    <div className="numeric-filter">
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        {availableColumns.map((col) => (
          <option key={ col } value={ col }>{col.replace('_', ' ').toUpperCase()}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>
      <RemoveAllFilters />
    </div>
  );
}

export default NumericFilter;
