// src/context/PlanetProvider.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchPlanets } from '../services/api';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [numericFilters, setNumericFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });

  useEffect(() => {
    const getPlanets = async () => {
      setLoading(true);
      const data = await fetchPlanets();
      setPlanets(data);
      setLoading(false);
    };
    getPlanets();
  }, []);

  const filteredByText = planets
    .filter((planet) => planet.name.toLowerCase().includes(filter.toLowerCase()));

  const filteredByNumeric = filteredByText
    .filter((planet) => numericFilters.every(({ column, comparison, value }) => {
      const columnValue = parseFloat(planet[column]);
      const filterValue = parseFloat(value);

      switch (comparison) {
      case 'maior que':
        return columnValue > filterValue;
      case 'menor que':
        return columnValue < filterValue;
      case 'igual a':
        return columnValue === filterValue;
      default:
        return true;
      }
    }));

  const sortedPlanets = filteredByNumeric.sort((a, b) => {
    const valueA = a[order.column] === 'unknown' ? Infinity : parseFloat(a[order.column]);
    const valueB = b[order.column] === 'unknown' ? Infinity : parseFloat(b[order.column]);

    return order.sort === 'ASC' ? valueA - valueB : valueB - valueA;
  });

  const addFilter = (newFilter) => {
    setAppliedFilters((prevFilters) => {
      // Avoid adding duplicate filters
      if (prevFilters.some((f) => f.column === newFilter.column
        && f.comparison === newFilter.comparison
        && f.value === newFilter.value)) {
        return prevFilters;
      }
      return [...prevFilters, newFilter];
    });
    setNumericFilters((prevFilters) => [
      ...prevFilters,
      newFilter,
    ]);
  };

  const handleEraseFilter = (filterToRemove) => {
    setAppliedFilters((prevFilters) => prevFilters
      .filter((f) => f !== filterToRemove));
    setNumericFilters((prevFilters) => prevFilters
      .filter((f) => f.column !== filterToRemove.column));
  };

  const removeFilter = (column) => {
    setNumericFilters((prevFilters) => prevFilters
      .filter((f) => f.column !== column));
  };

  const removeAllFilters = () => {
    setNumericFilters([]);
    setAppliedFilters([]);
  };

  const availableColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
    .filter((column) => !numericFilters.some((f) => f.column === column));

  return (
    <PlanetContext.Provider
      value={ {
        planets: sortedPlanets,
        loading,
        setFilter,
        setNumericFilters: addFilter,
        removeFilter,
        removeAllFilters,
        availableColumns,
        setOrder,
        appliedFilters,
        handleEraseFilter,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
