const BASE_URL = 'https://my-json-server.typicode.com/tractian/fake-api';

export const getAll = async (endpoint) => {
  console.log(endpoint)
  try {
    const dataFromApi = await fetch(`${BASE_URL}/${endpoint}`);
    const allData = await dataFromApi.json();
    return allData;
  } catch (err) {
    console.log('TO AQUI'); // porque não entra aqui?
  }
};
