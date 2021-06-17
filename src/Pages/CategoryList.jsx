import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      auxList: [],
    };
  }

  componentDidMount() {
    this.catchCategory();
  }

  async catchCategory() {
    const categories = await api.getCategories();
    this.setState({
      auxList: categories,
    });
  }

  render() {
    const { auxList } = this.state;
    const { selectListner } = this.props;
    return (
      <label htmlFor="selectCategorie">
        Escolha sua categoria:
        <br />
        <select id="selectCategorie" onClick={ selectListner }>
          {auxList.map((categorie) => (
            <option key={ categorie.id } data-testid="category" value={ categorie.id }>
              {categorie.name}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

CategoryList.propTypes = {
  selectListner: PropTypes.func,
}.isRequerid;

export default CategoryList;
