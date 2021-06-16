import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categorys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
    this.getCategorys = this.getCategorys.bind(this);
    this.getIdrdbtn = this.getIdrdbtn.bind(this);
  }

  componentDidMount() {
    this.getCategorys();
  }

  async getCategorys() {
    this.setState({
      category: await getCategories(),
    });
  }

  getIdrdbtn({ target }) {
    const { value } = target;
    const { evCtg } = this.props;
    evCtg(value);
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        { category.map(({ name, id }, index) => (
          <label htmlFor={ index } key={ index }>
            { name }
            <input
              data-testid="category"
              id={ index }
              name="categoryRadio"
              type="radio"
              value={ id }
              key={ index }
              onClick={ this.getIdrdbtn }
            />
          </label>
        )) }
      </div>
    );
  }
}

Categorys.propTypes = {
  evCtg: PropTypes.func.isRequired,
};
