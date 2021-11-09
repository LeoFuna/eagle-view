const BASE_URL = 'https://my-json-server.typicode.com/tractian/fake-api';

export const getAll = async (endpoint) => {
  const dataFromApi = await fetch(`${BASE_URL}/${endpoint}`);
  const allData = await dataFromApi.json();
  return allData;
};
