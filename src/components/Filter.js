import React from 'react';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      name:'',
    };
    this.filterProducts = this.filterProducts.bind(this);
  }
  componentDidMount() {
    this.filterProducts();
  }

  async filterProducts() {
    const request = await api.categories();
    this.setState({ 
      id: { request },
      name: '',
    });
  }

  render() {
    const { id, name } = this.state;
    return (
      <div data-testid="category">
        {name.map((name) => (
          <App key={ name.title } name={ name } />
        ))}
      </div>
    );
  }
}