const baseUrl = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const response = await fetch(`${baseUrl}/categories`);
  const categories = await response.json();

  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${baseUrl}/search?q=${query}+category=${categoryId}`);
  const result = await response.json();

  return result;
}
