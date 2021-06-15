import React from 'react';
import { getCategories } from '../services/api';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      request: [],
    };
    this.filterProducts = this.filterProducts.bind(this);
  }

  componentDidMount() {
    this.filterProducts();
  }

  async filterProducts() {
    const request = await getCategories();
    this.setState({
      request,
    });
    console.log(request);
  }

  render() {
    const { request } = this.state;
    return (
      <div>
        {request.map((req, index) => (
          <div key={ index } data-testid="category">
            <p>{req.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Filter;
