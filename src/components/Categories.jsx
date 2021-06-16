import React from 'react';
import { getCategories } from '../services/api';

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
      <div>
        { categories.map(({ id, name }) => (
          <p data-testid="category" key={ id } onClick={onClick} id={id} >{ name }</p>
        )) }
      </div>
    );
  }
}

export default Categories;
