import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import ContextProvider from '../context/PlanetProvider'; // Corrigir o caminho se necessário
import Data from '../../cypress/mocks/testData';

describe('Testa o componente App', () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(Data)
    });

    await act(async () => {
      render(
        <ContextProvider>
          <App />
        </ContextProvider>
      );
    });
  });

  test('a tabela é renderizada na tela', async () => {
    // Esperar que a tabela seja renderizada após a carga dos dados
    await waitFor(() => {
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
    });
  });
});

