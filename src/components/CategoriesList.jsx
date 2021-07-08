import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Loading from './Loading';

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      categories: undefined,
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
  }

  render() {
    const { loading, categories } = this.state;
    const { onClick } = this.props;
    if (loading) return <Loading />;

    return (
      <div>
        {categories.map((category) => (
          <label
            htmlFor={ category.id }
            key={ category.id }
            data-category-id={ category.id }
            data-testid="category"
          >
            <input
              id={ category.id }
              type="checkbox"
              data-category-id={ category.id }
              onChange={ onClick }
            />
            <button
              type="button"
              data-category-id={ category.id }
              onClick={ onClick }
            >
              { category.name }
            </button>
          </label>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default CategoriesList;
