// import fetch from 'node-fetch';

export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  // const URL = 'https://randomuser.me/api/';
  const response = await fetch(URL);
  const resolved = await response.json();
  console.log(resolved);
  return resolved;

  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
