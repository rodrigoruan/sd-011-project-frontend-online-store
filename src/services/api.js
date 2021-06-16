export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return fetchCategories.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query, gambi= true) {
  if (gambi) {
  const fetchQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return fetchQuery.json();
  } else {
    const fetchQuery = await fetch(`https://api.mercadolibre.com/items/${categoryId}`);
    return fetchQuery.json();
  }
}

