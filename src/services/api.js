export async function getCategories() {
  // Implemente aqui
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((categories) => categories.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (categoryId && !query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`, {
      method: 'GET',
    })
      .then((products) => products.json())
      .catch((error) => console.log(`Erro: ${error}`));
  } if (!categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`, {
      method: 'GET',
    })
      .then((products) => products.json())
      .catch((error) => console.log(`Erro: ${error}`));
  } if (categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`, {
      method: 'GET',
    })
      .then((products) => products.json())
      .catch((error) => console.log(`Erro: ${error}`));
  }
}
