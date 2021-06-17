export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(category, query) {
  if (category && query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}_ID&q=${query}`);
    const data = await response.json();
    return data;
  }

  if (query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();
    return data;
  }

  if (category) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
    const data = await response.json();
    return data;
  }
}
