export async function getCategories() {
  const fetchProducts = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await fetchProducts.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
