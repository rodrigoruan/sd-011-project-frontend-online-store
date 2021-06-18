import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categorys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
    this.getCategorys = this.getCategorys.bind(this);
    this.rdBtn = this.rdBtn.bind(this);
  }

  componentDidMount() {
    this.getCategorys();
  }

  async getCategorys() {
    this.setState({
      category: await getCategories(),
    });
  }

  async rdBtn({ target }) {
    const { value } = target;
    const { evCtg, evSrch } = this.props;
    evCtg(value);
    console.log('aqui');
    const result = await getProductsFromCategoryAndQuery(value, '');
    evSrch(result.results);
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        { category.map(({ name, id }, index) => (
          <label htmlFor={ index } key={ index }>
            <input
              data-testid="category"
              id={ index }
              name="categoryRadio"
              type="radio"
              value={ id }
              key={ index }
              onClick={ this.rdBtn }
            />
            { name }
          </label>
        )) }
      </div>
    );
  }
}

Categorys.propTypes = {
  evCtg: PropTypes.func.isRequired,
  evSrch: PropTypes.func.isRequired,
};
