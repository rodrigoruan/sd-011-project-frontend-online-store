export async function getCategories() {
  const fetchML = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const respostaJson = await fetchML.json();
  return respostaJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query) {
    const fetchQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const respostaJson = await fetchQuery.json();
    return respostaJson;
  }

  const fetchId = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const respostaJson = await fetchId.json();
  return respostaJson;
}
