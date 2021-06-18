import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  constructor(props) {
    super(props);
    const { countState } = this.props;
    this.state = {
      quantidade: 0,
      countState: 0,
    };
    this.updateComponent = this.updateComponent.bind(this);
  }

  componentDidMount() {
    this.updateComponent();
  }

  updateComponent() {
    const quantity = localStorage.getItem('quantidade');
    this.setState({
      quantidade: quantity,
      countState: quantity,
    });
  }

  render() {
    const { countState } = this.state;
    const { countState: countProps } = this.props;
    return (
      <div>
        <Link
          to="/shoppingCart"
          alt="shopping-cart"
          data-testid="shopping-cart-button"
        >
          carrinho
        </Link>
        <span data-testid="shopping-cart-size">
          { countProps > countState ? countProps : countState }
        </span>
      </div>);
  }
}

export default CartButton;
