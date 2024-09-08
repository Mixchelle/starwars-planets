#!/bin/bash

# Criando diretórios
mkdir -p src/components/Table
mkdir -p src/components/Filter
mkdir -p src/components/NumericFilter
mkdir -p src/context
mkdir -p src/hooks
mkdir -p src/services

# Criando arquivos de componentes
touch src/components/Table/Table.js
touch src/components/Table/Table.css
touch src/components/Filter/Filter.js
touch src/components/Filter/Filter.css
touch src/components/NumericFilter/NumericFilter.js
touch src/components/NumericFilter/NumericFilter.css

# Criando arquivos de contexto
touch src/context/PlanetContext.js
touch src/context/PlanetProvider.js

# Criando arquivo de hook
touch src/hooks/useFetchPlanets.js

# Criando arquivo de serviço
touch src/services/api.js

echo "Estrutura de arquivos e pastas criada com sucesso!"
