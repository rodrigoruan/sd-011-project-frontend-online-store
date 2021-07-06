import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cart: [] };

    this.addState = this.addState.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  /** Esta função "addState" é responsável por adicionar um item ao carrinho.
   * Basicamente, ele recebe por parâmetro um produto específico. Esse parâmetro
   * é um item que apareceu na home, assim que uma requisição é feita, ou na
   * página de detalhes.
   * Isto é, Details.jsx e CardItem.jsx tem o addState para esta tarefa. */
  addState(product) {
    /** Variável que será editada, por isso em let it change 👀 */
    let newCart = [];
    const { cart } = this.state;

    /** A const anyProduct será criada de acordo com um item que foi
     * passado por parâmetro na função "addState". Será passado um
     * .find() no cart, que vem do state, que deve ser um array de objetos.
     * AnyProduct será a const responsável por armazenar o primeiro
     * produto que satisfaça a condição do .find(). Logo mais pra frente,
     * há uma verificação: Se o ID de item === ID do produto passado por
     * parâmetro em "addState", traga esse produto para mim e jogue na variável
     * anyProduct. */
    const anyProduct = cart.find((item) => item.id === product.id);

    /** Caso a condição for atendida acima, anyProduct ficará true, e passará na
     * condicional abaixo */
    if (anyProduct) {
      /** newCart, pelo fato de ser let, pode ser modificada. Então, a cada itera-
       * ção do .map() abaixo irá veficiar se algum ID de "item" === ao ID do anyProduct.
       * Caso for igual, adicione +=1 na quantidade deste item e depois retorne-o.
       */
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
       * spread, é como se fosse um .push(), mas o mesmo não deve ser utilizado
       * devido a problemas relacionados ao React, onde ele em vez dele unificar
       * o array, ele faz algo do tipo:
       * [Array anterior, [novo array]] */
      newCart = [...cart, product];
    }
    /** Após o ocorrido, o newCart é adicicionado ao cart */
    this.setState(() => ({ cart: newCart }));
  }

  /** Função responsável por incrementar a quantidade de itens ao carrinho . */
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
    const { cart } = this.state;
    return (
      <div className="style-page">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => <Home addState={ this.addState } /> } />
            <Route
              exact
              path="/carrinho"
              render={ () => (<ShoppingCart
                cart={ cart }
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
