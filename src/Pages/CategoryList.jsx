import React, { Component } from 'react';
import * as api from './services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      CategoryList: [],
    };
    this.catchCategory = this.catchCategory.bind(this);
  }

  async catchCategory() {
    await api.get;
  }

  render() {
    return (
      <div>
        textInComponent
      </div>
    );
  }
}

export default CategoryList;
