// import fetch from 'node-fetch';

export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const resolved = await response.json();
  return resolved;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let URL;
  if (!categoryId) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${''}&q=${query}`;
  } else if (categoryId) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  const response = await fetch(URL);
  const resolved = await response.json();
  return resolved;
}
