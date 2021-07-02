import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import './Categories.css';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <div className="categories">
        { categories.map(({ id, name }) => (
          <label htmlFor={ id } key={ id } className="categorie">
            <input
              type="radio"
              data-testid="category"
              name="category"
              onClick={ onClick }
              id={ id }
            />
            { name }
          </label>
        )) }
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
