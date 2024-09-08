export const fetchPlanets = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();
    return data.results.map((planet) => {
      const { residents, ...rest } = planet;
      return rest;
    });
  } catch (error) {
    console.error('Error fetching planets:', error);
    return [];
  }
};
