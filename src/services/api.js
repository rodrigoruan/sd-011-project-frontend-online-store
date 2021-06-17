export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}

// export async function getProductsFromQuery(query) {
//   return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
//     .then((response) => response.json());
// }

// export async function getProductsFromCategoryId(id) {
//   return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${id}`)
//     .then((response) => response.json());
// }
