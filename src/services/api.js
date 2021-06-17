export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  try {
    return categories.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const queryProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return queryProducts.json();
}
