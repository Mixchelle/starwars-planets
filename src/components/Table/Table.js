/* eslint-disable max-len */
import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import './Table.css';
import NumericFilter from '../NumericFilter/NumericFilter';
import SortFilter from '../SortFilter/SortFilter';
import FilterApplied from '../FilterApplied/FilterApplied';
// Importando todas as imagens
import yaviniv from '../../assets/planets/yaviniv.png';
import tatooine from '../../assets/planets/tatooine.png';
import bespin from '../../assets/planets/bespin.png';
import endor from '../../assets/planets/endor.png';
import kamino from '../../assets/planets/kamino.png';
import alderaan from '../../assets/planets/alderaan.png';
import naboo from '../../assets/planets/naboo.png';
import coruscant from '../../assets/planets/coruscant.png';
import hoth from '../../assets/planets/hoth.png';
import dagobah from '../../assets/planets/dagobah.png';

// Mapeando os nomes dos planetas para as imagens importadas
const planetImages = {
  yaviniv,
  tatooine,
  bespin,
  endor,
  kamino,
  alderaan,
  naboo,
  coruscant,
  hoth,
  dagobah,
};

function Table() {
  const { planets, loading, setFilter } = useContext(PlanetContext);

  if (loading) return <p>Loading...</p>;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      <div className="filtros">
        <NumericFilter />
        <SortFilter />
      </div>
      <div className="filtros filtro-center">
        <FilterApplied />
      </div>
      <div className="input-container">
        <input
          className="buscar"
          type="text"
          placeholder="Filter by name"
          data-testid="name-filter"
          onChange={ (e) => setFilter(e.target.value) }
        />
        <svg
          className="search-icon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          height="20px"
          width="20px"
        >
          <path
            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
            fillRule="evenodd"
            fill="#FFD700"
          />
        </svg>
      </div>
      <div>
        <div className="card-container">
          {planets.map((planet, index) => {
            const imageName = planet.name.toLowerCase().replace(/\s+/g, '');
            const imageSrc = planetImages[imageName] || ''; // Usa a imagem correspondente ou uma string vazia se não encontrar

            return (
              <div className="card" key={ index }>
                <h3>{planet.name}</h3>
                <img
                  className="planet-image"
                  src={ imageSrc }
                  alt={ planet.name }
                />
                <p>
                  <strong>Rotation Period:</strong>
                  {' '}
                  {planet.rotation_period}
                </p>
                <p>
                  <strong>Orbital Period:</strong>
                  {' '}
                  {planet.orbital_period}
                </p>
                <p>
                  <strong>Diameter:</strong>
                  {' '}
                  {planet.diameter}
                </p>
                <p>
                  <strong>Climate:</strong>
                  {' '}
                  {planet.climate}
                </p>
                <p>
                  <strong>Gravity:</strong>
                  {' '}
                  {planet.gravity}
                </p>
                <p>
                  <strong>Terrain:</strong>
                  {' '}
                  {planet.terrain}
                </p>
                <p>
                  <strong>Surface Water:</strong>
                  {' '}
                  {planet.surface_water}
                </p>
                <p>
                  <strong>Population:</strong>
                  {' '}
                  {planet.population}
                </p>
                <p>
                  <strong>Created:</strong>
                  {' '}
                  {formatDate(planet.created)}
                </p>
                <p>
                  <strong>Edited:</strong>
                  {' '}
                  {formatDate(planet.edited)}
                </p>
                <div className="url-films-container">
                  <p>
                    <strong>URL:</strong>
                    <a href={ planet.url } target="_blank" rel="noopener noreferrer">
                      {planet.url}
                    </a>
                  </p>
                  <p>
                    <strong>Films:</strong>
                    {planet.films.map((film, idx) => (
                      <div className="filmes" key={ idx }>
                        <a href={ film } target="_blank" rel="noopener noreferrer">
                          {film}
                        </a>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Table };
