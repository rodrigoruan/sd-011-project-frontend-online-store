import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchFilterCategories();
  }

  async fetchFilterCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;

    if (!categories) return <p>loading...</p>;
    return (
      <div>
        {
          categories.map((cat) => (
            <label
              htmlFor={ cat.id }
              key={ cat.id }
              style={ { display: 'block', padding: '5px' } }
            >
              <input
                type="radio"
                id={ cat.id }
                name="category"
                data-testid="category"
                onClick={ onClick }
              />
              { cat.name }
            </label>
          ))
        }
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};
