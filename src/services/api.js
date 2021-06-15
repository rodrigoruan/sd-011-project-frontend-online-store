export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((result) => result.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Valor padrão é fazer a busca com ambos parametros
  let url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  // Se o input estiver vazio(query) buscará somente pela categoria
  if (query.trim() === '') {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  // Se a categoria não estiver selecionada buscará somente pelo input
  if (categoryId === '') {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  return fetch(url)
    .then((result) => result.json());
}