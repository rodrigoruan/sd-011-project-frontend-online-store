import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  render() {
    api.getCategories()
      .then((categories) => console.log(categories))
      .catch((err) => console.error(err));
    return (

      <div>

        <main className="home-container">
          <p
            className="home-initial-message"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <button type="button">carrinho</button>
          </Link>

        </main>
      </div>
    );
  }
}
export default Home;
