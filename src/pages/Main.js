import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      selectedCategoryId: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick({ target: { id } }) {
    this.setState({ selectedCategoryId: id });
  }

  handleSubmit(query) {
    this.setState({
      query,
    });
  }

  render() {
    const { selectedCategoryId, query } = this.state;
    const { forceAppUpdate } = this.props;
    const renderProductList = (<ProductList
      categoryId={ selectedCategoryId }
      query={ query }
      forceAppUpdate={ forceAppUpdate }
    />);
    const paragraph = 'Digite algum termo de pesquisa ou escolha uma categoria.';

    return (
      <div>
        <SearchBar onClick={ this.handleSubmit } />
        { !query && !selectedCategoryId
          ? <p data-testid="home-initial-message">{ paragraph }</p>
          : renderProductList }
        <CategoryFilter onClick={ this.handleCategoryClick } />
      </div>
    );
  }
}

Main.propTypes = {
  forceAppUpdate: PropTypes.func,
}.isRequired;
