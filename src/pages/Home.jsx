import React from 'react';
import { Link } from 'react-router-dom';
// import { MdShoppingCart } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          {/* <MdShoppingCart />  */}
          imagenzinha
        </Link>
      </main>
    );
  }
}

export default Home;
