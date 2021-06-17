export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJSON = await categories.json();
  return categoriesJSON;
}

export async function getProductsFromQuery(query) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const productsJSON = await products.json();
  return productsJSON;
}

export async function getProductsByCategoryId(categoryId) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const productsJSON = await products.json();
  return productsJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    return getProductsByCategoryId(categoryId);
  }
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const productsJSON = await products.json();
  return productsJSON;
}
