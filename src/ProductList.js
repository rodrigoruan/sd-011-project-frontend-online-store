import React from 'react';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.change = this.change.bind(this);
  }

  change(event) {
    const searchWord = event.target.value;
    this.setState({
      inputValue: searchWord,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input type="text" onChange={ this.change } />
        <button type="button">{ inputValue }</button>
        <ProductCard dado='dado aqui' />
      </div>
    );
  }
}

export default ProductList;
