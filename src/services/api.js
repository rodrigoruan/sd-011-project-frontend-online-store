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

// Tiramos daqui por conta do teste e colocamos no componente paymentForm.
// export async function getStates() {
//   return fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
//     .then((result) => result.json());
// }

// https://servicodados.ibge.gov.br/api/v1/localidades/estados
// Teste: category=MLB1055&q=Motorola
