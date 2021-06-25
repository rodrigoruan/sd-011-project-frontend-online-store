import React from 'react';
import PropTypes from 'prop-types';
import NewItem from '../components/NewItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.filterFunction();
  }

  /** Função responsável por deletar um item do carrinho de comprar. */
  handleDelete(product) {
    /** Esta função faz a seguinte verificação */
    /** Primeiramente, é recebido o carrinho por props, o carrinho de compras, que é
     * um array */
    const { shoppingCart } = this.state;

    /**
     * 1. Logo, abaixo é criada uma const newList, que receberá um filtro do array
     * shoppingCart.
     * 2. Será feita uma verificação, a cada iteração.
     * 3. Algum "item" de "shoppingCart" tem uma ID diferente a ID do produto recebido no
     * parâmetro da função?
     * 4. Se for diferente, vá adicionando ao "newList" */
    const newList = shoppingCart.filter((item) => item.id !== product.id);

    /** Após o término da iteração, o novo array é criado e adicionado ao State. */
    this.setState({
      shoppingCart: newList,
    });
  }

  /** Função abaixo é chamada toda vez que o componente é montado,
   * ou seja, quando se clica em algo que direcione ao /carrinho */
  filterFunction() {
    /** A props abaixo vem do componente App.js */
    const { cart } = this.props;

    /** Basicamente, a função abaixo tem a tarefa de verificar
     * se um determinado item já se encontra no carrinho.
     */
    const result = cart.reduce((acc, curr) => (
      acc.includes(curr) ? acc : acc.concat(curr)
    ), []);
    this.setState({
      shoppingCart: result,
    });
  }

  render() {
    const { cart, increaseQuantity, decreaseQuantity } = this.props;
    const { shoppingCart } = this.state;

    const emptyCart = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    /** Esta condicional abaixo verifica se o carrinho está vazio.
       * Caso esteja, renderiza uma mensagem "Seu carriho está vazio"
       * Caso contenha algum item, é feita uma renderização dinâmica
       * do componente NewItem. De acordo com a quantidade itens no
       * carrinho, será a quantidade de iterações que o .map irá fazer
       * abaixo */
    return !cart.length ? emptyCart : shoppingCart.map((product, index) => (
      <NewItem
      /** Para NewItem, são passadas algunas props como o "product" que
       * está sendo trabalhado na iteração recorrente, passado "handleDelete",
       * que tem a função de teletar um item do carrinho, "increaseQuantity" e
       * "decreaseQuantity", que tem função de incrementar e decrementar, respe-
       * ctivamente */
        product={ product }
        key={ index }
        handleDelete={ this.handleDelete }
        increaseQuantity={ increaseQuantity }
        decreaseQuantity={ decreaseQuantity }
      />
    ));
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
