export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return request.json();
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
//   return request.json();
// }

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const searchInfo = {
    searchGeneralInfo: [],
    searchProdList: [],
  };

  await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json())
    .then(async (data) => {
      searchInfo.searchGeneralInfo = data;

      await data.results.map((item) => fetch(`https://api.mercadolibre.com/items/${item.id}`)
        .then((responseItem) => responseItem.json())
        .then((itemData) => {
          searchInfo.searchProdList = [...searchInfo.searchProdList, itemData];
        }));
    });

  return searchInfo;
}
