import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default class Home extends Component {
  render() {
    const {
      handleChange,
      fetchProducts,
      fetchCategories,
      addCart,
      categories,
      productCards,
      categoryId,
      search,
      cartItems,
    } = this.props;

    if (categories === []) return <div>Loading...</div>;
    return (
      <div>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to={ {
              pathname: '/cart',
              state: cartItems,
            } }
          >
            <img src="./images/cart.svg" alt="Cart" />
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <label htmlFor="search">
            <input
              type="text"
              data-testid="query-input"
              name="search"
              onChange={ handleChange }
            />
          </label>

          <button
            type="button"
            aria-label="Save" // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
            data-testid="query-button"
            onClick={ fetchProducts }
          >
            Enviar
          </button>
          <h2>Categorias:</h2>
          {categories.map((category) => (
            <button
              type="button"
              data-testid="category"
              key={ category.id }
              value={ category.id }
              name="categoryId"
              onClick={ () => fetchCategories(category.id) }
            >
              {category.name}
            </button>
          ))}
        </div>
        <div>
          {!productCards
            ? <p>Nenhum produto foi encontrado</p> // Tentar retornar apenas após não encontrar
            : productCards.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
                addCart={ addCart }
              />))}
        </div>
      </div>
    );
  }
}
