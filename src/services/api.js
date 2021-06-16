export async function getCategories() {
  // Implemente aqui
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = categories.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const dataQuery = response.json();
  return dataQuery;
}
