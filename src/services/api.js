export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const category = await response.json();
  return category;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let response = '';
  if (query === '') {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  }
  const products = await response.json();
  return products;
}
