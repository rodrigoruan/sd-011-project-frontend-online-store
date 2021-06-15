import React from 'react';
import { SearchResults } from '../components';

class Home extends React.Component {
  render() {
    const { productList } = this.props;

    return (
      <main className="home-container">
        <section id="categories" className="home-one-fourth">

        </section>

        <SearchResults productList={productList} />
      </main>
    );
  }
}
export default Home;
