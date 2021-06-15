export async function getCategories() {
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(apiUrl)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(apiUrl)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return data;
}
