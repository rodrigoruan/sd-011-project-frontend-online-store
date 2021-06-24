export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return response.json();
}

export async function getProductsFromQuery(query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  return response.json();
}

export async function getProductsFromCategory(categoryId) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  return response.json();
}

export async function getProductById(productId) {
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const xablau = await response.json();
  console.log(xablau);
  return xablau;
}
