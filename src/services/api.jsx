// import fetch from 'node-fetch';

export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const resolved = await response.json();
  return resolved;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(URL);
    const resolved = await response.json();
    return resolved;
  } else if (!categoryId) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${''}&q=${query}`;
    const response = await fetch(URL);
    const resolved = await response.json();
    return resolved;
  }
}
