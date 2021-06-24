import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      quantity: 0,
    };

    this.addState = this.addState.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  /** Esta função "addState" é responsável por adicionar um item ao carrinho.
   * Basicamente, ele recebe por parâmetro um produto específico. Esse parâmetro
   * é um item que apareceu na home, assim que uma requisição é feita. */
  addState(product) {
    let newCart = [];
    const { cart } = this.state;
    const anyProduct = cart.find((item) => item.id === product.id);

    if (anyProduct) {
      newCart = cart.map((item) => {
        if (item.id === anyProduct.id) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
    } else {
      /** Caso o produto ainda não exista no carrinho, será adicionado
       *  uma chave chamada "quantity" e o valor dela será 1, significando
       * que é o primeiro produto daquele tipo no carrinho */
      product.quantity = 1;
      /** Aqui abaixo é feita a junção do carrinho com o produto, utilizando
       * spread. O .push() não deve ser utilizado devido a problemas relacionados
       * ao React, onde ele em vez dele unificar o array, ele faz algo do tipo:
       * [Array anterior, [novo array]] */
      newCart = [...cart, product];
    }

    /** Após o ocorrido, o newCart é adicicionado ao cart */
    this.setState(() => ({
      cart: newCart,
    }));
  }

  /** Função responsável por incrementar a quantidade de itens ao carrinho. */
  increaseQuantity(product) {
    const { cart } = this.state;
    const newArr = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    this.setState({
      cart: newArr,
    });
  }

  /** Função responsável por decrementar a quantidade de itens ao carrinho. */
  decreaseQuantity(product) {
    const { cart } = this.state;
    const newArr = cart.map((item) => {
      if (item.id === product.id && item.quantity > 0) {
        item.quantity -= 1;
        return item;
      }
      return item;
    });
    this.setState({
      cart: newArr,
    });
  }

  render() {
    const { cart, quantity } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => <Home addState={ this.addState } /> } />
            <Route
              exact
              path="/carrinho"
              render={ () => (<ShoppingCart
                cart={ cart }
                quantity={ quantity }
                decreaseQuantity={ this.decreaseQuantity }
                increaseQuantity={ this.increaseQuantity }
              />) }
            />
            <Route
              exact
              path="/details/:id"
              render={ (props) => (<Details { ...props } addState={ this.addState } />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
