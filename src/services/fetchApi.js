const BASE_URL = 'https://my-json-server.typicode.com/tractian/fake-api';

export const getAllAssets = async () => {
  const allAssetsDataFromApi = await fetch(`${BASE_URL}/assets`);
  const allAssetdata = await allAssetsDataFromApi.json();
  console.log(allAssetdata);
};
