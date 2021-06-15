export async function getCategories() {
  // Implemente aqui
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/');
  return data.categories;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
