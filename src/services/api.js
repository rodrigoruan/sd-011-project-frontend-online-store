export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories').then(
    (resolve) => resolve.json(),
  );
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requisicao = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await requisicao.json();
  return response;
}
