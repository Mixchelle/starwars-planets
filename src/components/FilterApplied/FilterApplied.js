// src/components/FilterApplied/FilterApplied.js
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import PlanetContext from '../../context/PlanetContext';
import './FilterApplied.css'; // Ajuste o caminho conforme necessário
import bixinho from '../../assets/bixinho.png';

export default function FilterApplied() {
  const { appliedFilters, handleEraseFilter } = useContext(PlanetContext);

  // Verifica se há filtros aplicados
  if (appliedFilters.length === 0) {
    return null; // Retorna null para não renderizar nada se não houver filtros
  }

  return (
    <div className="flex">
      <div className="filter-applied-card">
        <div className="filter-applied-title">Filtros Aplicados</div>
        <div>
          <div className="filter-applied-container">
            {appliedFilters.map((filter, i) => (
              <section data-testid="filter" key={ i } className="filter__bar">
                <span data-testid="column" className="filter__text">{filter.column}</span>
                <span
                  data-testid="comparison"
                  className="filter__text"
                >
                  {filter.comparison}
                </span>
                <span data-testid="value" className="filter__text">{filter.value}</span>
                <button
                  data-testid="x"
                  className="filter__button"
                  onClick={ () => handleEraseFilter(filter) }
                >
                  <FaTrash />
                </button>
              </section>
            ))}
          </div>
        </div>
      </div>
      <img className="bixinho" src={ bixinho } alt="" />
    </div>
  );
}
